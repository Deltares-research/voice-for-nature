<template>
  <div
      :class='["message", { dark }]'
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: [
    'text', // Content of the message
    'dark' // Background variant of the box
  ]
}
</script>

<style scoped>
.message {
  background: #e7e7e7;
  border-radius: 10px;
  padding: 0.5rem;
  width: fit-content;
}

.message.dark {
  background: #545455;
}

h5 {
  margin: 0 0 .5rem 0;
}
</style>