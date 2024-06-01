<template>
    <div>
    <img :src="image" class="sm:min-w-full">
    <div class="flex flex-col items-center">
        <div>
            {{ direction }}
        </div>
        <div class="text-min-cost">
            От {{ minCost }}  ₽
        </div>
        <button class="bg-button-yellow hover:bg-button-yellow-light sm:max-w-md m-5 px-10 py-6">Подробнее</button>
    </div>
    </div>  
</template>
<script setup>
    defineProps({
        image : String,
        direction: String,
        minCost: Number,
    })
    import image from "~/public/images/img.png"
</script>