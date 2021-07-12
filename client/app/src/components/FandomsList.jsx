import TypesService from "../services/typesService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";

export default function FandomsList() {
  const [fandoms, setFandoms] = useState([]);

  useEffect(() => {
    TypesService.getFandoms().then((res) => {
      setFandoms(res.data);
    });
  }, []);

  return (
    <div className="list__tags__box">
      <h3 className="list__tags__title">Список фэндомов</h3>
      <ul className="tags__list">
        {fandoms.map((fandom) => {
          return (
            <li className="tags__item" key={fandom.fandom}>
              <Link to="/">{fandom.fandom}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
