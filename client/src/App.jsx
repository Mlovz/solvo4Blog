import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home, Login, Register, DetailPost } from "./pages";
import Loading from "./components/Loading/Loading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/actions/authAction";
import { getArticles } from "./redux/actions/artcleAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Loading />
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<DetailPost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
