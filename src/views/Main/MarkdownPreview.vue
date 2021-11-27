<script setup>
  import { computed } from 'vue'
  import { marked } from 'marked'
  import DOMPurify from 'dompurify'
  const props = defineProps({
    text: {
      type: String,
      default: '',
    },
  })
  const preview = computed(() => {
    const dirtyHtml = marked(props.text)
    const cleanHtml = DOMPurify.sanitize(dirtyHtml, { USE_PROFILES: { html: true } })

    return cleanHtml
  })
</script>

<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="markdown" v-html="preview"></div>
  </div>
</template>

<style lang="postcss" scoped>
:deep() {
  .markdown {
    @apply space-y-4;
    ul, ol {
      @apply pl-4;
    }
    ul {
      @apply list-disc ml-1;
    }
    ol {
      @apply list-decimal;
    }
    li {
      @apply my-2;
    }
    p {
      @apply my-2 leading-5;
    }
    a {
      @apply text-blue-400 underline;
    }
    strong {
      @apply font-semibold;
    }
    td, th {
      @apply border px-2 py-1;
    }
    h1 {
      @apply text-2xl;
    }
    h2 {
      @apply text-xl;
    }
    h3 {
      @apply text-lg;
    }
    h4 {
      @apply text-base;
    }
    h5 {
      @apply text-sm;
    }
    h6 {
      @apply text-xs;
    }
  }
}
</style>