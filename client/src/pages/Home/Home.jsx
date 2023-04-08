import React, { useEffect } from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArticleCard } from "../../components";

const Home = () => {
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  return (
    <div className="container">
      <div className="home">
        <h1>Unusual blog</h1>

        <div className="home_box">
          {/* {[1, 2, 3, 4, 5].map((post, index) => (
            <ArticleCard
              key={index}
              post={{
                _id: 1,
                title: "",
                createdAt: "",
                content: "",
              }}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
