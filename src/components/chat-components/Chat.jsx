import React, { useEffect, useRef, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Input from "./Input";
import Sidebar from "./Sidebar";
import Messages from "./Messages";

const Chat = () => {
  const scroll = useRef();

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
        <Input scroll={scroll} />
        <span ref={scroll}></span>
      </div>
    </div>
  );
};

export default Chat;
