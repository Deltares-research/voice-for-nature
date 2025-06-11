
<template>
  <v-card ref="scrollChat" class="pa-3 ma-3" outlined color="rgba(0, 0, 0, 0.5)" theme="dark">
    <h3>
      Hello, my name is Pond. Delta, Pond.
    </h3>
     <deep-chat
    :demo="true"
    :textInput="{ placeholder: { text: 'Welcome to the demo!' } }"
    :history="history"
    style="height: 100%; flex: 1; overflow-y: auto;"
  />
   


  </v-card>
</template>
<script>
import 'deep-chat';
export default {
  name: 'ChatBoxView',

 
  data: () => ({
    user: undefined,
    messages: [],
    history: [
      { role: 'user', text: 'Hey, how are you today?' },
      { role: 'ai', text: 'I am doing very well!' },
    ],

  })
  
}
</script>

<style>
.messages {
  flex-grow: 1;
  overflow: auto;
  padding: 2rem;
}

.message + .message {
  margin-top: 1rem;
}

.message.right {
  margin-left: auto;
}

.pa-3.ma-3 {
  flex: 1;
  overflow-y: auto;
}
</style>
