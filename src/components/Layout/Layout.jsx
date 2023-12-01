import React from "react";
import { Footer, Navbar } from "../../components";
import Routers from "../../router/Routers";

import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Routers />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
