import { useState, useEffect, ReactNode } from "react";
import Header from "../Header";
import Layout from "../Layout";

import { Container, TemplateMain } from "./styles";

const Template = ({ children }: { children: ReactNode }) => {
  const [disappearHeader, setDisappearHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2) {
        setDisappearHeader(true);
      } else {
        setDisappearHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Container>
      <Header disappearHeader={disappearHeader} />
      <TemplateMain>
        <Layout>{children}</Layout>
      </TemplateMain>
    </Container>
  );
};

export default Template;
