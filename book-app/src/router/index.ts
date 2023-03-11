import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CurrentlyReading from '../views/CurrentlyReadingView.vue';
import ReadView from '../views/ReadView.vue';
import ToReadView from '../views/ToReadView.vue';
import FavouritesView from '../views/FavouritesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
