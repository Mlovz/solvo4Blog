const initialState = {
  user: null,
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default authReducer;
