const initialState = {
  articles: [],
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        articles: action.payload,
      };

    default:
      return state;
  }
};

export default articleReducer;
