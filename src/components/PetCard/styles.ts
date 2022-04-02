import styled from 'styled-components';

export const PetCard = styled.div`
  background-color: var(--gray-6);
  border-radius: var(--border-radius-2);
  box-shadow: var(--shadow-2);
  overflow: hidden;
  position: relative;
  border: 1px solid var(--gray-5);
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 276px;
  border-radius: var(--border-radius-2) var(--border-radius-2) 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle(100% at 50% 0);
  }
`;

export const CardBody = styled.div`
  width: 100%;
  padding: var(--spacing-5);
  padding-top: var(--spacing-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0 0 var(--border-radius-2) var(--border-radius-2);
  position: relative;

  a {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

export const LikePet = styled.button`
  width: 35px;
  height: 35px;
  background-color: var(--gray-6);
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  // box-shadow: var(--shadow-2);

  svg {
    font-size: 1.35rem;
    color: var(--gray-4);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all linear 0.2s;
  }

  :hover {
    svg {
      color: var(--primary-color);
      font-size: 1.75rem;
    }
  }
`;
