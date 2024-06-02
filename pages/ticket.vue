
<template>
    <OfferCard :favorite="favorite" :min-cost="1500" :Place="'Москва'" image=""  @dblclick="aaaa()" />
    <InputText invalid="true" ></InputText>
</template>
<script setup>
    const favorite = ref(false);
    function aaaa (event) {
        favorite.value = !favorite.value;
    }
</script>

