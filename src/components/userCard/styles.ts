import styled from "styled-components";

export const StyledCard = styled.li`
  width: 15rem;
  transition: 1s;
  height: 12rem;
  background: rgb(var(--color-cards));
  border-radius: 0.5rem;
  color: rgb(var(--grey-4));
  display: flex;
  transform: scale(0.9);
  cursor: pointer;

  .app__card--info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    background: rgb(var(--grey-4));
    color: rgb(var(--color-cards));
    font-size: 1rem;
    font-weight: 100;
    width: 0;
    transition: 1s;
    border-radius: 0.5rem 0 0 0.5rem;
    padding-left: 0.3rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  .app__card--data {
    padding: 1rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;

    h5 {
      font-weight: 400;
      letter-spacing: 0.1rem;
      font-size: 1rem;
    }

    h6 {
      font-weight: 800;
      font-size: 1rem;
      word-wrap: break-word;
    }

    #user {
      display: flex;
      align-items: center;
      width: fit-content;
      transition: 1s;
      position: absolute;
      right: 0.3rem;
      bottom: 0.3rem;
    }

    #touch {
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
    }
  }

  &:hover {
    width: 21rem;
    box-shadow: 0 0 15px 0 rgb(var(--grey-4));
    .app__card--info {
      width: 6rem;
    }
  }

  @media screen AND (min-width: 375px) {
    transform: scale(1);
  }
`;
