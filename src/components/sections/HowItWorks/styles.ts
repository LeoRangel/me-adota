import styled from 'styled-components';

export const HowItWorks = styled.section`
  background-color: var(--gray-5);
`;

export const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4);
`;

export const Item = styled.div`
  max-width: 240px;
  padding: var(--spacing-4);
  background-color: var(--gray-5);
  border: 1.5px solid var(--primary-color);
  border-radius: var(--border-radius-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 1.25rem;
  }

  p {
    color: var(--gray-2);
  }
`;

export const Icon = styled.div`
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
