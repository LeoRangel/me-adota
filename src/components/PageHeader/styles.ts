import styled from 'styled-components';
import headerImg from '../../assets/images/header-img.jpg';

export const PageHeader = styled.header`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to top, var(--bg-black-opacity-50), var(--bg-black-opacity-50)), url('${headerImg}');
  background-size: cover;
  background-position: right;
  text-shadow: var(--shadow-1);
  display: flex;
  flex-direction: column;
`;

export const Jumbotron = styled.div`
  flex: 1;
  color: var(--gray-6-const);
  display: flex;

  p {
    color: var(--gray-5-const);
    margin-bottom: var(--spacing-6);
  }

  a {
    text-decoration: none;
    color: var(--gray-5-const);

    :hover {
      text-decoration: underline;
      color: var(--gray-6-const);
    }
  }

  & > div {
    div {
      max-width: 600px;
      margin-top: var(--spacing-6);
      margin-bottom: var(--spacing-9);
      border-radius: var(--border-radius-2);
      padding: var(--spacing-6);
      background-color: var(--bg-black-opacity-50);
    }
  }
`;
