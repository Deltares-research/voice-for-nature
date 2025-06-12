
<template>
  <v-card ref="scrollChat" class="chat-card" outlined color="rgba(0, 0, 0, 0.5)" theme="dark">
    <h3>
      Hello, my name is Pond. Delta, Pond.
    </h3>
     <deep-chat
    :demo="true"
  
    :history="history"
    style="border-radius: 8px;height: 100%; width: 95%; background-color: #292929"
    messageStyles='{
    "default": {
      "ai": {"bubble": {"backgroundColor": "#545454", "color": "white"}}
    },
    "loading": {
      "bubble": {"backgroundColor": "#545454", "color": "white"}
    }
  }'
  :textInput='{
    "styles": {
      "container": {
        "backgroundColor": "#666666",
        "border": "unset",
        "color": "#e8e8e8"
      }
    },
    "placeholder": {"text": "Ask me anything...", "style": {"color": "#bcbcbc"}}
  }'
  :submitButtonStyles='{
    "submit": {
      "container": {
        "default": {"bottom": "0.7rem"}
      },
      "svg": {
        "styles": {
          "default": {
            "filter": "brightness(0) saturate(100%) invert(70%) sepia(52%) saturate(5617%) hue-rotate(185deg) brightness(101%) contrast(101%)"
          }
        }
      }
    }
  }'
  auxiliaryStyle="
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: unset;
    }"
    
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

.chat-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
}

</style>
