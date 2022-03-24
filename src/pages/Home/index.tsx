import { Footer, PageHeader, Wrapper } from '../../components';
import useApp from '../../hooks/useApp';
import * as S from './styles';

export function Home() {
  const { theme, toggleTheme } = useApp();

  return (
    <>
      <PageHeader theme={theme} toggleTheme={toggleTheme} />
      <S.MainContent>
        <Wrapper>
          <h1>Home page</h1>
        </Wrapper>
      </S.MainContent>
      <Footer />
    </>
  );
}
