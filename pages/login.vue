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
<div class="bg-white text-black w-max mx-auto my-10 flex justify-center ">
  <UForm :validate="validate" :state="state" class="flex flex-col space-y-4 bg-white text-black rounded-lg ring-gray-300 ring-1 p-5" @submit="onSubmit">
    <div>
      Авторизация
    </div>
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email"  inputClass="rounded-full focus:ring-indigo-600"/>
    </UFormGroup>

    <UFormGroup label="Введите пароль" name="password">
      <UInput v-model="state.password" type="password" class="outline-indigo-600"  inputClass="rounded-full focus:ring-indigo-600"/>
    </UFormGroup>
    <BlueButton type="submit" class="ml-auto">
      Войти
    </BlueButton> 
  </UForm>
 </div> 
</template>