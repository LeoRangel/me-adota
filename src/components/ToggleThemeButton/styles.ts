import styled, { css } from 'styled-components';

export const ToggleThemeButton = styled.button`
  cursor: pointer;
  width: 3.5rem;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 20px;
  background: var(--gray-4);
  position: relative;
  display: flex;
  align-items: center;
  transition: var(--bg-transition);
  padding: 0.25rem;

  span {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fff;
    border-radius: 50%;
    transition: all linear 0.3s;

    left: 0;
  }

  ${({ theme }) => css`
    ${theme === 'dark' &&
    css`
      background: var(--primary-color);
      background-size: 200% auto;

      span {
        left: calc(100% - 1.5rem);
      }

      &:not(:disabled):hover {
        background-position: right center;
      }
    `};
  `};
`;
