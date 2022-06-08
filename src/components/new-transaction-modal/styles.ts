import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e7ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;

    font-size: 1rem;

    padding: 0 1.5rem;
    margin-top: 1.5rem;

    border: 0;
    border-radius: 0.25rem;

    color: #fff;
    background: var(--green);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;

  border: 1px solid #d7d7d7;

  background: ${({ isActive }) => (isActive ? '#eee' : 'transparent')};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;

    font-size: 1rem;

    margin-left: 1rem;

    color: var(--text-title);
  }
`;
