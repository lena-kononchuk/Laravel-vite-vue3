<template>
    <div class="section background__linear blue-purple" id="enquiry">
        <div class="wrapper">
            <div class="center-xs box3x">
                <div class="h2 box uppercase">Contact Us</div>
                <div class="center-xs separator box3x"></div>
                <div class="center-xs middle-sm flex-vertical box2x" style="align-items: center;">
                    <i class="small fas fa-phone-alt yellow circle circle--small flex center-xs middle-xs box--small"></i>
                    <a class="h4 purple link" href="tel:+3579056759">+357 9056759</a>
                </div>
                <div class="center-xs middle-sm flex-vertical" style="align-items: center;">
                    <i class="small fas fa-envelope yellow circle circle--small flex center-xs middle-xs box--small"></i>
                    <a class="h4 purple link" href="mailto:contact@pamrelocation.com">contact@pamrelocation.com</a>
                </div>
            </div>

            <div class="form card card__form center-xs box">
                <div v-if="isSubmitted">
                    <div class="h4 uppercase">Thank You!</div>
                    <div class="h4 box2x uppercase">Your request is being reviewed!</div>
                    <div class="text">One of our team members will get in touch with you soon</div>
                </div>

                <div v-else>
                    <div class="h3 uppercase box">Send Inquiry</div>
                    <form @submit.prevent="submitForm" style="max-width: 580px; margin: 0 auto;">
                        <div class="row">
                            <div class="box col-xs-12 col-sm-6">
                                <div class="box2x relative">
                                    <input type="text" id="name" v-model="formData.name" class="input"
                                        :class="{ 'input--error': formData.name && !isNameValid }"
                                        @focus="handleFocus('name')" @blur="handleBlur('name')" :maxlength="60"
                                        :disabled="formIsSubmitting" tabindex="1" required />
                                    <label for="name" class="input__label"
                                        :class="{ 'active': isInputActive.name || formData.name, 'label--error': formData.name && !isNameValid }">
                                        Your name *
                                    </label>
                                    <span v-if="formData.name && !isNameValid" class="input__error">Name must be 3–60 characters long.</span>
                                </div>
                            </div>

                            <div class="box col-xs-12 col-sm-6">
                                <div class="box2x relative">
                                    <input type="email" id="email" v-model="formData.email" class="input"
                                        :class="{ 'input--error': formData.email && !isEmailValid }"
                                        @focus="handleFocus('email')" @blur="handleBlur('email')" :maxlength="160"
                                        :disabled="formIsSubmitting" tabindex="2" required />
                                    <label for="email" class="input__label"
                                        :class="{ 'active': isInputActive.email || formData.email, 'label--error': formData.email && !isEmailValid }">
                                        Email *
                                    </label>
                                    <span v-if="formData.email && !isEmailValid" class="input__error">Enter a valid email address.</span>
                                </div>
                            </div>

                            <div class="box col-xs-12 col-sm-6">
                                <div class="box2x relative">
                                    <input type="text" id="subject" v-model="formData.subject" class="input"
                                        :class="{ 'input--error': formData.subject && !isSubjectValid }"
                                        @focus="handleFocus('subject')" @blur="handleBlur('subject')" :maxlength="100"
                                        :disabled="formIsSubmitting" tabindex="3" required />
                                    <label for="subject" class="input__label"
                                        :class="{ 'active': isInputActive.subject || formData.subject, 'label--error': formData.subject && !isSubjectValid }">
                                        Subject *
                                    </label>
                                    <span v-if="formData.subject && !isSubjectValid" class="input__error">Subject must be 3–100 characters long.</span>
                                </div>
                            </div>

                            <custom-input-phone :class="phoneClass"
                                v-model="formData.phone"
                                :is-valid="isPhoneValid"
                                :disabled="formIsSubmitting"
                                tabindex="4"
                            />
                        </div>

                        <div class="box-small relative">
                            <textarea placeholder="Your message" class="input input--textarea box"
                                v-model="formData.message"
                                :disabled="formIsSubmitting"
                                :class="{ 'is-invalid': errors.message }">
                            </textarea>
                            <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
                        </div>

                        <div class="box relative">
                            <label class="checkbox">
                                <input class="checkbox__input" type="checkbox" v-model="formData.agree"
                                    :disabled="formIsSubmitting"
                                    :class="{ 'is-invalid': errors.agree }"
                                    required />
                                <span class="checkbox__checkmark start-xs"></span>
                                By clicking “Submit button” you accept our <span class="purple">Terms & Conditions</span> and have read our
                                <router-link to="/disclaimer" class="link purple">Disclaimer</router-link> and
                                <router-link to="/privacy-policy" class="link purple">Privacy Policy</router-link>
                            </label>
                            <span v-if="errors.agree" class="text-danger">{{ errors.agree }}</span>
                        </div>

                        <button type="submit"
                            class="button button--yellow"
                            :class="{ loading: formIsSubmitting }"
                            :disabled="formIsSubmitting || !isFieldValid">
                            <span v-if="formIsSubmitting">Submitting...</span>
                            <span v-else>Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import CustomInputPhone from './CustomInputPhone.vue';

// Reactive form data object
const formData = ref({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    agree: false
});

// Reactive state for input focus
const isInputActive = ref({
    name: false,
    email: false,
    phone: false,
    subject: false,
});

// Reactive state for loading and form submission status
const isLoading = ref(false);
const errors = ref({});
const formIsSubmitting = ref(false);
const isSubmitted = ref(false);

const handleFocus = (field) => {
    isInputActive.value[field] = true;
};

const handleBlur = (field) => {
    isInputActive.value[field] = false;
};




// Input validation logic
const isNameValid = computed(() => formData.value.name !== '' && formData.value.name.length >= 3 && formData.value.name.length <= 60);
const isEmailValid = computed(() => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(formData.value.email).toLowerCase());
});
const isPhoneValid = computed(() => formData.value.phone !== '' && formData.value.phone.replace(/\D/g, '').length >= 10);
const isSubjectValid = computed(() => formData.value.subject !== '' && formData.value.subject.length >= 3 && formData.value.subject.length <= 100);

// Check if all required fields are valid
const isFieldValid = computed(() => {
    return isNameValid.value && isEmailValid.value && isPhoneValid.value && formData.value.agree;
});

// Determine phone input class based on validity
const phoneClass = computed(() => (isPhoneValid.value ? 'valid' : 'invalid'));

// Handle form submission
const submitForm = async () => {
    if (formIsSubmitting.value || !isFieldValid.value) return;

    formIsSubmitting.value = true;

    const cleanedData = {
        ...formData.value,
        message: formData.value.message?.trim() || null
    };

    try {
        const response = await axios.post('/api/enquiry', cleanedData);

        if (response.data.status) {
            isSubmitted.value = true;
        }
    } catch (error) {
        console.error('Form submission error:', error);
        if (error.response?.data?.errors) {
            errors.value = error.response.data.errors;
        }
    } finally {
        formIsSubmitting.value = false;
    }
};

</script>
