<script setup>
import FormatContainer from '@/components/FormatContainer.vue'
defineProps({
    dateFormat: String
})
</script>

<template>
  <FormatContainer :date-format="dateFormat"/>
</template>

<style scoped></style>