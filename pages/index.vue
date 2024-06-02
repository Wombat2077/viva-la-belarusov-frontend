<style scoped>
:deep(.p-focus) {
  outline-color: rgb(67, 85, 247);
  outline-width: 2px;
}
</style>


<template>
  <div class="h-screen">
    <div class="h-full flex place-content-center place-items-center">
      <div class="flex flex-col items-center pb-10">
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
          <div class="text-700 text-center">
            <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;При поддержке HOT-FIX Inc.</div>
            <div class="text-900 font-bold text-5xl mb-3">VIVA EXPRESS — Новая эра поиска билетов</div>
            <div class="text-700 text-2xl mb-5">Путешествуйте проще и быстрее, находите идеальный рейс для вашего
              бюджета, откройте для себя мир новых возможностей
            </div>
          </div>
        </div>
        <div class="grid grid-cols-5 max-sm:grid-cols-1 rounded-full max-2xl:grid-cols-3  gap-4 justify-center sm:min-w-full mt-10">
          <Dropdown class="rounded-full w-full border-2"
                    :highlightOnSelect="false" inputClass="rounded-full focus:border-indigo-600 p-3" v-model="fromCity"
                    :options="cities" optionLabel="name" placeholder="Откуда"/>
          <Dropdown class="rounded-full border-2 w-full"
                    :highlightOnSelect="false" inputClass="rounded-full focus:border-indigo-600 p-3" v-model="toCity"
                    :options="cities" optionLabel="name" placeholder="Куда"/>
          <Calendar class="rounded-full  w-full" inputClass="rounded-full  p-3"
                    placeholder="Отправление" v-model="fromDate"/>
          <Calendar class="rounded-full  w-full border-solid" inputClass="rounded-full p-3 "
                    placeholder="Прилет" v-model="toDate"/>
          <button class="text-white rounded-full p-3 bg-indigo-500 text-xl">
            Найти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from "vue";
import Dropdown from "primevue/dropdown";

const fromCity = ref();
const toCity = ref();
const fromDate = ref();
const toDate = ref();
const cities = ref([
  {
    name: "Москва",
    code: "msk",
  },
  {
    name: "Казань",
    code: "kzn"
  }
])
const specialOffers = []
</script>