import router from '@/router';
import { auth, db } from '@/apis';

export default {
  loadUser: async ({ commit, dispatch }) => {
    const user = await auth.checkUserLogin();
    commit('SET_USER_LOADED');
    await dispatch('setUserDetails', user);
    console.log('onuserLoginChange', user);
    return user;
  },

  registerUserEmailPassword: ({ state }, { email, password }) => {
    return auth
      .registerUserEmailPassword(email, password)
      .then(res => {
        state.isLoggedIn = true;
        console.log('signed up user', res);
      })
      .catch(err => {
        console.log(err);
        debugger;
        throw err;
      });
  },

  registerUser: ({ dispatch }, { email, password }) => {
    dispatch('registerUserEmailPassword', { email, password }).then(() => {
      router.push({ name: 'courses' });
    });
  },

  logoutUser: async ({ commit }) => {
    await auth.signUserOut();
    commit('SET_USER_LOGGED_IN', false);
    router.push({ name: 'home' });
  },

  login: async ({ dispatch }, { email, password }) => {
    const user = await auth.signUserIn(email, password);

    if (router.currentRoute.params.nextUrl) {
      router.push(router.currentRoute.params.nextUrl);
    } else {
      router.push({ name: 'courses' });
    }
    dispatch('setUserDetails', user);
    return user;
  },

  setUserDetails: ({ commit }, user) => {
    if (user) {
      commit('SET_USER_LOGGED_IN', !!user);
      commit('SET_USER_DETAILS', {
        displayName: user.displayName,
        email: user.email
      });
    }
  },

  navigateTo: (_, { path }) => {
    router.push({ path });
  },

  getAllCourses: async ({ getters, commit }) => {
    if (getters.allCourses.length === 0) {
      const courses = await db.getAllCourses();
      commit('SET_COURSES', courses);
      return courses;
    }
  }
};
