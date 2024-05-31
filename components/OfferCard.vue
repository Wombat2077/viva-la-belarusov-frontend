<template>
    <img :src="image" class="sm:min-w-full">
    <div class="flex flex-col items-center">
        <div>
            {{ direction }}
        </div>
        <div class="text-min-cost">
            От {{ minCost }}  ₽
        </div>
        <button class="bg-button-yellow hover:bg-button-yellow-light px-10 py-6">Подробнее</button>
    </div>
</template>
<script setup>
    defineProps({
        image : String,
        direction: String,
        minCost: Number,
    })
</script>