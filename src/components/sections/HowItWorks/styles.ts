import styled from 'styled-components';

export const HowItWorks = styled.section`
  background-color: var(--gray-5);
`;

export const ItemsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8);
`;

export const Item = styled.section`
  background-color: var(--gray-5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 200px;

  h3 {
    font-size: 1.25rem;
  }

  p {
    color: var(--gray-2);
  }
`;

export const Icon = styled.section`
  width: 75px;
  height: 75px;
  background-color: var(--primary-color-l);
  border-radius: 50%;
  position: relative;
  margin-bottom: var(--spacing-4);

  svg {
    color: var(--primary-color);
    font-size: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
