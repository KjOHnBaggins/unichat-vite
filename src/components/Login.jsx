import { React } from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import firebaseAuth from "../firebase";

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

const Login = () => {
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
