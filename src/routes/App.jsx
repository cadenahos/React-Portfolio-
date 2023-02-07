import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import ContactUs from "@pages/ContactUs";
import NotFound from "@pages/NotFound";
import "@styles/global.scss";
import Blog from "../pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
