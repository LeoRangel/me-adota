import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  color: var(--gray-5);
  padding: var(--spacing-6) 0;
  // border-bottom: 1px solid var(--gray-4);

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-7);
  }
`;

export const MenuOptions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-6);

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--spacing-5);
  }

  a {
    color: var(--gray-6);
    text-decoration: none;
  }
`;

export const OpenNavbarButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray-3);
  z-index: 995;

  svg {
    width: 1.5rem;
    height: auto;

    path {
      fill: var(--gray-6);
    }
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;
