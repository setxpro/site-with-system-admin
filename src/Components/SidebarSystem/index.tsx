import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

import * as C from "./styles";

const SidebarSystem: React.FC = () => {

  const { signOut } = useContext(AuthContext);

  return (
    <C.Container>
      <div className="logo-area">SUA LOGO</div>
      <nav>
        <ul>
          <Link to="">
            <li>Produtos</li>
          </Link>

          <Link to="">
            <li>Clientes</li>
          </Link>

          <Link to="">
            <li>Mensagens</li>
          </Link>

          <Link to="">
            <li>Pedidos</li>
          </Link>
          <Link to="" onClick={signOut}>
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    </C.Container>
  );
};

export default SidebarSystem;
