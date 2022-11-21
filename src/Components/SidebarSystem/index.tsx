import React from "react";
import { Link } from "react-router-dom";

import * as C from "./styles";

const SidebarSystem: React.FC = () => {
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
        </ul>
      </nav>
    </C.Container>
  );
};

export default SidebarSystem;
