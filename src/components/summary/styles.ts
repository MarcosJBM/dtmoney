import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;

  overflow-x: auto;

  div {
    padding: 1.5rem 2rem;

    border-radius: 0.25rem;

    color: var(--text-title);
    background: var(--shape);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;

      font-size: 2rem;
      font-weight: 500;

      line-height: 3rem;

      margin-top: 1rem;
    }

    &.highlight-background {
      color: #fff;
      background: var(--green);
    }
  }
`;
