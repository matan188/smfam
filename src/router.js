import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('./views/CoursesView')
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
