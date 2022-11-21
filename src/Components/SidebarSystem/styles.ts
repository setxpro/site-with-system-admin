import styled from "styled-components";

export const Container = styled.div`
  background: var(--sidebar);
  height: 100vh;
  width: 200px;

  .logo-area {
    width: 100%;
    height: 50px;
    background: hotpink;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }

  nav {
    ul {
      a {
        text-decoration: none;
        color: var(--text-header);
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        li {
          list-style: none;
          padding: 0.5rem 1rem;

          &:hover {
            background: #0404;
          }
        }
      }
    }
  }
`;
