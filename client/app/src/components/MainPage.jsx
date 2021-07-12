import React from "react";
import "../styles/mainPage.css";
import Tables from "./Tables";
import FanficCard from "./FanficCard";

export default function MainPage() {
  return (
    <main className="main__box">
      <h2 className="main__title">
        Книга фанфиков
        <br />
        Миллионы историй о твоих любимых персонажах
      </h2>
      <Tables count='4' />
      <div className="main__content">
        <FanficCard />
        <button className="btn-main light">Показать больше</button>
      </div>
    </main>
  );
}
