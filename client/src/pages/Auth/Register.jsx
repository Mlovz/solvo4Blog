import React, { useState } from "react";
import { Button, Title, Input } from "../../components";
import "./auth.css";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    cf_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

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
