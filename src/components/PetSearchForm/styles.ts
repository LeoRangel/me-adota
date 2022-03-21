import styled from 'styled-components';

export const PetSearchForm = styled.form`
  width: fit-content;
  padding: var(--spacing-5);
  background-color: var(--gray-6);
  border-radius: var(--border-radius-1);
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
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-3);
  height: 45px;
  border-radius: var(--border-radius-1) 0 0 var(--border-radius-1);

  :focus {
    border-color: var(--gray-3);
    outline: 0;
  }
`;

export const Select = styled.select`
  font-size: 1rem;
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-3);
  height: 45px;
  border-radius: 0;
  border-left: none;
  border-right: none;
  display: inline-block;
  padding-right: var(--spacing-8) !important;

  // reset
  -webkit-appearance: none;
  -moz-appearance: none;

  // Arrow
  background-image: linear-gradient(45deg, transparent 50%, var(--gray-4) 50%),
    linear-gradient(135deg, var(--gray-4) 50%, transparent 50%), linear-gradient(to right, var(--gray-4), var(--gray-4));
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;

  :focus {
    background-image: linear-gradient(45deg, var(--gray-4) 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, var(--gray-4) 50%),
      linear-gradient(to right, var(--gray-4), var(--gray-4));
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: var(--gray-3);
    outline: 0;
  }
`;
