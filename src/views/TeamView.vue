<script setup>
import { useTeamStore } from '@/stores/teamStore.js'
import TeamHeader from '@/components/Teams/TheHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TheFooter from '@/components/Teams/TheFooter.vue'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

let team = useTeamStore()
team.fill()

let showModal = ref(false)
</script>

<template>
  <TeamHeader @add="showModal = true"/>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TheFooter  />

    <Modal :show="showModal" @close="showModal = false">
        <form class="flex gap-2 mt-2">
            <input type="email" placeholder="Email address" class="flex-1">
            <button>Add</button>
        </form>
    </Modal>
</template>