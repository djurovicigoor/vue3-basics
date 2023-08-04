<script setup>
import team from '@/team.json'
import TeamHeader from '@/components/Teams/TheHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TheFooter from '@/components/Teams/TheFooter.vue'
</script>

<template>
  <TeamHeader :team="team" />
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers :team="team" />
  </div>

  <TheFooter :team="team" />
</template>