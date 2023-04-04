import axios from "axios";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING", payload: { loading: true } });

    const res = await axios.post("http://localhost:5000/api/login", userData);

    if (res.data) {
      dispatch({
        type: "AUTH",
        payload: {
          user: res.data.user,
          token: res.data.access_token,
        },
      });
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.parse(res.data.user));
      window.location.href = "/";
    }

    dispatch({ type: "LOADING", payload: { loading: false } });
  } catch (err) {
    dispatch({ type: "LOADING", payload: { loading: false } });
    dispatch({ type: "ERROR", payload: { error: err.response.data.msg } });
  }
};

// export const getUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: "LOADING", payload: { loading: true } });

//     const res = await axios.post("http://localhost:5000/api/refresh_token", {
//       withCredentials: true,
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });

//     console.log(res);

//     if (res.data) {
//       dispatch({
//         type: "AUTH",
//         payload: {
//           user: res.data.user,
//           token: res.data.access_token,
//         },
//       });
//       localStorage.setItem("token", res.data.access_token);
//     }

//     dispatch({ type: "LOADING", payload: { loading: false } });
//   } catch (err) {
//     dispatch({ type: "LOADING", payload: { loading: false } });
//     dispatch({ type: "ERROR", payload: { error: err.response.data.msg } });
//   }
// };
