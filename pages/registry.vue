<script setup >
import * as v from "valibot"

const Schema = v.object({
  email: v.pipe(v.string(), v.email("Введите корректный email")),
  password: v.pipe(v.string(), v.minLength(8, "Пароль должен быть длиннее 8 символов")),
  passwordConfirm: v.pipe(v.string(), v.check((input) => (this != undefined) ? this?.password == input : false , "Пароли должны совпадать")),
  phoneNumber: v.pipe(v.string(), v.nonEmpty("Заполните это поле")),
  username: v.pipe(v.string(), v.minLength(4, "Имя пользователя должно быть длинее 4 символов"))
});

const state = reactive({
  email: '',
  password: '',
  passwordConfirm: '',
  phoneNumber: '',
  username: ''
});

/* const validate = (state) => {
  if(!state)
} */
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
    
}

</script>

<template >
  <div class="h-screen w-full flex place-content-center place-items-center">

    <div class="surface-card p-4 shadow-2 border-round w-[40rem]">
      <div class="text-center mb-5 flex flex-col gap-4 place-items-center">
        <img src="https://raw.githubusercontent.com/containers/common/main/logos/podman-logo-full-vert.png" class="w-[20rem] stroke-black">
        <div class="text-900 text-3xl font-medium mb-3">Регистрация</div>
      </div>
      <div>

        <label for="email1" class="block text-900 font-medium mb-2">Имя</label>
        <InputText id="name" type="text" class="w-full mb-3" />

        <label for="email1" class="block text-900 font-medium mb-2">Почта</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <Button label="Подтвердить аккаунт" icon="pi pi-user" class="w-full mt-2 bg-indigo-500"></Button>
      </div>
    </div>
  </div>
</template>