import "../styles/fanficCreate.css";
import { useState, useEffect, useContext } from "react";
import TypesService from "../services/typesService";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

function FanficCreate() {
  const { store } = useContext(Context);

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [fandoms, setFandoms] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTag, setSelectedTag] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFandom, setSelectedFandom] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    TypesService.getCategories().then((res) => {
      setCategories(res.data);
    });
    TypesService.getTags().then((res) => {
      setTags(res.data);
    });
    TypesService.getFandoms().then((res) => {
      setFandoms(res.data);
    });
  }, []);

  function fanficCreate(e) {
    e.preventDefault();
    store.createFanfic(
      title,
      store.user.username,
      description,
      selectedTag,
      selectedCategory,
      selectedFandom,
      text
    );
  }

  return (
    <div className="fanfic__create__box">
      <h2 className="fanfic__h2">Анкета создания фанфика</h2>
      <form className="fanfic__create__form">
        <div className="fanfic__create__div input-group mb-3">
          <span className="input-group-text">Название</span>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="fanfic__create__div input-group">
          <span className="input-group-text">Краткое описание</span>
          <textarea
            className="form-control"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="fanfic__create__div mb-3">
          <label className="form-label">Фэндомы</label>
          <Select
            components={makeAnimated()}
            placeholder="Фэндомы"
            isMulti
            isSearchable
            className="fanfic__create__div mb-3"
            options={fandoms.map((fandom) => {
              return { label: fandom.fandom, value: fandom.fandom };
            })}
            onChange={setSelectedFandom}
          ></Select>
        </div>
        <div className="fanfic__create__div mb-3">
          <label className="form-label">Теги</label>
          <Select
            components={makeAnimated()}
            placeholder="Теги"
            isMulti
            isSearchable
            className="fanfic__create__div mb-3"
            options={tags.map((tag) => {
              return { label: tag.tag, value: tag.tag };
            })}
            onChange={setSelectedTag}
          ></Select>
        </div>
        <div className="fanfic__create__div mb-3">
          <label className="form-label">Категории</label>
          <Select
            components={makeAnimated()}
            placeholder="Категории"
            isMulti
            isSearchable
            className="fanfic__create__div mb-3"
            options={categories.map((category) => {
              return { label: category.category, value: category.category };
            })}
            onChange={setSelectedCategory}
          ></Select>
        </div>
        <div className="fanfic__create__div input-group">
          <span className="input-group-text">Текст</span>
          <textarea
            className="form-control"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={fanficCreate}>
          Создать фанфик
        </button>
      </form>
    </div>
  );
}

export default observer(FanficCreate);
