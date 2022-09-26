import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  transition: 1s;
  gap: 0.4rem;

  .app__search--bar {
    display: flex;
    gap: 0.3rem;
    input {
      transition: 0.5s;
      padding: 0 1rem;
      outline: none;
      height: 2.5rem;
      border-radius: 0.3rem;
      background: none;
      border: 2px solid rgb(var(--color-primary));
      color: rgb(var(--color-primary));
      font-size: 1rem;

      &:focus {
        box-shadow: 0 0 8px 0 rgb(var(--color-prim-hover));
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
    }
  }
  .app__filter--wrapper {
    display: flex;
    gap: 0.4rem;

    button {
      font-size: 0.8rem;
    }
  }

  .app__home--btn {
    position: relative;
    right: 1.5rem;
    top: 0rem;
  }

  button {
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
  }

  @media screen AND (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
