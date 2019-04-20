import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/apis/auth';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register'),
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('./views/CoursesView'),
      meta: {
        requiresAuth: true
      }
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
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (!store.getters.isUserLoaded) {
    await auth.checkUserLogin();
  }
  const isLoggedIn = store.getters.isLoggedIn;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({
        name: 'login',
        params: {
          nextUrl: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn) {
      next({
        name: 'courses'
      });
    }
  }
  return next();
});

export default router;
