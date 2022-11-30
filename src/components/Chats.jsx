import { React } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import firebaseAuth from "../firebase";
import Chat from "./chat-components/Chat";

const Chats = () => {
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>
        <div className="logout-tab" onClick={() => signOut(firebaseAuth)}>
          Logout
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Chats;
