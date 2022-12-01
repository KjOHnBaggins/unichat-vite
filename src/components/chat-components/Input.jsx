import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firebaseAuth, db } from "../../firebase";
const Input = ({ scroll }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Ayo, don't break the app. Peace!");
      return;
    }
    const { uid, displayName } = firebaseAuth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="input">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type Something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="send">
          <img src="" alt="" />
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src="" alt="" />
          </label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
