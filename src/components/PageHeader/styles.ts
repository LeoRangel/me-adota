import styled from 'styled-components';

export const PageHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: var(--gray-5);
  border-bottom: 1px solid var(--gray-4);
  padding: var(--spacing-3);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-5);
  }
`;
