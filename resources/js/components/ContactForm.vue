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
                            <input type="text" class="input" placeholder="Your Name" v-model="form.name" required />
                            <span v-if="errors.name" class="error">{{ errors.name }}</span>
                        </div>
                        <div class="box col-xs-12 col-sm-6">
                            <input type="email" class="input" placeholder="Email" v-model="form.email" required />
                            <span v-if="errors.email" class="error">{{ errors.email }}</span>
                        </div>
                        <div class="box col-xs-12 col-sm-6">
                            <input type="text" class="input" placeholder="Subject" v-model="form.subject" required />
                            <span v-if="errors.subject" class="error">{{ errors.subject }}</span>
                        </div>
                        <div class="box col-xs-12 col-sm-6">
                            <input type="tel" class="input" placeholder="Phone" v-model="form.phone" />
                            <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
                        </div>
                    </div>
                    <textarea placeholder="Your message" class="input input--textarea box" v-model="form.message"
                        required></textarea>
                    <span v-if="errors.message" class="error">{{ errors.message }}</span>
                    <div class="box relative">
                        <label class="checkbox">
                            <input class="checkbox__input" type="checkbox" v-model="form.terms" required />
                            <span class="checkbox__checkmark start-xs"></span>
                            By clicking “Submit button” you accept our <span class="purple">Terms & Conditions</span>
                            and have read our
                            <router-link to="/disclaimer" class="link purple">Disclaimer</router-link> and
                            <router-link to="/privacy-policy" class="link purple">Privacy Policy</router-link>
                        </label>
                        <span v-if="errors.terms" class="error">{{ errors.terms }}</span>
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
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        },
        validateForm() {
            this.errors = {};

            if (!this.form.name) {
                this.errors.name = 'Name is required.';
            }
            if (!this.form.email) {
                this.errors.email = 'Email is required.';
            } else if (!this.validateEmail(this.form.email)) {
                this.errors.email = 'Invalid email format.';
            }
            if (!this.form.subject) {
                this.errors.subject = 'Subject is required.';
            }
            if (!this.form.message) {
                this.errors.message = 'Message is required.';
            }
            if (!this.form.terms) {
                this.errors.terms = 'You must accept the terms and conditions.';
            }

            return Object.keys(this.errors).length === 0;
        },
        submitForm() {
            if (this.validateForm()) {
                // Handle form submission
                console.log(this.form);
                alert('Form submitted successfully!');
            } else {
                alert('Please correct the errors.');
            }
        }
    }
};
</script>

<style scoped>
.error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
}
</style>
