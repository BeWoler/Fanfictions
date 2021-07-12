import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/tables.css";

export default function Tables(props) {
  const [fandoms, setFandoms] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:3001/api/fandoms").then((res) => {
      setFandoms(res.data);
    });
    axios.get("http://localhost:3001/api/tags").then((res) => {
      setTags(res.data);
    });
    axios.get("http://localhost:3001/api/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="tags__table">
      <div className="tags light">
        <h3 className="tags__title">Фэндомы</h3>
        <ul className="tags__list">
        {fandoms.slice(0, 4).map((fandom) => {
          return (
            <li className="types__item" key={fandom.fandom}>
              <Link to="/fandoms">{fandom.fandom}</Link>
            </li>
          );
        })}
        </ul>
        <button className="showMore">
          <Link to="/fandoms">Показать больше</Link>
        </button>
      </div>
      <div className="tags light">
        <h3 className="tags__title">Теги</h3>
        <ul className="tags__list">
        {tags.slice(0, 4).map((tag) => {
          return (
            <li className="types__item" key={tag.tag}>
              <Link to="/tags">{tag.tag}</Link>
            </li>
          );
        })}
        </ul>
        <button className="showMore">
          <Link to="/tags">Показать больше</Link>
        </button>
      </div>
      <div className="tags light">
        <h3 className="tags__title">Категории</h3>
        <ul className="tags__list">
        {categories.slice(0, 4).map((category) => {
          return (
            <li className="types__item" key={category.category}>
              <Link to="/categories">{category.category}</Link>
            </li>
          );
        })}
        </ul>
        <button className="showMore">
          <Link to="/categories">Показать больше</Link>
        </button>
      </div>
    </div>
  );
}
