import { Route, Routes } from "react-router-dom";
import Template from "../Components/Template";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Product from "../Pages/Products";
import SignInSide from "../Pages/SystemAdmin/Login/Signin";
import Private from "../Pages/SystemAdmin/Private";
import SecurityRoutes from "../Security/SecurityRoutes";

const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Template>
            <Home />
          </Template>
        }
      />
      <Route
        path="/about"
        element={
          <Template>
            <About />
          </Template>
        }
      />
      <Route
        path="/product"
        element={
          <Template>
            <Product />
          </Template>
        }
      />
      <Route
        path="/contact"
        element={
          <Template>
            <Contact />
          </Template>
        }
      />
      <Route path="/sign-in" element={<SignInSide />} />
      <Route path="/private" element={<SecurityRoutes><Private /></SecurityRoutes>} />
    </Routes>
  );
};

export default RoutesApp;
