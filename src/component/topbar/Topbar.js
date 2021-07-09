import { Link } from "react-router-dom";
import "./Topbar.css";
export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://img.xcitefun.net/users/2011/10/267822,xcitefun-gorgeous-girl-5.jpg"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topItem">
              <Link className="link" to="/ragister">
                RAGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
