export default {
  async registration({commit}, {loginId, password}) {
    try {
      if(loginId.length > 20 ){
        throw new Error("20文字以下")
      };
      const data = {loginId: loginId, password: password};
      commit("REGISTER_USER", data);
    } catch (e) {
      throw e
    }
  },

  async login({commit}, {loginId, password, authUser}) {
    try {
      console.log('authUser', authUser);
      if (authUser !== undefined && (loginId !== authUser.loginId || password !== authUser.password)){
        throw new Error("error!!!");
      }
      const data = {
        loginId: loginId,
        password: password
      }
      commit("AUTHED_USER", data)
    } catch (e) {
      throw e;
    }
  }
}