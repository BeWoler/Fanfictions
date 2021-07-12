import TypesService from "../services/typesService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";

export default function TagsList() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    TypesService.getTags().then((res) => {
      setTags(res.data);
    });
  }, []);

  return (
    <div className="list__tags__box">
      <h3 className="list__tags__title">Список тегов</h3>
      <ul className="tags__list">
        {tags.map((tag) => {
          return (
            <li className="tags__item" key={tag.tag}>
              <Link to="/">{tag.tag}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
