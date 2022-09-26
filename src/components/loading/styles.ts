import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: rgb(var(--color-primary));
  box-shadow: 0 0 8px 1px var(--color-green2);
  border-bottom: 8px solid rgb(var(--color-primary));
  border-top: 8px solid rgb(var(--grey-5));
  border-radius: 50%;
  border-left: 1px solid none; //var(--color-grey);
  border-right: 1px solid none; //var(--color-grey);
  position: absolute;
  top: 50%;
  margin-top: -5rem;
  left: 50%;
  margin-left: -5rem;
  z-index: 100000;
`;
