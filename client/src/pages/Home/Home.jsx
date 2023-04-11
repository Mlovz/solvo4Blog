import React, { useEffect } from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArtcleCard } from "../../components";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const { articles } = useSelector((state) => state.article);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  console.log(articles);

  return (
    <div className="container">
      <div className="home">
        <h1>Unusual blog</h1>

        <div className="home_box">
          {articles.map((post, index) => (
            <ArtcleCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
