<template>
    <nav class="navbar">
        <div class="container">
            <router-link to="/" class="logo header__logo"></router-link>

            <ul class="nav-links">
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/about">ABOUT US</router-link></li>
                <li><router-link to="/services">SERVICES</router-link></li>
                <li><router-link to="/invest">INVEST IN CYPRUS</router-link></li>
                <li><router-link to="/migration">MIGRATION</router-link></li>
                <li><router-link to="/enquiry">CONTACT US</router-link></li>
            </ul>
            <button class="contact-button">Get in touch</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>

<style scoped>
.navbar {
    background-color: #5c1ac3;
    /* Color from the screenshot */
    padding: 10px 0;
    color: white;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 50px;
    /* Adjust height according to your needs */
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
}

.nav-links li {
    display: flex;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

.contact-button {
    background-color: #ffeb89;
    /* Color from the screenshot */
    color: #5c1ac3;
    /* Adjust text color if needed */
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    cursor: pointer;
}

.contact-button:hover {
    background-color: #e6d278;
    /* Slightly darker shade for hover effect */
}
</style>
