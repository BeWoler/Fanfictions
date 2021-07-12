import React from "react";
import { Link } from 'react-router-dom';
import "../styles/signBtns.css"

export default function SignBtns() {
  return (
    <div className="sign_btns">
      <Link to="/login">
        <button className="signIn">Войти</button>
      </Link>
      <Link to="/registration">
        <button className="signUp">Регистрация</button>
      </Link>
    </div>
  );
}
