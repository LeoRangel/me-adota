import styled from 'styled-components';

export const PostCard = styled.div`
  position: relative;
  height: 350px;
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
  height: 100%;
  color: var(--gray-6-const);
  background: linear-gradient(45deg, black, transparent);
  padding: var(--spacing-5);
  border-radius: var(--border-radius-2);
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  h3 {
    margin: 0;
    line-height: 1.5rem;
  }

  a {
    font-size: 1.25rem;
    color: var(--gray-6-const);
    text-decoration: none;
  }
`;

export const Category = styled.div`
  color: var(--gray-6-const);
  background: var(--primary-color);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-1);
  display: grid;
  place-items: center;
  margin-bottom: var(--spacing-4);

  a {
    font-size: 0.8rem;
    color: var(--gray-6-const);
    text-decoration: none;
  }
`;
