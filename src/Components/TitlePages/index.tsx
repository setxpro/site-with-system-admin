import React from "react";

import { Container } from "./styles";

type Props = {
  title: string;
};

const TitlePages = ({ title }: Props) => {
  return (
    <Container>
      <span></span>
      <h2>{title}</h2>
      <span></span>
    </Container>
  );
};

export default TitlePages;
