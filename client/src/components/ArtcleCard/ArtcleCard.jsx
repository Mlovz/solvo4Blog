import React from "react";
import "./artcleCard.css";
import { Link } from "react-router-dom";

const ArtcleCard = ({ post }) => {
  return (
    <Link to={`/post/${post._id}`} className="article_card">
      <h2>{post.title}</h2>
      <span>{post.createdAt}</span>
      <p>{post.content}</p>
    </Link>
  );
};

export default ArtcleCard;
