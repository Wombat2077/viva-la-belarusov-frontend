<template>
  <div class="flex spacex-2 bg-indigo-500 sm:min-h-20 sm:min-w-full p-5 text-white sticky top-0 z-auto">
    <NuxtLink to="/" class="flex place-items-center place-content-center">
      <img src="@/assets/svg/logo.svg" class="w-6 max-sm:w-4">
      <div class="mx-5 mt-2 text-xl max-sm:text-sm font-semibold">VIVA EXPRESS</div>
    </NuxtLink>
    <div class="flex items-center ml-auto hover:bg-secondary-bg-light " @click="toggle"><img
        class="w-6"
        src="@/assets/svg/anon-avatar.svg"></div>
    <Menu ref="profileMenu" :model="unAuthOptions" :popup="true" class="text-white bg-secondarybg -translate-x-4"
          :pt="{menuitem : 'hover:bg-secondarybglight p-2'}"/>
  </div>
</template>
<script setup>
import Menu from "primevue/menu";
import {ref} from "vue";
import {userStore} from "~/src/stores/user"

const profileMenu = ref();
const unAuthOptions = ref([
  {
    label: "Войти",
    command: () => {
      navigateTo({path: "login"})
    }
  },
  {
    label: "Зарегистрироваться",
    command: () => {
      navigateTo({path: "registry"})
    }
  }
]);
const AuthOptions = ref([
  {
    label: "Профиль",
    command: () => {
      navigateTo({path: "profile"})
    }
  },
  {
    label: "Выйти",
    command: () => {
      navigateTo({path: "logout"})
    }
  }
])

function toggle(event) {
  profileMenu.value.toggle(event);
}

defineProps({
  showReturnArrow: Boolean

})
</script>