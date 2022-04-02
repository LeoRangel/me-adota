import styled from 'styled-components';

export const Support = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardsList = styled.div`
  display: grid;
  gap: var(--spacing-4);
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  height: 250px;
  border-radius: var(--border-radius-2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-2);
  }
`;

export const CardBody = styled.div`
  width: 100%;
  color: var(--gray-6-const);
  background: var(--bg-black-opacity-50);
  padding: var(--spacing-5);
  border-radius: 0 0 var(--border-radius-2) var(--border-radius-2);
  position: absolute;
  bottom: 0;
  display: grid;
  place-items: center;

  a {
    font-size: 1.25rem;
    color: var(--gray-6-const);
    text-decoration: none;
  }
`;
