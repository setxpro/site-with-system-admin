import styled from "styled-components";

export const Container = styled.div`
  height: 105vh;
  background: var(--section);
  margin-bottom: 1rem;

  &:nth-child(1) {
    background: transparent;
  }
  .reveal {
    position: relative;
    transform: translateY(144px);
    opacity: 0;
    transition: 1s all ease;
  }
  .active {
    transform: translateY(0);
    opacity: 1;
  }
  :target {
    scroll-margin-top: 75px;
  }
`;
