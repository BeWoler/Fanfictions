import "../styles/userBar.css";
import { Link } from "react-router-dom";
import image from "../img/img_avatar.png";

export default function UserBar(props) {
  return (
    <div className="userBar__box">
    <Link to={`/profile/` + props.user.username}>
      <img className="avatar" src={image} alt="avatar"></img>
      <p className="user__email">{props.user.username}</p>
    </Link>
    </div>
  );
}
