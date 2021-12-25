<script setup>
  import { provide, reactive, ref } from 'vue'
  import Toast from '@/components/Toast'

  const AppToast = Toast()
  const user = ref({
    name: 'John Doe',
    email: 'johndoe@example.net',
  })
  const tags = reactive({
    system: [
      { id: 1, name: 'All Notes', count: 80 },
      { id: 2, name: 'Shared With Me', count: 25 },
      { id: 3, name: 'Trash', count: 5 },
    ],
    user: [
      { id: 1, name: 'Game', count: 28 },
      { id: 2, name: 'Personal', count: 32 },
      { id: 3, name: 'Work', count: 10 },
    ],
    all: [
      { id: 1, name: 'All Notes', count: 80 },
      { id: 2, name: 'Shared With Me', count: 25 },
      { id: 3, name: 'Trash', count: 5 },
      { id: 4, name: 'Game', count: 28 },
      { id: 5, name: 'Personal', count: 32 },
      { id: 6, name: 'Work', count: 10 },
    ],
  })
  const notes = ref([
    {
      id: 1,
      title: 'My Notes 1',
      preview: 'Short preview of my notes 1...',
      updated_at: '2021-11-18T01:00:00.0000Z',
      tags: [1, 2],
    },
    {
      id: 2,
      title: 'My Notes 2',
      preview: 'Short preview of my notes 2...',
      updated_at: '2021-11-17T08:13:00.0000Z',
      tags: [1],
    },
    {
      id: 3,
      title: 'My Notes 3',
      preview: 'Short preview of my notes 3...',
      updated_at: '2021-11-16T05:24:00.0000Z',
      tags: [2],
    },
  ])

  provide('user', user)
  provide('tags', tags)
  provide('notes', notes)
</script>

<template>
  <router-view />
  <app-toast />
</template>

<style lang="postcss" scoped>
</style>
