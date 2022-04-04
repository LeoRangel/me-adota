import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: var(--gray-1-const);
  color: var(--gray-5-const);
  padding-top: var(--spacing-9);
  border-top: 0.5px solid var(--gray-3);

  h2 {
    margin-bottom: var(--spacing-4);
  }

  p {
    color: var(--gray-4-const);
  }

  a {
    color: var(--gray-4-const);
    text-decoration: none;

    :hover {
      text-decoration: underline;
      color: var(--gray-6-const);
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--spacing-8);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 300px;

  :last-child {
    max-width: 265px !important;
  }

  h2 {
    font-size: 1.25rem;
    color: var(--gray-6-const);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
`;

export const Address = styled.address`
  li {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
  }

  svg {
    color: var(--gray-6-const);
    font-size: 1.15rem;
  }
`;

export const SocialNetworks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row !important;
  justify-content: space-evenly;
  // gap: var(--spacing-4);
  // margin: var(--spacing-5) auto auto auto;
  border-top: var(--gray-3-const) 1px solid;
  padding-top: var(--spacing-5);
  margin-top: var(--spacing-6);
`;

export const SocialLink = styled.a`
  width: 2.75rem;
  height: 2.75rem;
  background-color: var(--primary-color);
  border-radius: 50%;
  position: relative;
  display: flex;

  svg {
    color: var(--gray-6-const);
    font-size: 1.25rem;
    position: absolute;
    text-shadow: var(--shadow-1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Copy = styled.div`
  width: 100%;
  height: fit-content;
  color: var(--gray-4-const);
  background-color: var(--bg-black-opacity-50);
  padding: var(--spacing-5) 0 !important;
  margin-top: var(--spacing-9);

  small,
  a {
    color: var(--gray-4-const);
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--spacing-8);
  }
`;
