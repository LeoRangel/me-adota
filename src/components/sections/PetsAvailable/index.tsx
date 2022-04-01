// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import * as S from './styles';
import { SectionHeader, SectionBody, PetCard } from '../..';

export function PetsAvailable() {
  return (
    <S.PetsAvailable>
      <SectionHeader
        title="Procurando um lar"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis, dignissim
        id sapien."
        background
        buttonText="Ver todos"
        buttonLink="/"
      />

      <SectionBody>
        <S.CardsList>
          <PetCard
            name="Cachorro"
            gender="Macho"
            age={2}
            local="João Pessoa, PB"
            img="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            imgAlt="Foto do pet"
          />
          <PetCard
            name="Cachorro"
            gender="Macho"
            age={2}
            local="João Pessoa, PB"
            img="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            imgAlt="Foto do pet"
          />
          <PetCard
            name="Cachorro"
            gender="Macho"
            age={2}
            local="João Pessoa, PB"
            img="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            imgAlt="Foto do pet"
          />
          <PetCard
            name="Cachorro"
            gender="Macho"
            age={2}
            local="João Pessoa, PB"
            img="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            imgAlt="Foto do pet"
          />
        </S.CardsList>
      </SectionBody>
    </S.PetsAvailable>
  );
}
