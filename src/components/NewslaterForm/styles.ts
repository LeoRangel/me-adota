import styled from 'styled-components';

export const NewslaterForm = styled.form`
  width: fit-content;
  display: flex;
  margin-bottom: var(--spacing-6);

  fieldset {
    border: none;
    display: flex;
    align-items: center;
  }

  button {
    height: 45px;
    padding: var(--spacing-3) var(--spacing-5);
    border-radius: 0 var(--border-radius-1) var(--border-radius-1) 0;
    background-color: var(--gray-1);
    border-color: var(--gray-1);
    position: relative;

    svg {
      fill: var(--gray-4);
      width: 1.25rem;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-3);
  height: 45px;
  border-radius: var(--border-radius-1) 0 0 var(--border-radius-1);
  background-color: var(--gray-5);
  color: var(--gray-1);

  :focus {
    border-color: var(--gray-3);
    outline: 0;
  }
`;
