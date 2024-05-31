<template>
    
    <div class="flex spacex-2 bg-secondarybg sm:min-h-20 sm:min-w-full p-5 text-white">
        <div class="mr-10 hover:bg-secondarybglight sm:min-w-20 flex justify-center items-center -my-5 -ml-5 p-2" v-show="showReturnArrow">
            <a>
                <img src="@/assets/svg/return-arrow.svg">
            </a>
        </div>
        <img src="@/assets/svg/logo.svg">
        <div class="mx-5 mt-2 text-xl font-semibold"> VIVA EXPRESS</div>
        <div class="flex items-center ml-auto hover:bg-secondarybglight -my-5 mr-2 p-5" @click="toggle"> <img src="@/assets/svg/anon-avatar.svg"></div>
        <Menu ref="profileMenu"  :model="unAuthOptions" :popup="true" class="text-white bg-secondarybg -translate-x-4" :pt="{menuitem : 'hover:bg-secondarybglight p-2'}"/>
            
    </div>
</template>
<script setup>
    import Menu from "primevue/menu";
    import { ref } from "vue";
    const profileMenu = ref();
    const unAuthOptions = ref([
        {
            label: "Войти",
        },
        {
            label: "Зарегистрироваться",
        }
    ]);
    function toggle(event){
        profileMenu.value.toggle(event);
    }
    defineProps({
        showReturnArrow : Boolean

    })
</script>