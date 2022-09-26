import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  background: rgb(var(--grey-5));
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 20rem;
    transition: 1s;
    gap: 2rem;
    color: rgb(var(--grey-1));

    .app__form--header {
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(var(--color-prim-hover));

      h3 {
        font-size: 1.5rem;
        transition: 1s;
      }
    }

    .app__form--fields {
      transition: 1s;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .app__form--fieldbox {
        transition: 1s;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        .errorRegister {
          display: flex;
          font-size: 0.8rem;
          align-self: baseline;
          align-items: center;
          padding-left: 12px;
          margin-bottom: 5px;
          color: red;
          gap: 5px;
        }

        input {
          transition: 0.5s;
          padding: 0 1rem;
          outline: none;
          height: 3rem;
          border-radius: 0.25rem;
          background: none;
          border: 2px solid rgb(var(--color-primary));
          color: rgb(var(--color-primary));
          font-size: 1rem;

          &:focus {
            box-shadow: 0 0 8px 0 rgb(var(--color-prim-hover));
          }
        }

        select {
          padding: 0 1rem;
          transition: 0.5s;
          height: 3rem;
          background: none;
          border: 2px solid rgb(var(--color-primary));
          border-radius: 0.25rem;
          color: rgb(var(--color-primary));
          font-size: 1rem;
          outline: none;
          &:focus {
            box-shadow: 0 0 8px 0 rgb(var(--color-prim-hover));
          }
        }
      }
    }

    .app__form--submit {
      button {
        width: 100%;
        transition: 1s;
      }
    }
  }
`;
