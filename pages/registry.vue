<style scoped>

</style>

<template class="flex flex-center">
    <div class="flex min-h-full flex-col items-center px-6 py-12 ld:px-8 ring-1 ring-inset ring-gray-300 sm:mx-auto sm:max-w-lg mt-10 rounded-sm">
        <h1 class="text-5xl text-center filter drop-shadow-lg font-bold ">
            Регистрация в личный кабинете
        </h1>
        <div class="sm:min-w-80 mt-10 md-10">
            <label for="login-box" class="block text:sm sm:mx-auto font-medium leading-6">
            Введите e-mail
            </label>
            <InputText id="login-box" type="text" v-model="email" placeholder="E-mail" 
                class="sm:min-w-full rounded-full px-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 mt-2"
            /> 
        </div>
        <div class="sm:min-w-80 mt-5" >
            <label for="password-box" class="block text:sm sm:mx-auto font-medium leading-6">
                Введите пароль
            </label>
            <InputText id="password-box" type="password" v-model="password" placeholder="Пароль"  
                class="sm:min-w-full mt-2 rounded-full px-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
            />
        </div>
        <div class="sm:min-w-80 mt-5" >
            <label for="repeat-password-box" class="block text:sm sm:mx-auto font-medium leading-6">
                Подтвердите пароль
            </label>
            <InputText id="repeat-password-box" type="password" v-model="password" placeholder="Подтвердите пароль"  
                class="sm:min-w-full mt-2 rounded-full px-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
            />
        </div>
        <div class="mt-8 flex flex-col justify-center sm:min-h-16 sm:min-w-50">
            <button class="rounded-full sm:min-h-10 bg-buttonblue mb-2 px-2 hover:bg-buttonbluelight hover:text-black-800">Зарегистрироваться</button>
        </div>
        <div class="mt-10 flex">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="my-1 mx-2">
                <path d="M11 18.375C15.5563 18.375 19.25 14.8492 19.25 10.5C19.25 6.15076 15.5563 2.625 11 2.625C6.44365 2.625 2.75 6.15076 2.75 10.5C2.75 14.8492 6.44365 18.375 11 18.375Z" stroke="#59ABE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.75 8.75L10.0833 12.25L8.25 10.5" stroke="#59ABE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>Соглашаюсь с условиями передачи данных</div>
        </div>
    </div>
</template>
<script setup>
 import Password from "primevue/password";
 import InputText from "primevue/inputtext";
 defineProps({

 });
</script>