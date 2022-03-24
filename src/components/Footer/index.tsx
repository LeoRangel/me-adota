import { Link } from 'react-router-dom';
import * as S from './styles';
import logoImg from '../../assets/images/logo.png';
import { Wrapper, NewslaterForm } from '..';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocalIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from '../../assets/icons';

export function Footer() {
  return (
    <S.Footer>
      <Wrapper>
        <S.FooterColumn>
          <h2>
            <img src={logoImg} width="120px" height="auto" alt="MeAdota logo" />
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitInter dumsed quam id ullamcorper quis egestas. Arcu
            tristique aliquam tristique diam.
          </p>

          <S.Address>
            <ul>
              <li>
                <span>{PhoneIcon()}</span>
                <a href="tel:+55###########" title="Phone" target="_blank" rel="noopener noreferrer">
                  +55 (##) # ####-####
                </a>
              </li>
              <li>
                <span>{MailIcon()}</span>
                <a href="mailto:#######@#####.com" title="E-mail" target="_blank" rel="noopener noreferrer">
                  contato@meadota.com
                </a>
              </li>
              <li>
                <span>{LocalIcon()}</span>
                <a href="/" title="Local" target="_blank" rel="noopener noreferrer">
                  Rua X, Cidade Y, Estado Z
                </a>
              </li>
            </ul>
          </S.Address>
        </S.FooterColumn>

        <S.FooterColumn>
          <h2>Menu</h2>
          <ul>
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
        </S.FooterColumn>

        <S.FooterColumn>
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
          </ul>
        </S.FooterColumn>

        <S.FooterColumn>
          <h2>Newslater</h2>

          <p>Inscreva-se para receber todas as novidades diretamente no seu e-mail</p>

          <NewslaterForm />
          <hr />

          <S.SocialNetworks>
            <li>
              <S.SocialLink href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noopener noreferrer">
                {FacebookIcon()}
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {InstagramIcon()}
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink href="https://twitter.com/" title="Twitter" target="_blank" rel="noopener noreferrer">
                {TwitterIcon()}
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink
                href="https://www.linkedin.com/in/"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                {LinkedinIcon()}
              </S.SocialLink>
            </li>
          </S.SocialNetworks>
        </S.FooterColumn>
      </Wrapper>
      <S.Copy>
        <Wrapper>
          <small>
            Copyright &copy; 2022 Me Adota | Todos os direitos reservados | <a href="/">Política de privacidade</a>
          </small>
          <small>
            Designed by <a href="https://leorangel.github.io/">Leandro Rangel</a>
          </small>
        </Wrapper>
      </S.Copy>
    </S.Footer>
  );
}
