import React from "react";
import { useState, useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import "../styles/loginForm.css";

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);

  return (
    <div className="signIn_box">
      <h3>Вход</h3>
      <form className="signIn_form">
        <label>
          Почта:
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
          Пароль
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
          className="login-btn"
          onClick={async (e) => {
            e.preventDefault();
            await store.login(email, password);
            if (!store.isAuth || !store.user.isActivated) {
              await store.logout();
              alert("Аккаунт не подтверждён!");
            }
            setTimeout(() => {
              history.push("/");
            }, 1000);
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default observer(LoginForm);
