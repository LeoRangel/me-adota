import styled from 'styled-components';

export const NewslaterForm = styled.form`
  width: 100%;
  display: flex;

  label {
    width: 100%;
  }

  fieldset {
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
  }

  button {
    height: 45px;
    padding: var(--spacing-3) var(--spacing-5);
    border-radius: 0 var(--border-radius-1) var(--border-radius-1) 0;
    background-color: transparent;
    border-color: var(--gray-4-const);
    border-left: none;
    position: relative;

    svg {
      color: var(--gray-5-const);
      font-size: 1.25rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  font-size: 1rem;
  padding: var(--spacing-3) var(--spacing-4);
  background-color: var(--gray-6);
  color: var(--gray-2);
  border: 1px solid var(--gray-4-const);
  border-radius: var(--border-radius-1) 0 0 var(--border-radius-1);

  :focus {
    border-color: var(--gray-4-const);
    outline: 0;
  }
`;
