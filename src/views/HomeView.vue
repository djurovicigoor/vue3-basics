<script setup>
import Modal from '@/components/Modal.vue'
import {counter} from "@/stores/counterStore";
</script>

<template>
  <div>
      <h1>{{counter.count}}</h1>
    <Modal />
  </div>
</template>