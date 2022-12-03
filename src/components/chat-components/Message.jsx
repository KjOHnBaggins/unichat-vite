import React from "react";
import { firebaseAuth } from "../../firebase";

const Message = ({ message }) => {
  const checkOwnerMessage =
    message.uid === firebaseAuth.currentUser.uid ? `owner` : "";
  return (
    <div className={`message ${checkOwnerMessage}`}>
      <div className="messageInfo">
        <img src="https://picsum.photos/200/300" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
    </div>
  );
};

export default Message;
