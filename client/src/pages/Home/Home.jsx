import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [text, setText] = useState(false);

  const hadnleClick = () => {
    setText(!text);
  };

  return (
    <div>
      {text && <h1>Ds rkbyasdasdsadsa</h1>}

      <button onClick={hadnleClick}>Click</button>
    </div>
  );
};

export default Home;
