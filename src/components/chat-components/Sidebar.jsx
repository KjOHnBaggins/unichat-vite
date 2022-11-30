import { React } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import UserSidebar from "./UserSidebar";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <UserSidebar />
    </div>
  );
};

export default Sidebar;
