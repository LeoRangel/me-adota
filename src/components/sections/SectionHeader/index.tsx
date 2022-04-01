import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { Link } from 'react-router-dom';
import * as S from './styles';
import { Wrapper } from '../..';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  background: boolean;
  buttonText: string;
  buttonLink: string;
};

export function SectionHeader({ title, subtitle, background, buttonText, buttonLink }: SectionHeaderProps) {
  return (
    <S.Header background={background}>
      <Wrapper>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <Link to={buttonLink}>
          {buttonText} <FontAwesomeIcon icon={solid('arrow-right')} />
        </Link>
      </Wrapper>
    </S.Header>
  );
}
