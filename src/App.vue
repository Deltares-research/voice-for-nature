<template>
  <v-app>
    <v-main>
      <background-viewer />
      <v-card class="ma-3 information" :height="folded? '300px' : '100%'" outlined color="rgba(0, 0, 0, 0.5)" theme="dark">
        <v-tabs
          v-model="tab"
          align-tabs="title"
        >
          <v-tab
            v-for="item in tabs"
            :key="item"
            :text="item"
            :value="item"
            :to="`/${item}`"
          ></v-tab>
        </v-tabs>
        <v-tabs-window class="rel-height">
            <router-view></router-view>
        </v-tabs-window>
      </v-card>
      <v-btn class="ma-3" :icon="folded ? 'mdi-chevron-down' : 'mdi-chevron-up'" @click="folded= !folded"></v-btn>
    </v-main>
  </v-app>
</template>

<script>
import BackgroundViewer from '@/components/BackgroundViewer.vue'

export default {
  name: 'App',

  components: {
    BackgroundViewer
  },

  data: () => ({
    tabs: ["stories", "chat"],
    tab: "stories",
    folded: true,
    prior_story: ""
  }),

  watch: {
    $route(to) {
      if (to.path.includes("stories")) {       
        // Remeber the story so when user clicks on chat and then back to stories they see the story last viewed
        if (!to.path.endsWith("/stories")) {
          const pathArray = to.path.split("/")
          
          this.prior_story= pathArray.at(-1)
        }
        if (this.prior_story) {
          this.$router.push(`/stories/${this.prior_story}`)
        }
        this.tab = "stories"

      }
      else if (to.path.includes("chat")) {
        this.tab = "chat"
      }
    }
  },

  mounted () {
  }
}
</script>

<style>
html {
  height: 100vh;
  overflow-y: hidden;
}

.information {
  width: 30vw;
  min-width: 500px;
  max-height: 90vh;
}

.rel-height {
  height: 100%;
}
</style>