<script setup>
  import { computed, inject, ref } from 'vue'
  import ResizableColumn from './ResizableColumn.vue'

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
</script>

<template>
  <div>
    <!-- <div class="p-4 space-x-2">
      <button class="border px-4" @click="changeTheme('light')">Light</button>
      <button class="border px-4" @click="changeTheme('dark')">Dark</button>
    </div> -->
    <resizable-column>
      <template #col1>
        <div class="w-1/3">
          <div class="px-2 h-12 border flex justify-between items-center">
            <div>
              <div class="font-semibold leading-tight">{{ user.name }}</div>
              <div class="text-xs">{{ user.email }}</div>
            </div>
            <div class="space-x-4 text-sm font-semibold">
              <a href="#">Account</a>
              <a href="#">Logout</a>
            </div>
          </div>
          <div class="border flex">
            <div class="w-1/3">
              <div class="border text-center py-2">
                <div class="text-lg font-semibold">Tags</div>
                <div class="space-x-2 text-xs">
                  <button>Reorder</button>
                </div>
              </div>
              <div class="border">
                <div v-for="tag in tags.system" :key="tag.name" class="border p-2 flex justify-between items-center">
                  <div class="text-sm">{{ tag.name }}</div>
                  <div class="text-xs">{{ tag.count }}</div>
                </div>
                <div v-for="tag in tags.user" :key="tag.name" class="border p-2 flex justify-between items-center">
                  <div class="text-sm">{{ tag.name }}</div>
                  <div class="text-xs">{{ tag.count }}</div>
                </div>
              </div>
            </div>
            <div class="w-2/3">
              <div class="border text-center py-2">
                <div class="text-lg font-semibold">All Notes</div>
                <div class="space-x-2 text-xs">
                  <button>New</button>
                  <button>Sort</button>
                  <button>Display</button>
                </div>
              </div>
              <div class="border">
                <div v-for="note in notes" :key="note.name" class="border p-2">
                  <div class="flex justify-between items-center">
                    <div>
                      <div class="">{{ note.title }}</div>
                      <div class="text-sm">{{ note.preview }}</div>
                    </div>
                    <div>
                      <!--  -->
                    </div>
                  </div>
                  <div class="text-sm mt-2">{{ note.updated_at }}</div>
                  <div class="flex gap-2 mt-2">
                    <div v-for="id in note.tags" :key="id" class="px-2 py-1 text-xs rounded-full bg-primary-500">
                      {{ tags?.user.find(tag => tag.id === id).name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #col2>
        <div class="flex-1 border">
          <div class="px-2 border h-12 flex items-center">
            Search...
          </div>
          <div class="px-2 py-2 border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquam, sapiente harum perferendis aspernatur atque natus odit, maiores consequatur aperiam dolor ipsam alias quod eligendi magnam dignissimos numquam omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquam, sapiente harum perferendis aspernatur atque natus odit, maiores consequatur aperiam dolor ipsam alias quod eligendi magnam dignissimos numquam omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquam, sapiente harum perferendis aspernatur atque natus odit, maiores consequatur aperiam dolor ipsam alias quod eligendi magnam dignissimos numquam omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquam, sapiente harum perferendis aspernatur atque natus odit, maiores consequatur aperiam dolor ipsam alias quod eligendi magnam dignissimos numquam omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae aliquam, sapiente harum perferendis aspernatur atque natus odit, maiores consequatur aperiam dolor ipsam alias quod eligendi magnam dignissimos numquam omnis.
          </div>
        </div>
      </template>
    </resizable-column>
  </div>
</template>

<style lang="postcss" scoped>
</style>