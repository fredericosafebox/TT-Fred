import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;
  max-height: calc(100% - 5rem);
  padding: 1rem 0;
  transition: 1s;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: rgb(var(--grey-5));
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(var(--color-primary), 0.8);
    border-radius: 0.3rem;
  }
  @media screen AND (min-width: 375px) {
    gap: 1rem;
  }

  @media screen AND (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
  }
  @media screen AND (min-width: 1024px) {
    padding: 0.5rem;
    padding-left: 1rem;
    gap: 0.5rem;
  }
`;
