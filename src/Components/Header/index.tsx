import { Link } from "react-router-dom";
import { Container } from "./styles";

type Props = {
  disappearHeader: boolean;
};

const Header = ({ disappearHeader }: Props) => {
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container disappearHeader={disappearHeader}>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={goToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={goToTop}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/product" onClick={goToTop}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={goToTop}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/sign-in" onClick={goToTop}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
