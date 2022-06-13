import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;

  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  @media (max-width: 292px) {
    flex-direction: column;

    padding: 2rem 1rem 10rem;
  }

  button {
    height: 3rem;
    font-size: 1rem;

    padding: 0 2rem;

    border: 0;
    border-radius: 0.25rem;

    color: #fff;
    background: var(--blue-light);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 376px) {
      padding: 0 1rem;
    }

    @media (max-width: 292px) {
      width: 100%;

      margin-top: 1rem;
    }
  }
`;
