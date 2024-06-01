<template >
    <div class="flex justify-center items-center m-20">
    <div class="flex ring-gray-300 ring-1 rounded-lg justify-center w-max divide-solid divide-x-2 divide-gray-300">
        <div v-show="isSettings" class="flex grow-0">
            <div class="flex flex-col p-5">
                <label for="e-mail"  class="text-gray-600 mt-10">
                    Адрес электронной почты
                </label>
                <InputText id="e-mail" class="rounded-full ring-gray-300 ring-1 " />
                <label for="login"  class="text-gray-600 mt-10">
                    Имя пользователя
                </label>
                <InputText id="login" class="rounded-full ring-gray-300 ring-1 " />
                <label for="phoneNumber" class="text-gray-600 mt-10">
                    Номер телефона
                </label>
                <InputMask id="phoneNumber" class="rounded-full ring-gray-300 ring-1 "  mask="+7 (999)-999-99-99" v-model="phoneNumber" />
                <BlueButton class="mt-5">Сохранить</BlueButton>
            </div>
            <div>
                <!-- <FileUpload accept="images/*" url="api/photo/"/> -->
            </div>
        </div>
        <div v-show="isFavorite" class="flex grow-0">
            
        </div>
        <div v-show="isHistory" class="flex grow-0">

        </div>
        <TieredMenu :model="bars" class="flex grow-1 rounded-l-none my-auto "/>
    </div>
</div>
</template>
<script setup>
    import { ref } from "vue";
    const photo = (event) => {
        return event.target.value;
    }
    const isSettings = ref(true);
    const isFavorite = ref(false);
    const isHistory = ref(false);
    const phoneNumber = ref();
    const bars = ref([
        {
            label: "Избранное",
            command: () => {
                isFavorite.value = true;
                isHistory.value = false
                isSettings.value = false
            }
        },
        {
            label: "История",
            command: () => {
                isFavorite.value = false;
                isHistory.value = true
                isSettings.value = false
            }
        },
        {
            label: "Настройки",
            command: () => {
                isFavorite.value = false;
                isHistory.value = false
                isSettings.value = true
            }
        },
        {
            label: "Выход",
            command: () => {

            }
        }
    ])
</script>