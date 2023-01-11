import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../routes/home/Home";
import { Layout } from "../components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };