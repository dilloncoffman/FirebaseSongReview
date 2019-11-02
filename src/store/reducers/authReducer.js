const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN_ERROR":
      console.log("Sign in error!");
      return {
        ...state,
        authError: "Email/password is incorrect..."
      };
    case "SIGN_IN_SUCCESS":
      console.log("Sign in success!");
      return {
        ...state,
        authError: null
      };
    case "SIGN_OUT_SUCCESS":
      console.log("Sign out success!");
      return state;
    default:
      return state;
  }
};

export default authReducer;
