import firebase from "firebase";

export default {
  actions: {
    async register({ dispatch, commit }, { email, password, username }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUserId');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name: username
        })
      } catch (e) {
        commit('setError', e.code)
        throw e
      }
    },
    async logout({ dispatch, commit }) {
      try {
        await firebase.auth().signOut();
        commit('clearInfo')
      } catch (e) { }
    },
    getUserId() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e.code)
        throw e;
      }
    }
  }
}