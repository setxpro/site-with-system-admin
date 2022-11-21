import React from "react";
import Layout from "../Components/Layout";

import About from "../Pages/About";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";

const Screens = () => {
  return (
    <React.Fragment>
      <Layout>
        <About />
      </Layout>
      <Layout>
        <Products />
      </Layout>
      <Layout>
        <Contact />
      </Layout>
    </React.Fragment>
  );
};

export default Screens;
