import React, { useContext } from "react";
import { Context } from "../index";
import switchTheme from "../scripts/switchTheme";
import "../styles/header.css";
import { Link } from "react-router-dom";
import SignBtns from "./SignBtns";
import UserBar from "./UserBar";

export default function Header() {
  const { store } = useContext(Context);

  function checkAuth() {
    if (!store.isAuth || !store.user.isActivated) {
      return <SignBtns />;
    }
    return <UserBar user={store.user} />;
  }
  return (
    <header className="header">
      <div className="header__content">
        <nav className="nav">
          <div className="dropdown">
            <Link
            to="/"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Меню
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link to="/" className="dropdown-item">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tags" className="dropdown-item">
                  Теги
                </Link>
              </li>
              <li>
                <Link to="/users" className="dropdown-item">
                  Пользователи
                </Link>
              </li>
              <li>
                <Link to="/" className="toggleBtn-menu" onClick={switchTheme}>
                  Переключить тему
                </Link>
              </li>
              <li>
                <Link to="/" className="toggleBtn-menu" onClick={switchTheme}>
                  Ru/Eng
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav__list">
            <li>
              <Link to="/" className="link">
                Главная
              </Link>
            </li>
            <li>
              <input className="search" type="search" placeholder="Поиск" />
            </li>
            <li>
              <Link to="/tags" className="link">
                Теги
              </Link>
            </li>
            <li>
              <Link to="/users" className="link">
                Пользователи
              </Link>
            </li>
          </ul>
        </nav>
        <button className="toggleBtn" onClick={switchTheme}>
          Переключить тему
        </button>
        {/* <button className="toggleBtn" onClick={switchTheme}>
          Ru/Eng
        </button> */}
        {checkAuth()}
      </div>
    </header>
  );
}
