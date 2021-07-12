import TypesService from "../services/typesService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    TypesService.getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="list__tags__box">
      <h3 className="list__tags__title">Список категорий</h3>
      <ul className="tags__list">
        {categories.map((category) => {
          return (
            <li className="tags__item" key={category.category}>
              <Link to="/">{category.category}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
