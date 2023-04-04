const initialState = {
  loading: false,
  error: "",
  success: "",
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default alertReducer;
