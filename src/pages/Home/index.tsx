import { PageHeader, Wrapper } from '../../components';
import useApp from '../../hooks/useApp';
import * as S from './styles';

export function Home() {
  const { theme, toggleTheme } = useApp();

  return (
    <S.MainContent>
      <PageHeader theme={theme} toggleTheme={toggleTheme} />
      <Wrapper>
        <h1>Home page</h1>
      </Wrapper>
    </S.MainContent>
  );
}
