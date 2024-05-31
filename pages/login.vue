<style scoped>

</style>

<template>
    <div class="login-form">
        <label for="login-box">Введите ваш телефон, e-mail или логин</label>
        <InputText id="login-box" type="text" v-model="login" placeholder="Телефон/e-mail/логин" />
        <label for="login-box">Введите ваш телефон, e-mail или логин</label>
        <Password id="login-box" type="text" v-model="login" placeholder="Телефон/e-mail/логин" />
    </div>

</template>
<script setup>
 import Password from "primevue/password";
 import InputText from "primevue/inputtext";

</script>