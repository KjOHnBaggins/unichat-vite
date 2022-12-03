import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import Chats from "./Chats";
import Login from "./Login";

function App() {
  const { user } = React.useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="chats" element={<Chats />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
