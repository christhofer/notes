<script setup>
  import { inject } from 'vue'
  const stack = inject('toastStack')
</script>

<template>
  <div class="toast">
    <transition-group name="toast">
      <div v-for="{message, id} in stack" :key="id" class="toast-items">
        {{ message }}
      </div>
    </transition-group>
  </div>
</template>

<style lang="postcss" scoped>
.toast {
  @apply fixed inset-x-0 flex flex-col pointer-events-none bottom-28 z-50;

}
.toast-items {
  /* Size & position */
  @apply px-4 py-1 mb-2 max-w-screen-sm mx-auto;
  /* Transition */
  @apply transition-opacity duration-700 ease-linear;
  /* Color */
  @apply bg-black bg-opacity-80;
  /* Text */
  @apply text-white text-xs;
  /* Container */
  @apply rounded-full;
}

.toast-enter-from,
.toast-leave-to {
  @apply opacity-0;
}
</style>