import styled from 'styled-components';

export const Blog = styled.section`
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
