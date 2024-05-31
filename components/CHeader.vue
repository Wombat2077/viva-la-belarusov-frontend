<template>
    
    <div class="flex spacex-2 bg-secondarybg sm:min-h-20 sm:min-w-full p-5 text-white">
        <div class="mr-10 hover:bg-secondarybglight sm:min-w-20 flex justify-center items-center -my-5 -ml-5 p-2" v-show="showReturnArrow">
            <a>
                <img src="@/assets/svg/return-arrow.svg">
            </a>
        </div>
        <img src="@/assets/svg/logo.svg">
        <div class="mx-5 mt-2 text-xl font-semibold"> VIVA EXPRESS</div>
    </div>
</template>
<script setup>
    defineProps({
        showReturnArrow : Boolean
    })
</script>