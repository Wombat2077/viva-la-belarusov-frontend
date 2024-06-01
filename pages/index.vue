
<style scoped>
    :deep(.p-focus){
        outline-color: rgb(67, 85, 247);
        outline-width: 2px;
    }
</style>


<template>
    <div class="flex flex-col items-center">
    <div class="text-3xl sm:max-w-80 text-center m-10">Удобный поиск дешевых авиабилетов</div>
    <div class="flex justify-center sm:min-w-full mt-10">
        <Dropdown class="rounded-full border-2 border-solid border-gray-300 focus:ring-indigo-600 min-w-40 mx-10 " :highlightOnSelect="false" inputClass="rounded-full focus:border-indigo-600" v-model="fromCity" :options="cities" optionLabel="name" placeholder="Откуда"/> 
        <Dropdown class="rounded-full border-2 border-solid border-gray-300 focus:ring-indigo-600 min-w-40 mx-10" :highlightOnSelect="false" inputClass="rounded-full focus:border-indigo-600" v-model="toCity" :options="cities" optionLabel="name" placeholder="Куда"/>
        <Calendar class="rounded-full border-2 border-solid border-gray-300 min-w-40 mx-10" inputClass="rounded-full pl-3" placeholder="Дата отправления" v-model="fromDate" /> 
        <Calendar class="rounded-full border-2 border-solid border-gray-300 min-w-40 mx-10" inputClass="rounded-full pl-3" placeholder="Дата прилета" v-model="toDate" /> 
        <Dropdown  class="rounded-full border-2 border-solid border-gray-300 focus:ring-indigo-600 min-w-40 mx-10" :highlightOnSelect="false" inputClass="rounded-full focus:border-indigo-600" v-model="ticketType" />
    </div>
    <div class="flex justify-center mx-30 mt-20">
        <div class="mx-20 sm:max-w-48">
            <img src="~/public/images/Money.png" class="sm:max-h-36">
             <div class="text-center text-cyan-800 uppercase">
                Цена известна сразу, без наценок и комиссий
             </div>
        </div>
        <div class="mx-20 sm:max-w-48">
            <div class="text-center text-cyan-800 uppercase">
                Билеты от надёжных партнёров и выгодные условия
            </div>
            <img src="~/public/images/Flight-ticket 1.png" class="sm:max-h-36">
        </div>
        <div class="mx-20 sm:max-w-48">
            <img src="~/public/images/chat.png" class="sm:max-h-36">
             <div class="text-center text-cyan-800 uppercase"> 
                Быстрая поддержка по телефону и на сайте
             </div>
        </div>
    </div>
    <div class="my-20 text-3xl">
        Специальные предложения
    </div>
        <div v-for="offer in specialOffers" class="flex flex-wrap flex-row flex-start gap-2 mx-10" >
            <OfferCard class="sm:max-w-48 ring-gray-300 ring-1 rounded-md" image="offer.image" :minCost="offer.minCost" :direction="offer.direction" />
        </div>
    </div>
    <CFooter  class="mt-10"/>
</template>


<script setup>
    import { ref } from "vue";
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
    const specialOffers = [

    ]
</script>