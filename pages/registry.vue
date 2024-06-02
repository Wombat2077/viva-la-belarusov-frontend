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

<template class="flex justify-center">
<div class="bg-white text-black min-w-max  mx-auto my-10 flex justify-center ">
  <UForm :validate="validate" :state="state" class="flex flex-col space-y-4 bg-white text-black rounded-lg ring-gray-300 ring-1 px-10 p-5"  @submit="onSubmit(event)">
    <div>
      Регистрация
    </div>
    <UFormGroup label="Имя пользователя" name="username">
      <UInput v-model="state.username"  inputClass="rounded-full focus:ring-indigo-600"/>
    </UFormGroup>
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email"  inputClass="rounded-full focus:ring-indigo-600"/>
    </UFormGroup>
    <UFormGroup label="Номер телефона" name="phoneNumber">
      <InputMask mask="+7 (999)-999-99-99" v-model="state.phoneNumber"  class="rounded-full pl-2 text-gray-600 ring-gray-300 ring-1 focus:ring-indigo-600 h-8"/>
    </UFormGroup>

    <UFormGroup label="Введите пароль" name="password">
      <UInput v-model="state.password" type="password" class="outline-indigo-600"  inputClass="rounded-full focus:ring-indigo-600"/>
    </UFormGroup>
    <UFormGroup label="Повторите пароль" name="password">
      <UInput v-model="state.passwordConfirm" type="password" class="outline-indigo-600" inputClass="rounded-full focus:ring-indigo-600"/>
    </UFormGroup>

    <BlueButton  class="ml-auto" type="submit">
      Зарегистрироваться
    </BlueButton> 
  </UForm>
 </div> 
</template>