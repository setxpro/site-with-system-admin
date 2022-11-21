import MainSystem from "../../../Components/MainSystem";
import SidebarSystem from "../../../Components/SidebarSystem";

import * as C from "./styles";

const Private = () => {
  return (
    <C.Container>
      <SidebarSystem />
      <MainSystem />
    </C.Container>
  );
};

export default Private;
