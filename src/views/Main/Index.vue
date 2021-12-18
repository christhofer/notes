<script setup>
  import { computed, inject, ref } from 'vue'
  import ResizableColumn from './ResizableColumn.vue'
  import MonacoEditor from '@/views/Main/MonacoEditor.vue'
  import MarkdownPreview from '@/views/Main/MarkdownPreview.vue'
  import draggable from 'vuedraggable'

  const user = inject('user')
  const tags = inject('tags')
  const notes = inject('notes')

  const selectedTag = tags.system[0]

  const changeTheme = (theme = null) => {
    if (theme) {
      localStorage.theme = theme
    } else {
      localStorage.removeItem('theme')
    }
  }
  const showPreview = ref(true)
  const drag = ref(false)

  const text = ref('')

  const setDefaultText = () => {
    text.value = '' +
      '_italic_' + '\n' +
      '\n' +
      '**bold**' + '\n' +
      '\n' +
      '**Bold and _nested italic_**' + '\n' +
      '\n' +
      '~strikethrough~' + '\n' +
      '\n' +
      'Insert a [link](https://google.com)' + '\n' +
      '\n' +
      '# Header 1' + '\n' +
      '## Header 2' + '\n' +
      '### Header 3' + '\n' +
      '#### Header 4' + '\n' +
      '##### Header 5' + '\n' +
      '\n' +
      '## Numbered List' + '\n' +
      '1. Apple' + '\n' +
      '2. Orange' + '\n' +
      '3. Banana' + '\n' +
      '\n' +
      '## Bullet List' + '\n' +
      '- Pizza' + '\n' +
      '- Hotdog' + '\n' +
      '- Burger' + '\n' +
      '\n' +
      '## Insert a picture' + '\n' +
      '![alt image](https://i.imgur.com/iVgxTQs.gif)' + '\n' +
      '\n' +
      '## Table' + '\n' +
      '\n' +
      '| First Header | Second Header                 |' + '\n' +
      '| ---          | ---                           |' + '\n' +
      '| Content Cell | Use ~formatting~ inside table |' + '\n' +
      '| Content Cell | Use *formatting* inside table |' + '\n' +
      '\n' +
      '## Table Alignment' + '\n' +
      '\n' +
      '| Left-aligned | Center-aligned | Right-aligned |' + '\n' +
      '| :---         | :---:          | ---:          |' + '\n' +
      '| item 1       | item 1         | item 1        |' + '\n' +
      '| item 2       | item 2         | item 2        |' + '\n' +
      ''
  }
  setDefaultText()
</script>

<template>
  <div>
    <resizable-column class="h-screen max-h-screen overflow-hidden">
      <template #col1>
        <div class="w-1/3 flex flex-col border" style="min-width: 240px;">
          <div class="px-2 h-12 flex justify-between items-center border-b gap-1">
            <div>
              <div class="truncate font-semibold leading-tight">{{ user.name }}</div>
              <div class="truncate text-xs">{{ user.email }}</div>
            </div>
            <div class="space-x-4 text-sm font-semibold">
              <a href="#">Account</a>
              <a href="#">Logout</a>
            </div>
          </div>
          <resizable-column class="flex-1 overflow-hidden">
            <template #col1>
              <div class="w-1/3 border-r flex flex-col" style="min-width: 60px;">
                <div class=" text-center py-2">
                  <div class="text-lg font-semibold">Tags</div>
                  <div class="space-x-2 text-xs">
                    <button>Reorder</button>
                  </div>
                </div>
                <div class="border-t border-b divide-y flex-1 overflow-y-auto">
                  <draggable
                    v-model="tags.all"
                    group="people"
                    item-key="id"
                    @start="drag=true"
                    @end="drag=false">
                    <template #item="{element}">
                      <div class="p-2 flex justify-between items-center cursor-pointer border-b">
                        <div class="text-sm">{{ element.name }}</div>
                        <div class="text-xs">{{ element.count }}</div>
                      </div>
                    </template>
                  </draggable>
                </div>
              </div>
            </template>
            <template #col2>
              <div class="flex-1 border-l flex flex-col overflow-hidden" style="min-width: 180px;">
                <div class="text-center py-2">
                  <div class="text-lg font-semibold">All Notes</div>
                  <div class="space-x-2 text-xs">
                    <button>New</button>
                    <button>Sort</button>
                    <button>Display</button>
                  </div>
                </div>
                <div class="border-t border-b divide-y flex-1 overflow-y-auto">
                  <div v-for="note in notes" :key="note.name" class="p-2">
                    <div class="flex justify-between items-center">
                      <div class="min-w-0">
                        <div class="truncate">{{ note.title }}</div>
                        <div class="truncate text-sm">{{ note.preview }}</div>
                      </div>
                      <div>
                        <!--  -->
                      </div>
                    </div>
                    <div class="truncate text-sm mt-2">{{ note.updated_at }}</div>
                    <div class="flex gap-2 mt-2 flex-wrap">
                      <div v-for="id in note.tags" :key="id" class="px-2 py-1 text-xs rounded-full bg-primary-500 text-white dark:text-primary-200">
                        {{ tags?.user.find(tag => tag.id === id).name }}
                      </div>
                      <div v-for="id in note.tags" :key="id" class="px-2 py-1 text-xs rounded-full bg-primary-500 text-white dark:text-primary-200">
                        {{ tags?.user.find(tag => tag.id === id).name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </resizable-column>
        </div>
      </template>
      <template #col2>
        <div class="flex-1 flex flex-col border">
          <div class="px-2 h-12 flex items-center border-b">
            <div>
              Search...
            </div>
            <div class="ml-auto">
              <div class="flex gap-4">
                <button @click="changeTheme('dark')">dark</button>
                <button @click="changeTheme('light')">light</button>
                <button @click="showPreview = !showPreview">toggle preview</button>
              </div>
            </div>
          </div>

          <resizable-column class="flex-1 overflow-hidden">
            <template #col1>
              <div class="w-1/2" :class="{'!w-full': !showPreview}">
                <monaco-editor v-model="text" />
              </div>
            </template>
            <template #col2>
              <div class="flex-1 border-l px-4 overflow-auto w-1/2" :class="{'hidden': !showPreview}">
                <markdown-preview :text="text" />
              </div>
            </template>
          </resizable-column>
          <div class="h-18 p-4 border-t">
            Tags
          </div>
        </div>
      </template>
    </resizable-column>
  </div>
</template>

<style lang="postcss" scoped>
</style>