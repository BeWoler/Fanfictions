import React from "react";
import image from "../img/preview.jpg";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import CommentsForm from "./CommentsForm";
import "../styles/fanficPage.css";
import CommentService from "../services/commentService";
import FanficService from "../services/fanficService";

function FanficPage() {
  const [comments, setComments] = useState([]);
  const [fanfic, setFanfic] = useState([]);

  useEffect(() => {
    async function getFanfic() {
      await FanficService.getFanficById({
        _id: localStorage.getItem("_id"),
      }).then((res) => {
        setFanfic(res.data);
      });
      await CommentService.fetchComment({
        fanfic: localStorage.getItem("_id"),
      }).then((res) => {
        setComments(res.data);
      });
    }
    getFanfic();
  }, []);
  return (
    <div className="fanfic__box">
      <div className="fanfic__content">
        <img className="fanfic__preview" src={image} alt="preview" />
        <div className="fanfic__flex">
          <h3 className="fanfic__title">{fanfic.title}</h3>
          <ul className="fanfic__list">
            <li className="fanfic__items">Автор: {fanfic.author}</li>
            <li className="fanfic__items">Фэндом: Naruto</li>
            <li className="fanfic__items">Теги: а123, 123124, 15325423</li>
            <li className="fanfic__items">Категории: Anime, Games</li>
            <hr />
            <li className="fanfic__items">Описание: {fanfic.description}</li>
          </ul>
        </div>
      </div>
      <div className="social__group">
        <button className="btn-like btn light">Нравится: {fanfic.likes}</button>
        <button className="btn-testimonials btn light">Комментарии</button>
      </div>
      <div className="fanfic__text">
        <h3 className="text__title">Содержание</h3>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item light">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="acc_btn accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Глава 1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accord accordion-body">{fanfic.text}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="acc_btn accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Глава 2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accord accordion-body">{fanfic.text}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="acc_btn accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Глава 3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accord accordion-body">{fanfic.text}</div>
            </div>
          </div>
        </div>
        <hr />
        <ul>
          <h5>Комментарии :</h5>
          {comments.map((comment) => {
            return (
              <div className="comment">
                <h4 className="comment__author">{comment.author}</h4>
                <p className="comment__text">{comment.text}</p>
              </div>
            );
          })}
        </ul>
      </div>
      <hr />
      <CommentsForm />
    </div>
  );
}

export default observer(FanficPage);
