import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseAuth, storage } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = React.useContext(AuthContext);
  console.log(user);
  // const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();
  return (
    <div className="" id="login-page">
      <div className="" id="login-card">
        <h2>Welcome to Unichat!</h2>
        <div
          className="login-button google"
          onClick={() => signInWithRedirect(firebaseAuth, googleAuthProvider)}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() => signInWithRedirect(firebaseAuth, facebookAuthProvider)}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
