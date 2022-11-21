import styled from "styled-components";

export const Container = styled.div<{ disappearHeader: boolean }>`
  height: 60px;
  transition: 0.7s;
  background: ${(props) =>
    props.disappearHeader ? "var(--body)" : "transparent"};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: ${(props) =>
    props.disappearHeader ? "0px 1px 19px 1px #999" : "transparent"};

  nav {
    ul {
      display: flex;
      gap: 1rem;
      li {
        list-style: none;
        background-image: linear-gradient(
          transparent 0%,
          transparent 90%,
          hotpink 90%,
          hotpink 100%
        );

        background-repeat: no-repeat;
        background-size: 0% 100%;
        background-position-x: left;
        transition: background-size 300ms;
        :hover {
          background-size: 100% 100%;
          background-position-x: left;
        }

        a {
          color: var(--text-body);
          text-decoration: none;
          outline: none;
          font-size: 1.2em;
          font-weight: 600;
        }
      }
    }
  }
`;
