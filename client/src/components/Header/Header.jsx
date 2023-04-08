import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

const Header = () => {
  const { token: isAuth, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header_wrap">
          <Link to="/" className="header_logo"></Link>

          {isAuth ? (
            <div className="header_user">
              <img src={user?.avatar} alt="" />
              <span>{user?.username}</span>

              <Button onClick={handleLogout} variant="outline">
                Выйти
              </Button>
            </div>
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
