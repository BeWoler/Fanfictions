import "../styles/comments.css";
import { useState, useContext, useEffect } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

function CommentsForm() {
  const { store } = useContext(Context);
  const [comment, setComment] = useState("");
  const [fanfic, setFanfic] = useState();

  useEffect(()=>{
    setFanfic(localStorage.getItem('_id'));
  }, [])

  function checkAuth() {
    if (!store.isAuth || !store.user.isActivated) {
      return (
        <p className="nonAuth">
          Неавторизованные пользователи не могут оставлять комментарии и ставить
          лайки
        </p>
      );
    } else {
      return (
        <form className="comments__form">
          <textarea
            className="form-control"
            type="text"
            required
            placeholder="Оставьте свой комментарий"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              store.comments(store.user.username, comment, fanfic);
              window.location.reload();
            }}
          >
            Отправить
          </button>
        </form>
      );
    }
  }
  return <div className="comments__box">{checkAuth()}</div>;
}

export default observer(CommentsForm);
