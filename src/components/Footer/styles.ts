import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: var(--gray-2);
  color: var(--gray-5);
  padding-top: var(--spacing-8);

  p {
    color: var(--gray-4);
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
  max-width: 350px;

  h2 {
    font-size: 1.25rem;
    color: var(--gray-6);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }

  a {
    color: var(--gray-5);
    text-decoration: none;
  }
`;

export const Address = styled.address`
  li {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
  }

  svg {
    fill: white;
    width: 1.25rem;
    height: auto;
  }
`;

export const SocialNetworks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row !important;
  gap: var(--spacing-4);
  margin-top: var(--spacing-6);
`;

export const SocialLink = styled.a`
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-color);
  border-radius: 50%;
  position: relative;
  display: flex;

  svg {
    fill: white;
    width: 1.25rem;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Copy = styled.div`
  width: 100%;
  height: fit-content;
  color: var(--gray-4);
  background-color: var(--gray-1);
  padding: var(--spacing-5) 0 !important;
  margin-top: var(--spacing-8);

  small,
  a {
    color: var(--gray-4);
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
