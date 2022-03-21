import styled from 'styled-components';
import headerImg from '../../assets/images/header-img.jpg';

export const PageHeader = styled.header`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${headerImg}');
  background-size: cover;
  background-position: right;
  text-shadow: var(--shadow-1);
  display: flex;
  flex-direction: column;
`;

export const Jumbotron = styled.div`
  flex: 1;
  color: var(--gray-6);
  display: flex;

  p {
    color: var(--gray-5);
    margin-bottom: var(--spacing-6);
  }

  a {
    color: var(--gray-5);
  }

  & > div {
    div {
      max-width: 525px;
      margin-top: var(--spacing-6);
      margin-bottom: var(--spacing-9);
    }
  }
`;
