import router from '@/router';
import { auth, db } from '@/apis';

export default {
  checkUserState: ({ commit }) => {
    auth.onUserLoginChange(user => {
      console.log('onuserLoginChange', user);
      commit('SET_USER_LOGGED_IN', !!user);
      commit('SET_USER_LOADED');
    });
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

  logoutUser: async () => {
    await auth.signUserOut();
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
    commit('SET_USER_DETAILS', {
      displayName: user.displayName,
      email: user.email
    });
  },

  navigateTo: (_, { path }) => {
    router.push({ path });
  },

  getAllCourses: async ({ commit }) => {
    const courses = await db.getAllCourses();
    commit('SET_COURSES', courses);
    return courses;
  }
};
