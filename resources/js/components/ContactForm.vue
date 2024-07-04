<template>
    <div class="section background__linear blue-purple" id="enquiry">
        <div class="wrapper">
            <div class="center-sm box3x">
                <div class="h2 box">Contact Us</div>
                <div class="center-sm separator box3x"></div>
                <div class="flex center-sm middle-sm" style="flex-direction: column;">
                    <i class="small fas fa-phone-alt yellow circle circle--small flex center-sm middle-sm"></i>
                    <a class="h4 purple" href="tel:+3579056759">+357 9056759</a>
                    <i class="small fas fa-envelope yellow circle circle--small flex center-sm middle-sm"></i>
                    <a class="h4 purple" href="mailto:contact@pamrelocation.com">contact@pamrelocation.com</a>
                </div>
            </div>
            <div class="form card card__form center-xs box">
                <div v-if="isSubmitted">
                    <div class="h3 uppercase">Thank You!</div>
                    <div class="h3 box2x uppercase">Your request is being reviewed!</div>
                    <div class="text">One of our team members will get in touch with you soon</div>
                </div>
                <div v-else>
                    <div class="h3 uppercase box">Send Inquiry</div>
                    <form @submit.prevent="submitForm" style="max-width: 580px; margin: 0 auto;">
                        <div class="row">
                            <div class="box col-xs-12 col-sm-6">
                                <input type="text" class="input" placeholder="Your Name" v-model="formData.name"
                                    :disabled="formIsSubmitting" :class="{ 'is-invalid': errors.name }" required />
                                <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
                            </div>
                            <div class="box col-xs-12 col-sm-6">
                                <input type="email" class="input" placeholder="Email" v-model="formData.email"
                                    :disabled="formIsSubmitting" :class="{ 'is-invalid': errors.email }" required />
                                <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                            </div>
                            <div class="box col-xs-12 col-sm-6">
                                <input type="text" class="input" placeholder="Subject" v-model="formData.subject"
                                    :disabled="formIsSubmitting" :class="{ 'is-invalid': errors.subject }" required />
                                <span v-if="errors.subject" class="text-danger">{{ errors.subject }}</span>
                            </div>
                            <div class="box col-xs-12 col-sm-6">
                                <input type="tel" class="input" placeholder="Phone" v-model="formData.phone"
                                    :disabled="formIsSubmitting" :class="{ 'is-invalid': errors.phone }" />
                                <span v-if="errors.phone" class="text-danger">{{ errors.phone }}</span>
                            </div>
                        </div>
                        <textarea placeholder="Your message" class="input input--textarea box"
                            v-model="formData.message" :disabled="formIsSubmitting"
                            :class="{ 'is-invalid': errors.message }" required></textarea>
                        <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
                        <div class="box relative">
                            <label class="checkbox">
                                <input class="checkbox__input" type="checkbox" v-model="formData.agree"
                                    :disabled="formIsSubmitting" :class="{ 'is-invalid': errors.agree }" required />
                                <span class="checkbox__checkmark start-xs"></span>
                                By clicking “Submit button” you accept our <span class="purple">Terms &
                                    Conditions</span> and have read our
                                <router-link to="/disclaimer" class="link purple"> Disclaimer </router-link> and
                                <router-link to="/privacy-policy" class="link purple">Privacy Policy</router-link>
                            </label>
                            <span v-if="errors.agree" class="text-danger">{{ errors.agree }}</span>
                        </div>

                        <button :disabled="formIsSubmitting || !isFieldValid" :class="{ loading: formIsSubmitting }"
                            type="submit" class="button button--yellow">
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
// Importing necessary Vue composition API functions and axios for HTTP requests
import { reactive, ref, computed } from 'vue';
import axios from 'axios';

// Reactive state to track if the form has been submitted
const isSubmitted = ref(false);
// Reactive state to indicate if the form is currently being submitted
const formIsSubmitting = ref(false);

// Reactive state for form data
const formData = reactive({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    agree: false
});

// Reactive state for form errors
const errors = reactive({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    agree: ''
});

// Computed properties for field validation
const isNameValid = computed(() => formData.name !== '' && formData.name.length >= 3);
const isEmailValid = computed(() => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(formData.email).toLowerCase());
});
const isMessageValid = computed(() => formData.message !== '' && formData.message.length >= 3);
const isPhoneValid = computed(() => formData.phone !== '' && formData.phone.replace(/\D/g, '').length >= 10);
const isAgreeValid = computed(() => formData.agree);

// Computed property to check if all fields are valid
const isFieldValid = computed(() => {
    return isNameValid.value && isEmailValid.value && isMessageValid.value && isPhoneValid.value && isAgreeValid.value;
});

// Function to handle form submission
const submitForm = async () => {
    if (formIsSubmitting.value || !isFieldValid.value) return;

    // Clear previous errors
    Object.keys(errors).forEach(key => errors[key] = '');

    try {
        formIsSubmitting.value = true;
        const response = await axios.post('/api/enquiry', { ...formData });
        console.log('Successfully saved:', response.data);
        // Clear form after successful submission
        Object.keys(formData).forEach(key => formData[key] = '');
        isSubmitted.value = true;
    } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response && error.response.data.errors) {
            const serverErrors = error.response.data.errors;
            Object.keys(serverErrors).forEach(key => {
                if (errors[key] !== undefined) {
                    errors[key] = serverErrors[key][0];
                }
            });
        }
    } finally {
        formIsSubmitting.value = false;
    }
};
</script>
