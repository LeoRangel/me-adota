import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { Link } from 'react-router-dom';
import * as S from './styles';
import { Gender } from '../../types';

type PetCardProps = {
  link: string;
  name: string;
  gender: Gender;
  age: number;
  local: string;
  img: string;
  imgAlt: string;
};

export function PetCard({ link, name, gender, age, local, img, imgAlt }: PetCardProps) {
  return (
    <S.PetCard>
      <S.CardHeader>
        <img src={img} alt={imgAlt} />
      </S.CardHeader>

      <S.CardBody>
        <h3>
          <Link to={link}>{name}</Link>
        </h3>
        <p>
          {gender} <span>/</span> {age} ano{age > 2 && 's'}
        </p>
        <small>{local}</small>

        <S.LikePet title="Favoritar pet">
          <FontAwesomeIcon icon={regular('heart')} />
        </S.LikePet>
      </S.CardBody>
    </S.PetCard>
  );
}
