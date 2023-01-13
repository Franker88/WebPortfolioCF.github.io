import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../routes/home/Home";
import { NotFound } from "../routes/notfound/NotFound";
import { Diplomas } from "../routes/diplomas/Diplomas";
import { Projects } from "../routes/projects/Projects";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diplomas" element={<Diplomas />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export { App };
