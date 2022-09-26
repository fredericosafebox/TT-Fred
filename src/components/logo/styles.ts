import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: rgb(var(--grey-1));
  transition: 1s;
  text-align: center;
  padding: 0.5rem 0;
  span {
    color: rgb(var(--color-primary));
  }

  @media screen AND (max-width: 768px) {
    width: 100%;
  }
`;
