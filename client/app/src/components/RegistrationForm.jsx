import React from "react";
import { useState, useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import "../styles/registrationForm.css";

function RegistrationForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const { store } = useContext(Context);

  return (
    <div className="signUp_box">
      <h3>Регистрация на сайте</h3>
      <form className="signUp_form">
        <label>
          Почта*:
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Логин*:
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          Пароль*:
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button
          className="registr__btn"
          onClick={(e) => {
            e.preventDefault();
            store.registration(email, password, username);
            setTimeout(() => {history.push('/activation')}, 1500);
          }}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default observer(RegistrationForm);
