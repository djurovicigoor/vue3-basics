<script setup>
import Modal from '@/components/Modal.vue'
import {useTeamStore} from "@/stores/teamStore.js";
import { ref } from 'vue'

let team = useTeamStore();
let showModal = ref(false)
</script>

<template>
    <button
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
            :disabled="!team.spotsRemaining"
            @click="showModal = true"
    >
        Add Member ({{team.spotsRemaining}} Spots Left)
    </button>
  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <form class="flex gap-2 mt-2">
        <input type="email" placeholder="Email address" class="flex-1" />
        <button>Add</button>
      </form>
    </Modal>
  </Teleport>
</template>

<style scoped></style>