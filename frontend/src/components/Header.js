import React from "react";
import "./Header.css";
import logo from "../img/logobmw1.png";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)

  return (
    <div className="header">
      <div className="header__firstRow">
        <img className="header__logo" src={logo} />
        <p>Hello, {user? user.name : "guest."}</p>
        <div className="header__auth">
          <Link to={!user && "/auth"}>
            <button onClick={() => dispatch(logout())} className="header__authBtn">
              {user ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
      </div>
      <div className="header__secondRow">
        <Link to="/">Home</Link>
        <Link to="/sellcar">Sell car</Link>
        <Link to="/cars">Find car</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}


export default Header;
