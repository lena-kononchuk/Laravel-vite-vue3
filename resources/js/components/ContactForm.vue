<template>
    <div class="section background__linear blue-purple">
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
                <div class="h3 uppercase box">Send Inquiry</div>
                <form @submit.prevent="submitForm" style="max-width: 580px; margin: 0 auto;">
                    <div class="row">
                        <div class="box col-xs-12 col-sm-6">
                            <input type="text" class="input" placeholder="Your Name" v-model="form.name"
                                :class="{ 'is-invalid': errors.name }" required />
                            <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
                        </div>
                        <div class="box col-xs-12 col-sm-6">
                            <input type="email" class="input" placeholder="Email" v-model="form.email"
                                :class="{ 'is-invalid': errors.email }" required />
                            <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                        </div>
                        <div class="box col-xs-12 col-sm-6">
                            <input type="text" class="input" placeholder="Subject" v-model="form.subject"
                                :class="{ 'is-invalid': errors.subject }" required />
                            <span v-if="errors.subject" class="text-danger">{{ errors.subject }}</span>
                        </div>
                        <div class="box col-xs-12 col-sm-6">
                            <input type="tel" class="input" placeholder="Phone" v-model="form.phone"
                                :class="{ 'is-invalid': errors.phone }" />
                            <span v-if="errors.phone" class="text-danger">{{ errors.phone }}</span>
                        </div>
                    </div>
                    <textarea placeholder="Your message" class="input input--textarea box" v-model="form.message"
                        :class="{ 'is-invalid': errors.message }" required></textarea>
                    <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
                    <div class="box relative">
                        <label class="checkbox">
                            <input class="checkbox__input" type="checkbox" v-model="form.terms"
                                :class="{ 'is-invalid': errors.terms }" required />
                            <span class="checkbox__checkmark start-xs"></span>
                            By clicking “Submit button” you accept our <span class="purple">Terms & Conditions</span>
                            and have read our
                            <router-link to="/disclaimer" class="link purple"> Disclaimer </router-link>
                            and
                            <router-link to="/privacy-policy" class="link purple">Privacy Policy</router-link>
                        </label>
                        <span v-if="errors.terms" class="text-danger">{{ errors.terms }}</span>
                    </div>
                    <button type="submit" class="button button--yellow">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: '',
                terms: false,
            },
            errors: {}
        };
    },
    methods: {
        submitForm() {
            this.errors = this.validateForm();
            if (Object.keys(this.errors).length === 0) {
                // Handle form submission
                console.log(this.form);
                // Reset form after submission
                this.resetForm();
            }
        },
        validateForm() {
            const errors = {};
            if (!this.form.name) {
                errors.name = 'Name is required.';
            }
            if (!this.form.email) {
                errors.email = 'Email is required.';
            } else if (!this.validEmail(this.form.email)) {
                errors.email = 'Email must be valid.';
            }
            if (!this.form.subject) {
                errors.subject = 'Subject is required.';
            }
            if (!this.form.message) {
                errors.message = 'Message is required.';
            }
            if (!this.form.terms) {
                errors.terms = 'You must accept the terms and conditions.';
            }
            return errors;
        },
        validEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
            return re.test(email);
        },
        resetForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.subject = '';
            this.form.phone = '';
            this.form.message = '';
            this.form.terms = false;
        }
    }
};
</script>

<style scoped>
.is-invalid {
    border-color: red;
}

.text-danger {
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
}
</style>
