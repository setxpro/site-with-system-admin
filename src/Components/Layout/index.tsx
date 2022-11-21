import { ReactNode } from "react";
import { Container } from "./styles";

const Layout = ({ children }: { children: ReactNode }) => {
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
      let windowHeight = window.innerHeight;
      let elementTop = reveal.getBoundingClientRect().top;
      let elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);

  return (
    <Container>
      <div className="reveal active">{children}</div>
    </Container>
  );
};

export default Layout;
