<script setup>
  import { onMounted, ref } from 'vue'
  import { editor } from 'monaco-editor'
  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
  })
  const emit = defineEmits(['update:modelValue'])

  const text = ref(props.modelValue)

  const initMonaco = () => {
    editor.defineTheme('myTheme', {
      // base: 'vs',
      base: 'vs-dark',
      inherit: true,
      rules: [{ background: 'EDF9FA' }],
      colors: {
        'editor.background': '#00191c',
      },
    })
    editor.setTheme('myTheme')
    const monacoEditor = editor.create(document.getElementById('monaco-editor'), {
      value: text.value,
      language: 'markdown',
      // theme: 'vs-dark',
      theme: 'myTheme',
      minimap: {
        enabled: false,
      },
      automaticLayout: true, // the important part
    })
    monacoEditor.onDidChangeModelContent((event) => {
      emit('update:modelValue', monacoEditor.getValue())
    })
  }

  onMounted(() => {
    initMonaco()
  })
</script>

<template>
  <div id="monaco-editor" class="h-full max-h-full"></div>
</template>

<style lang="postcss" scoped>
</style>