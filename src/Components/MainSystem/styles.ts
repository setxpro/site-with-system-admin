import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  background: var(--body);
  padding: 0 10px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
