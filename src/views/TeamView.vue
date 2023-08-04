<script setup>
import {useTeamStore} from "@/stores/teamStore.js";
import TeamHeader from '@/components/Teams/TheHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TheFooter from '@/components/Teams/TheFooter.vue'

let team = useTeamStore();
team.fill();
</script>

<template>
  <TeamHeader/>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TheFooter />
</template>