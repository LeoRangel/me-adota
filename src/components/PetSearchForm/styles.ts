import styled from 'styled-components';

export const PetSearchForm = styled.form`
  width: 100%;
  // padding: var(--spacing-5);
  // background-color: var(--gray-6);
  // border-radius: var(--border-radius-1);
  display: flex;
  margin-bottom: var(--spacing-6);

  fieldset {
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-4);

    label {
      width: 100%;
    }
    label.localLabel {
      flex: 1;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 0;

      label {
        width: fit-content;
      }
    }
  }

  button {
    width: 100%;
    height: 45px;
    padding: var(--spacing-3) var(--spacing-5);
    border-radius: var(--border-radius-1);

    @media (min-width: 768px) {
      width: fit-content;
      border-radius: 0 var(--border-radius-1) var(--border-radius-1) 0;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-3-const);
  height: 45px;
  border-radius: var(--border-radius-1);

  :focus {
    border-color: var(--gray-3-const);
    outline: 0;
  }

  @media (min-width: 768px) {
    border-radius: var(--border-radius-1) 0 0 var(--border-radius-1);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 45px;
  font-size: 1rem;
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-3-const);
  border-radius: var(--border-radius-1);
  display: inline-block;
  padding-right: var(--spacing-8) !important;

  // reset
  -webkit-appearance: none;
  -moz-appearance: none;

  // Arrow
  background-image: linear-gradient(45deg, transparent 50%, var(--gray-3-const) 50%),
    linear-gradient(135deg, var(--gray-3-const) 50%, transparent 50%),
    linear-gradient(to right, var(--gray-3-const), var(--gray-3-const));
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;

  :focus {
    background-image: linear-gradient(45deg, var(--gray-3-const) 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, var(--gray-3-const) 50%),
      linear-gradient(to right, var(--gray-3-const), var(--gray-3-const));
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: var(--gray-3-const);
    outline: 0;
  }

  @media (min-width: 768px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;
