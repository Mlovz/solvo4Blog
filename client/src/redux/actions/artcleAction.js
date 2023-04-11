import { api } from "../../api";

export const getArticles = () => async (dispatch) => {
  try {
    const res = await api.get("/home/articles");

    if (res.data) {
      dispatch({ type: "GET_POSTS", payload: res.data.articles });
    }
  } catch (err) {}
};
