<script setup>
import Modal from "@/components/Modal.vue";

let dateFormat = 'MM/DD/YYYY';
</script>

<template>
    <div>
         <Modal :date-format="dateFormat"/>
    </div>
</template>