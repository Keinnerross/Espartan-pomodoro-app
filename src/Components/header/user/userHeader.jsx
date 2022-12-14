import React, { useState, useContext } from "react";
import UserMenu from "./userMenu";
import "../../../stylesheets/header/user/userHeader.css";
import { context } from "../../context/store";

const UserHeader = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { userPicture } = useContext(context);
  const { userLogin, setUserLogin } = useContext(context);
  const { currentLevel } = useContext(context);
  const { allLevels } = useContext(context);

  const userJoin = (userData) => {
    setUserLogin({
      userName: userData.userName,
      password: userData.userPassword,
    });
    setLoggedIn(true);
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className="user-header-container">
      <div
        className="title-user-container"
        onClick={() => {
          setUserMenuOpen(!userMenuOpen);
        }}
      >
        <span>{userLogin.userName}</span>
        <span>{allLevels[currentLevel]}</span>
      </div>

      <picture className="profile-picture-container">
        <label htmlFor="input-user-picture">
          <div
            className="profile-picture"
            style={{ background: `url(${userPicture}) center center/cover` }}
          ></div>
        </label>
      </picture>
      <UserMenu
        onSubmit={userJoin}
        loggedIn={loggedIn}
        toggle={userMenuOpen ? "" : "disable"}
      ></UserMenu>
    </div>
  );
};

export default UserHeader;
