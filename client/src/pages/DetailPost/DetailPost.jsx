import React, { useEffect, useState } from "react";
import "./detailPost.css";

import { useParams } from "react-router-dom";
import { api } from "../../api";
import Loading from "../../components/Loading/Loading";

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        try {
          setLoad(true);
          const res = await api.get(`/article/${id}`);
          setPost(res.data);
          setLoad(false);
        } catch (err) {}
      };

      getPost();
    }
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="detail_post">
      {/* {post?.map((item) => (
        <div>{}</div>
      ))} */}
    </div>
  );
};

export default DetailPost;
