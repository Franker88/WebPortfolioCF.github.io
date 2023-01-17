import React from "react";
import { Header } from "../../containers/header/Header";
import { Footer } from "../../containers/footer/Footer";
import { CVButton } from "../../containers/cv-button/CVButton";

const Layout = ({ children }) => {
  return (
    <div className="Layout-container">
      <Header />
      <CVButton />
      <div className="Layout-children">{children}</div>
      <Footer />
    </div>
  );
};

export { Layout };
