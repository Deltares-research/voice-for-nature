<template>
  <form class='chat-box' @submit='onSubmit($event)'>
    <input
        v-model='text'
        placeholder='Write a message'
        type='text'
    />
    <button :disabled='text === ""'>Send</button>
  </form>
</template>


<script>
export default {
  name: 'ChatBox',
  data: () => ({

    text: ''
  }),
  methods: {
    onSubmit(event) {
      this.$emit("submit", event, this.text);
      this.text = '';
    }
  }
}
</script>

<style scoped>
.chat-box {
  width: 100%;
  display: flex;
  padding: 1rem 0;
}

input {
  width: min(100%, 20rem);
  flex-grow: 1;
  
}

button {
    padding: 0 1rem
}

button:disabled {
  opacity: 0.5;
}
</style>

