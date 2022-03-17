import { Wrapper } from '..';
import { Theme } from '../../types';
import { ToggleThemeButton } from '../ToggleThemeButton';
import * as S from './styles';

type PageHeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export function PageHeader({ theme, toggleTheme }: PageHeaderProps) {
  return (
    <S.PageHeader>
      <S.Navbar>
        <Wrapper>
          <h1>MeAdota</h1>
          <ToggleThemeButton theme={theme} onClick={toggleTheme} />
        </Wrapper>
      </S.Navbar>
    </S.PageHeader>
  );
}
