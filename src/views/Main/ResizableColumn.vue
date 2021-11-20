<script setup>
  // https://htmldom.dev/create-resizable-split-views/
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const resizer = ref(null)

  // Query the element
  let leftSide = null
  let rightSide = null

  // The current position of mouse
  let x = 0
  // let y = 0

  // Width of left side
  let leftWidth = 0

  // Handle the mousedown event that's triggered when user drags the resizer
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX
    // y = e.clientY
    leftWidth = leftSide.getBoundingClientRect().width

    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x
    // const dy = e.clientY - y

    const newLeftWidth = ((leftWidth + dx) * 100) / resizer.value.parentNode.getBoundingClientRect().width
    leftSide.style.width = `${newLeftWidth}%`

    // When user moves the resizer, we should update its cursor
    document.body.style.cursor = 'ew-resize'

    // We also prevent the mouse events and text selection in both sides
    leftSide.style.userSelect = 'none'
    leftSide.style.pointerEvents = 'none'
    rightSide.style.userSelect = 'none'
    rightSide.style.pointerEvents = 'none'
  }

  const mouseUpHandler = function () {
    // These styles are removed right after the user stops moving the mouse:
    resizer.value.style.removeProperty('cursor')
    document.body.style.removeProperty('cursor')

    leftSide.style.removeProperty('user-select')
    leftSide.style.removeProperty('pointer-events')

    rightSide.style.removeProperty('user-select')
    rightSide.style.removeProperty('pointer-events')

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  onMounted(() => {
    leftSide = resizer.value.previousElementSibling
    rightSide = resizer.value.nextElementSibling

    // Attach the handler
    resizer.value.addEventListener('mousedown', mouseDownHandler)
  })
  onBeforeUnmount(() => {
    resizer.value.removeEventListener('mousedown', mouseDownHandler)
  })
</script>

<template>
  <div class="flex">
    <slot name="col1"></slot>

    <div ref="resizer" class="cursor-ew-resize w-6 z-10 -mx-3"></div>

    <slot name="col2"></slot>
  </div>
</template>

<style lang="postcss" scoped>
</style>