import UserService from "../services/userService";
import { useState, useEffect } from "react";
import "../styles/list.css";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.fetchUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="list__tags__box">
      <h3 className="list__tags__title">Список всех пользователей</h3>
      <ul className="tags__list">
        {users.reverse().map((username) => {
          return (
            <li className="tags__item" key={username.username}>
              {username.username}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
