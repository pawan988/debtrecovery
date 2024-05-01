import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
const Layout = ({ children, noSidebar }) => {
  return (
    <div className="md:flex">
      {!noSidebar && <Sidebar />}
      <div className={!noSidebar ? "p-4 sm:ml-64 w-full" : "w-full"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
