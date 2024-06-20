<template>
    <footer class="section section__footer" style="background: rgba(130, 140, 222, 1);">
        <div class="wrapper">
            <div class="row">
                <div class="col-xs-12 col-sm-6 start-sm white select">
                    &copy; {{ new Date().getFullYear() }} PAM Consulting. All rights reserved

                </div>
                <div class="col-xs-12 col-sm-6 end-sm select">
                    <router-link to="/disclaimer" class="link"> Disclaimer | </router-link>
                    <router-link to="/privacy-policy" class="link">Privacy Policy</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "SectionFooter",

};
</script>
