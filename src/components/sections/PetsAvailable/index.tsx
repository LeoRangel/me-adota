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
        isTextCenter={false}
        hasBG={false}
        buttonText="Ver todos"
        buttonLink="/"
      />

      <SectionBody>
        <S.CardsList>
          <PetCard
            link="/"
            name="Aurora"
            gender="Fêmea"
            age={2}
            local="João Pessoa, PB"
            img="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            imgAlt="Foto do pet"
          />
          <PetCard
            link="/"
            name="Marley"
            gender="Macho"
            age={4}
            local="João Pessoa, PB"
            img="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            imgAlt="Foto do pet"
          />
          <PetCard
            link="/"
            name="Safira"
            gender="Fêmea"
            age={1}
            local="João Pessoa, PB"
            img="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            imgAlt="Foto do pet"
          />
          <PetCard
            link="/"
            name="Frajola"
            gender="Macho"
            age={3}
            local="Brasília, DF"
            img="https://images.unsplash.com/photo-1629551531237-b9c1bcce90f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            imgAlt="Foto do pet"
          />
        </S.CardsList>
      </SectionBody>
    </S.PetsAvailable>
  );
}
