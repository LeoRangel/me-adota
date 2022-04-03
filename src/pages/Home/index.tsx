import { Footer, PageHeader, PetsAvailable, HowItWorks, Support, OurWork, Blog } from '../../components';
import useApp from '../../hooks/useApp';
import * as S from './styles';

export function Home() {
  const { theme, toggleTheme } = useApp();

  return (
    <>
      <PageHeader theme={theme} toggleTheme={toggleTheme} />

      <S.MainContent>
        <PetsAvailable />
        <HowItWorks />
        <Support />
        <OurWork />
        <Blog />
      </S.MainContent>

      <Footer />
    </>
  );
}
