import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 40px);
  padding: 0 10px;

  @media (min-width: 640px) {
    overflow-y: scroll;
  }
  @media (min-width: 428px) {
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const AreaCards = styled.div`
  width: inherit;
  height: inherit;
  max-height: calc(100vh - 40px);
  gap: 1rem;

  .grid-area {
    display: flex;
    margin: auto;
    flex-wrap: wrap;

    img {
      cursor: pointer;
      /* &:hover {
        transform: scale(1.5);
      } */
    }

    .image {
      flex-basis: 100%;
      display: block;
      width: 300px;
      padding: 10px;
      box-sizing: border-box;

      @media (min-width: 640px) {
        flex-basis: 50%;
      }
      @media (min-width: 960px) {
        flex-basis: 33.333%;
      }
      @media (min-width: 1280px) {
        flex-basis: 25%;
      }
    }
  }
`;
