<template>
    
    <div class="flex spacex-2 bg-secondary-bg sm:min-h-20 sm:min-w-full p-5 text-white">
        <div class="mr-10 hover:bg-secondary-bg-light sm:min-w-20 flex justify-center items-center -my-5 -ml-5 p-2" v-show="showReturnArrow">
            <a>
                <SvgoLogo class="w-6"></SvgoLogo>
            </a>
        </div>
        <img src="@/assets/svg/logo.svg">
        <div class="mx-5 mt-2 text-xl font-semibold"> VIVA EXPRESS</div>
        <div class="flex items-center ml-auto hover:bg-secondary-bg-light -my-5 mr-2 p-5" @click="toggle"> <img src="@/assets/svg/anon-avatar.svg"></div>
        <Menu ref="profileMenu"  :model="unAuthOptions" :popup="true" class="text-white bg-secondarybg -translate-x-4" :pt="{menuitem : 'hover:bg-secondarybglight p-2'}"/>
            
    </div>
</template>
<script setup>
    import Menu from "primevue/menu";
    import { ref } from "vue";
    import { userStore } from "~/src/stores/user"
    const profileMenu = ref();
    const unAuthOptions = ref([
        {
            label: "Войти",
            command: () => { navigateTo({path: "login"}) } 
        },
        {
            label: "Зарегистрироваться",
            command: () => { navigateTo({path: "registry"})}
        }
    ]);
    const AuthOptions = ref([
        {
            label: "Профиль",
            command: () => { navigateTo({ path: "profile" }) }
        },
        {
            label: "Выйти",
            command: () => { navigateTo({ path: "logout" }) }
        }
    ])

    function toggle(event){
        profileMenu.value.toggle(event);
    }
    defineProps({
        showReturnArrow : Boolean

    })
</script>