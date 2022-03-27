import { Theme } from '../../types';
import { Navbar, Wrapper } from '..';
import * as S from './styles';
import { PetSearchForm } from '../PetSearchForm';

type PageHeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export function PageHeader({ theme, toggleTheme }: PageHeaderProps) {
  return (
    <S.PageHeader>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <S.Jumbotron>
        <Wrapper>
          <div>
            <h1>Encontre o seu novo melhor amigo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis,
              dignissim id sapien.
            </p>
            <PetSearchForm />
            <a href="/">Quer fazer uma busca avançada? Clique aqui</a>
          </div>
        </Wrapper>
      </S.Jumbotron>
    </S.PageHeader>
  );
}
