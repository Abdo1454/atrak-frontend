import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "../chat/ChatWidget";


function Layout() {
  return (
    <>
      <Navbar />


      <main>
        <Outlet />
      </main>


      <ChatWidget />


      <Footer />
    </>
  );
}


export default Layout;