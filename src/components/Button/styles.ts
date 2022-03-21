import styled from 'styled-components';

export const Button = styled.button<{ isOutlined: boolean; isWhite: boolean }>`
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--border-radius-1);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  font-size: 1rem;

  ${({ isOutlined, isWhite }) => {
    if (isOutlined) {
      if (isWhite) {
        return `
          color: var(--gray-6);
          border: 1px solid var(--gray-6);
          background-color: transparent;
        `;
      }
      return `
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        background-color: transparent;
      `;
    }
    return `
      background-color: var(--primary-color);
      color: white;
      border: 1px solid var(--primary-color);
    `;
  }};

  :hover {
    filter: brightness(95%);
    // box-shadow: var(--shadow-2);
  }
`;
