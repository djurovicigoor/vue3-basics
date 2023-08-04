<script setup>
defineProps({
  show: Boolean
})
</script>

<template>
  <Transition
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          enter-active-class="transition duration-300"
          leave-active-class="transition duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
  >
    <div
      style="
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: grid;
        place-items: center;
      "
      v-if="show"
    >
      <div style="background: white; padding: 1rem; width: 80vw; max-width: 500px">
        <header>
          <slot name="header"></slot>
        </header>
        <div>
          <slot></slot>
        </div>
        <footer>
          <slot name="footer">
            <button @click="$emit('close')" class="">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>