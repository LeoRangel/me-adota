import styled from 'styled-components';

export const Header = styled.header<{ background: boolean }>`
  padding-top: var(--spacing-8);
  padding-bottom: calc(var(--spacing-8) + var(--spacing-6));

  ${({ background }) => {
    if (background) {
      return 'background-color: var(--gray-5);';
    }
    return '';
  }};

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

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

    > div {
      max-width: 450px;
    }
  }
`;
