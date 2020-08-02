export default {
  REGISTER_USER: function (state, data) {
    state.registeredUser["loginId"] = data["loginId"];
    state.registeredUser["password"] = data["password"];
    state.authUser = data;
  },
  AUTHED_USER: function(state, data){
    console.log('state', state);
    state.authUser = data;
  }
}