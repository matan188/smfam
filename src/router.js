import Vue from 'vue';
import Router from 'vue-router';
import CoursesView from './views/CoursesView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoursesView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/myaccount',
      name: 'myAccount',
      component: () => import('./views/MyAccount')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup')
    }
  ]
});
