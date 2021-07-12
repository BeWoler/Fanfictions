import "../styles/fanficCard.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import image from "../img/preview.jpg";
import FanficService from "../services/fanficService";

function FanficCard() {
  const { store } = useContext(Context);
  const [fanfics, setFanfics] = useState([]);

  useEffect(() => {
    FanficService.getAllFanfic().then((res) => {
      setFanfics(res.data);
    });
  }, []);

  return (
    <div>
      {fanfics.reverse().map((fanfic) => {
        return (
          <div className="fanfic__card">
            <img className="fanfic__main__preview" src={image} alt="preview" />
            <div>
              <h3 className="fanfic__title">
                <Link
                  to={`/fanfic/` + fanfic._id}
                  onClick={() => {
                    store.pushFanficInfo(fanfic._id);
                  }}
                >
                  {fanfic.title}
                </Link>
              </h3>
              <ul className="fanfic__list">
                <li className="fanfic__items">Автор: {fanfic.author}</li>
                <li className="fanfic__items">
                  Фэндом:{" "}
                  {fanfic.fandoms.map((fandom) => {
                    return `${fandom.value} `;
                  })}
                </li>
                <li className="fanfic__items">
                  Теги:{" "}
                  {fanfic.tags.map((tag) => {
                    return `${tag.value} `;
                  })}
                </li>
                <li className="fanfic__items">
                  Категории:{" "}
                  {fanfic.categories.map((category) => {
                    return `${category.value} `;
                  })}
                </li>
              </ul>
              <hr />
              <div className="fanfic__description">{fanfic.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default observer(FanficCard);
