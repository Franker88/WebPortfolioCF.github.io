import React from "react";
import { Header } from "../../containers/header/Header";
import { Footer } from "../../containers/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="Layout-container">
      <Header />
      <div className="Layout-children">{children}</div>
      <Footer />
    </div>
  );
};

export { Layout };
