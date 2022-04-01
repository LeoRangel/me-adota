import { Footer, PageHeader, PetsAvailable } from '../../components';
import useApp from '../../hooks/useApp';
import * as S from './styles';

export function Home() {
  const { theme, toggleTheme } = useApp();

  return (
    <>
      <PageHeader theme={theme} toggleTheme={toggleTheme} />

      <S.MainContent>
        <PetsAvailable />
      </S.MainContent>

      <Footer />
    </>
  );
}
