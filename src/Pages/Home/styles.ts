import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  h1 {
    color: var(--text-body);
    font-weight: 400;
    font-size: 5em;
  }
  h2 {
    color: #555;
    font-weight: 400;
    font-size: 3em;
  }

  p {
    color: #666;
    font-size: 1.3em;
  }
`;
