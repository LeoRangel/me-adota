import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { Link } from 'react-router-dom';
import * as S from './styles';
import { Wrapper } from '../..';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  isTextCenter: boolean;
  hasBG: boolean;
  buttonText?: string;
  buttonLink?: string;
};

export function SectionHeader({ title, subtitle, isTextCenter, hasBG, buttonText, buttonLink }: SectionHeaderProps) {
  return (
    <S.Header hasBG={hasBG}>
      <Wrapper>
        <S.Content isTextCenter={isTextCenter}>
          <div>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>

          {buttonText && buttonLink && (
            <Link to={buttonLink ?? '/'}>
              {buttonText} <FontAwesomeIcon icon={solid('arrow-right')} />
            </Link>
          )}
        </S.Content>
      </Wrapper>
    </S.Header>
  );
}
