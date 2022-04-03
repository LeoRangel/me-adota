import styled from 'styled-components';

export const Header = styled.header<{ hasBG: boolean }>`
  width: 100%;
  padding-top: var(--spacing-9);
  padding-bottom: calc(var(--spacing-9) + var(--spacing-7));

  ${({ hasBG }) => {
    if (hasBG) {
      return 'background-color: var(--gray-5);';
    }
    return '';
  }};
`;

export const Content = styled.div<{ isTextCenter: boolean }>`
  display: flex;

  ${({ isTextCenter }) => {
    if (isTextCenter) {
      return `
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        a {
          margin-top: var(--spacing-5);
        }
      `;
    }
    return `
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    `;
  }};

  p {
    margin-bottom: 0;
    color: var(--gray-2);
  }

  a {
    color: var(--gray-2);
    text-decoration: none;

    :hover {
      // text-decoration: underline;
      color: var(--gray-1);
    }
  }

  & > div {
    max-width: 500px;
  }
`;
