<template>
  <v-card class="pa-3 ma-3 text" outlined color="rgba(0, 0, 0, 0.5)" theme="dark">
    <h2>
      Deltapond
    </h2>
    <div class="history" md="12" color="white">
      <div v-html="getStory()" />
    </div>
  </v-card>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'StoriesView',
  data() {
    return {

    }
  },

  methods: {
    getStory() { // get story md file
      let story = _.get(this.$route, 'params.storyName', 'fallback')
      if (story === "stories") {
        story = this.fallback_story
      }
      this.fallback_story = story
      return require(`../components/stories/${story}.md`).default
    }
  },
  computed: {
    fallback_story() {
      return "fallback"
    }
  }

}
</script>

<style>
.stories {
  position: sticky;
  top: 0;
  z-index: 2;
  display: block;
  justify-content: right;
  height: 100%;
  max-height: 100vh;
}

.text {
  height: 100%;
  overflow-y: scroll;
}

.video-wrap video {
  width: 100%;
}
</style>