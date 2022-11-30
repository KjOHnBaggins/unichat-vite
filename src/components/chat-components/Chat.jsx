import { React } from "react";
import Input from "./Input";
import Sidebar from "./Sidebar";
// import Search from "./Search";
// import Navbar from "./Navbar";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat-container">
      <Sidebar />
      <div className="chat">
        <div className="chatInfo">
          <span>Jane</span>
          <div className="chatIcons">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
