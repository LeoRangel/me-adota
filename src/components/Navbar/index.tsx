import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Wrapper, Button, ToggleThemeButton } from '..';
import { Theme } from '../../types';
import * as S from './styles';
import logoImg from '../../assets/images/logo.png';

type NavbarProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <S.Navbar>
      <Wrapper>
        <img src={logoImg} width="120px" height="auto" alt="MeAdota logo" />

        <S.MenuOptions>
          <ul className="hidden-when-lg">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Adotar">Adotar</Link>
            </li>
            <li>
              <Link to="/Ajudar">Ajudar</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contatos">Contatos</Link>
            </li>
          </ul>

          <ToggleThemeButton theme={theme} onClick={toggleTheme} />

          <S.OpenNavbarButton title="Abrir menu lateral" className="display-when-lg">
            <FontAwesomeIcon icon={solid('bars')} />
          </S.OpenNavbarButton>

          <S.LoginButtons className="hidden-when-md">
            <Button isOutlined isWhite>
              Entre
            </Button>
            <Button isOutlined={false} isWhite={false}>
              Cadastre-se
            </Button>
          </S.LoginButtons>
        </S.MenuOptions>
      </Wrapper>
    </S.Navbar>
  );
}
