import React, { useState } from "react";
import { Button, Title, Input } from "../../components";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    cf_password: "",
  });
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (token) {
    return navigate("/");
  }

  return (
    <div className="auth">
      <div className="auth_box">
        <Title>Регистрация</Title>
        <form action="" className="auth_form">
          <Input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={userData.username}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={userData.password}
          />

          <Input
            type="password"
            name="cf_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={userData.cf_password}
          />

          <Button fullWidth variant="solid">
            Регистрация
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
