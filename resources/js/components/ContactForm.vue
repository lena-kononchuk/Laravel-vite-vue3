<template>
    <div class="section background__linear blue-purple">
        <div class="wrapper">
            <div class="center-sm box3x">
                <div class="h2">Contact Us</div>
                <div class="center-sm separator box3x"></div>
                <div class="flex center-sm middle-sm" style="flex-direction: column;">
                    <i class="small fas fa-phone-alt yellow circle circle--small flex center-sm middle-sm"></i>
                    <a class="h4 purple" href="tel:+3579056759">+357 9056759</a>
                    <i class="small fas fa-envelope yellow circle circle--small flex center-sm middle-sm"></i>
                    <a class="h4 purple" href="mailto:contact@pamrelocation.com">contact@pamrelocation.com</a>
                </div>
            </div>
            <!-- <div class="form card card__form center-sm">
                <div class="h3">Send Inquiry</div>
                <form @submit.prevent="submitForm">
                    <div class="form-row">
                        <input type="text" placeholder="Your Name" v-model="form.name" required />
                        <input type="email" placeholder="Email" v-model="form.email" required />
                    </div>
                    <div class="form-row">
                        <input type="text" placeholder="Subject" v-model="form.subject" required />
                        <input type="tel" placeholder="Phone" v-model="form.phone" />
                    </div>
                    <textarea placeholder="Your message" v-model="form.message" required></textarea>
                    <div class="form-footer">
                        <label>
                            <input type="checkbox" v-model="form.terms" required />
                            By clicking “Submit button” you accept our <a href="#">Terms & Conditions</a> and have
                            read our
                            <a href="#">Privacy Policy</a> and <a href="#">Disclaimer</a>
                        </label>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div> -->
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
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
            console.log(this.form);
        },
    },
};
</script>
