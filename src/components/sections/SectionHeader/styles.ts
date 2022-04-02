import styled from 'styled-components';

export const Header = styled.header<{ hasBG: boolean }>`
  width: 100%;
  padding-top: var(--spacing-8);
  padding-bottom: calc(var(--spacing-8) + var(--spacing-6));

  ${({ hasBG }) => {
    if (hasBG) {
      return 'background-color: var(--gray-5);';
    }
    return '';
  }};
`;

export const Content = styled.header<{ isTextCenter: boolean }>`
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
    max-width: 450px;
  }
`;
