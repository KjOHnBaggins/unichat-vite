import { React, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        {/* <img src="" alt="" /> */}
        <span>{user.displayName}</span>
      </div>
    </div>
  );
};

export default Navbar;
