import axios from "axios";
import { api } from "../../api";

export const login = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING", payload: { loading: true } });

    const res = await api.post("/login", userData);

    if (res.data) {
      dispatch({
        type: "AUTH",
        payload: {
          user: res.data.user,
          token: res.data.access_token,
        },
      });
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
      // window.location.href = "/";
    }

    dispatch({ type: "LOADING", payload: { loading: false } });
  } catch (err) {
    dispatch({ type: "LOADING", payload: { loading: false } });
    dispatch({ type: "ERROR", payload: { error: err.response.data.msg } });
  }
};

export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      dispatch({ type: "LOADING", payload: { loading: true } });

      const res = await api.post("/refresh_token");

      if (res.data) {
        dispatch({
          type: "AUTH",
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });
        localStorage.setItem("token", res.data.access_token);
      }

      dispatch({ type: "LOADING", payload: { loading: false } });
    } catch (err) {
      dispatch({ type: "LOADING", payload: { loading: false } });
      dispatch({ type: "ERROR", payload: { error: err.response.data.msg } });
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await api.get("/logout");

    if (res.data) {
      localStorage.clear();
      dispatch({
        type: "AUTH",
        payload: {
          user: null,
          token: "",
        },
      });
    }
  } catch (err) {
    dispatch({ type: "LOADING", payload: { loading: false } });
    dispatch({ type: "ERROR", payload: { error: err.response.data.msg } });
  }
};
