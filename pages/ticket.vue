<template>
    <OfferCard :favorite="true" :min-cost="1500" -place="Москва" image="" v-model="favorite" @update:model=""/>

</template>
<script setup>
    const favorite = ref(false);

</script>