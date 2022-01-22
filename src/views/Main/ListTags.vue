<script setup>
  import { computed, inject, ref, watch } from 'vue'
  import draggable from 'vuedraggable'
  const tags = inject('tags')
  const reorderingTag = ref(false)
</script>

<template>
  <div class="flex justify-between items-center p-2">
    <div class="text-lg font-semibold">Tags</div>
    <div>
      <button @click="reorderingTag = !reorderingTag">☰</button>
    </div>
  </div>
  <div class="border-t border-b divide-y flex-1 overflow-y-auto">
    <draggable
      v-model="tags.system"
      group="system"
      item-key="id"
      handle=".drag-handle">
      <template #item="{element}">
        <button
          class="p-2 w-full text-left flex items-center cursor-pointer border-b gap-2"
          @click="selectedTag = element">
          <div v-if="reorderingTag" class="drag-handle">&equiv;</div>
          <div class="flex-1 text-sm">{{ element.name }}</div>
          <div v-if="!reorderingTag" class="text-xs">{{ element.count }}</div>
        </button>
      </template>
    </draggable>
    <draggable
      v-model="tags.user"
      group="user"
      item-key="id"
      handle=".drag-handle">
      <template #item="{element}">
        <button
          class="p-2 w-full text-left flex items-center cursor-pointer border-b gap-2"
          @click="selectedTag = element">
          <div v-if="reorderingTag" class="drag-handle">&equiv;</div>
          <div class="flex-1 text-sm">{{ element.name }}</div>
          <div v-if="!reorderingTag" class="text-xs">{{ element.count }}</div>
        </button>
      </template>
    </draggable>
  </div>
</template>

<style lang="postcss" scoped>
</style>