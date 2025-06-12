<template>
  <v-app>
    <v-main>
      <background-viewer />
      <v-card class="pa-3 ma-3" outlined color="rgba(0, 0, 0, 0.5)" theme="dark">
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

.pa-3.ma-3 {
  width: 30vw;
  min-width: 500px;
  height: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column; 
}

.rel-height {
  /* flex: 1; */
  max-height: 100%;
}
</style>