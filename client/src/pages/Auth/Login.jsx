import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Title, Input } from "../../components";
import "./auth.css";
import { login } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.alert);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(userData, navigate));
  };

  if (token) {
    return navigate("/");
  }

  return (
    <div className="auth">
      <div className="auth_box">
        <Title>Войти</Title>
        {error && (
          <span style={{ color: "red", fontSize: "20px" }}>{error}</span>
        )}

        <form action="" className="auth_form" onSubmit={onSubmit}>
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

          <Button variant="clear" to="/forgot">
            Забыли пароль?
          </Button>

          <Button fullWidth variant="solid" type="submit">
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
