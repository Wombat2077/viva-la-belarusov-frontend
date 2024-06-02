<script setup>
import * as v from "valibot"


const Schema = v.object({
  email: v.pipe(v.string(), v.email("Введите корректный e-mail")),
  password: v.pipe(v.string(), v.minLength(8, 'Пароль должен содержать не меньше 8 символов'))
});

const state = reactive({
  email: '',
  password: ''
});
const validate = (state) => {
    const errors = []
    let validation = v.safeParse(Schema, JSON.parse(JSON.stringify(state)))
    if(!validation.success){
      let issues = validation.issues
      for(let i = 0; i < issues.length; i++){
        errors.push({path: issues[i].path[0].key, message: issues[i].message})
      }
  }
  return errors
}
async function onSubmit (event) {
  // Do something with event.data
}
</script>

<template class="flex justify-center">
<div class="h-screen w-full flex place-content-center place-items-center">

  <div class="surface-card p-4 shadow-2 border-round w-full w-[40rem] ">
    <div class="text-center mb-5 flex flex-col gap-4 place-items-center">
      <img src="https://raw.githubusercontent.com/containers/common/main/logos/podman-logo-full-vert.png" class="w-[20rem] stroke-black">
      <div class="text-900 text-3xl font-medium mb-3">Добро пожаловать</div>
    <div class="flex gap-2 max-sm:flex-col">
      <span class="text-600 font-medium line-height-3">У вас ещё нет аккаунта?</span>
      <NuxtLink to="/registry" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Создайте сейчас!</NuxtLink>
    </div>
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Почта</label>
      <InputText id="email1" type="text" class="w-full mb-3" />

      <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
      <InputText id="password1" type="password" class="w-full mb-3" />

      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
          <label for="rememberme1">Запомнить меня</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-not-allowed ">Забыли пароль?</a>
      </div>

      <Button label="Войти" icon="pi pi-user" class="w-full bg-indigo-500"></Button>
    </div>
  </div>
</div>
</template>