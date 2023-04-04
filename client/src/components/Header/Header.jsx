import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useSelector } from "react-redux";

const Header = () => {
  const { token: isAuth } = useSelector((state) => state.auth);

  const token = localStorage.getItem("token");

  return (
    <div className="header">
      <div className="container">
        <div className="header_wrap">
          <Link to="/" className="header_logo"></Link>

          {isAuth || token ? (
            <div>Авторизован</div>
          ) : (
            <div className="header_btns">
              <Button to="/login" variant="solid">
                Войти
              </Button>
              <Button to="/register" variant="outline">
                Регистрация
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
