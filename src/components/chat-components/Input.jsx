import { React } from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" name="" id="" placeholder="Type Something" />
      <div className="send">
        <img src="" alt="" />
        <input type="file" name="" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
