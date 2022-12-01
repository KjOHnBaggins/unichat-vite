import React from "react";

const Message = ({ message }) => {
  return (
    <div className="message owner">
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
