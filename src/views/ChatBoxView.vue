
<template>
  <v-card ref="scrollChat" class="pa-3 ma-3" outlined color="rgba(0, 0, 0, 0.5)" theme="dark">
    <h3>
      Hello, my name is Pond. Delta, Pond.
    </h3>
    <div class="messages">
    <ChatMessage v-for='message in messages'
          :key='message.id'
          :class='["message", { right: message.isMine }]'
          :dark='message.isMine'
          :text='message.text'
          />
      </div>
      <ChatBox
        ref="chatbox"
        class='chat-box'
        @submit='onSubmit'
    />


  </v-card>
</template>
<script>
import ChatMessage from '@/components/ChatMessage.vue';
import ChatBox from '@/components/ChatBox.vue';
import generateUID from '@/utils/uid.js'
export default {
  name: 'ChatBoxView',
  components: {
    ChatBox,
    ChatMessage
  },
  created () {
    this.getChat()
  },
  methods: {
    
    getChat() {
    },
  
    onSubmit(event, text) {
      event.preventDefault();
      
      if (text && text.trim() !== '') {
        this.sendMessage({
        text,
        id: generateUID(),
        isMine: true 
      });
        
      }
      
    },

    sendMessage(message) {
      this.messages.push(message)
      // this.$nextTick(() => {
      //     const container = this.$refs.scrollCardChat;
      //     container.scrollTop = container.scrollHeight
      //     console.log(container )
      //   })
    }
    

  },
  watch: {
    messages() {
      this.$nextTick(() => {
        const chatbox = this.$refs.chatbox;
        if (chatbox) {
          chatbox.scrollIntoView({behavior: 'smooth'})
        }
      })
    }
  },
  data: () => ({
    user: undefined,
    messages: []
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
