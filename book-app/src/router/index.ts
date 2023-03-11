import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CurrentlyReading from '../views/CurrentlyReadingView.vue';
import ReadView from '../views/ReadView.vue';
import ToReadView from '../views/ToReadView.vue';
import FavouritesView from '../views/FavouritesView.vue';
import MainPage from '../components/MainPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pages',
      name: 'pages',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/currently-reading',
      name: 'currently-reading',
      component: CurrentlyReading
    },
    {
      path: '/read',
      name: 'read',
      component: ReadView
    },
    {
      path: '/to-read',
      name: 'to-read',
      component: ToReadView
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView
    }
  ]
});

export default router;
