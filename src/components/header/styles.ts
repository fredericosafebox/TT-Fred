import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 5rem;
  max-height: 5rem;
  width: 100%;
  background: rgb(var(--grey-5));
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;

  @media screen AND (max-width: 768px) {
    min-height: 10rem;
    max-height: 10rem;
  }
`;
