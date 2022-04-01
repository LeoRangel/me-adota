import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import * as S from './styles';

type PetCardProps = {
  name: string;
  gender: string;
  age: number;
  local: string;
  img: string;
  imgAlt: string;
};

export function PetCard({ name, gender, age, local, img, imgAlt }: PetCardProps) {
  return (
    <S.PetCard>
      <S.CardHeader>
        <img src={img} alt={imgAlt} />
      </S.CardHeader>

      <S.CardBody>
        <h3>{name}</h3>
        <p>
          {gender} / {age} anos
        </p>
        <small>{local}</small>

        <S.LikePet>
          <FontAwesomeIcon icon={regular('heart')} />
        </S.LikePet>
      </S.CardBody>
    </S.PetCard>
  );
}
