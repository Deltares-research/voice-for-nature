import { createRouter, createWebHistory } from 'vue-router'
import StoriesView from '../views/StoriesView.vue'
import ChatBoxView from '../views/ChatBoxView.vue'

const routes = [
  {
    path: '/stories/:storyName',
    name: 'stories',
    component: StoriesView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatBoxView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
