import { Splide, SplideSlide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';

import * as S from './styles';
import { SectionHeader, SectionBody, PetCard } from '../..';

// Default theme

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
        <Splide
          options={{
            rewind: false,
            type: 'slide',
            gap: 'var(--spacing-3)',
            perPage: 4,
            breakpoints: {
              768: {
                perPage: 2,
              },
              480: {
                perPage: 1,
              },
            },
            perMove: 1,
            classes: {
              // Add classes for arrows.
              arrows: 'splide__arrows your-class-arrows',
              arrow: 'splide__arrow my-slide-btn',
              prev: 'splide__arrow--prev my-slide-prev-btn',
              next: 'splide__arrow--next my-slide-next-btn',

              // Add classes for pagination.
              pagination: 'splide__pagination your-class-pagination', // container
              page: 'splide__pagination__page your-class-page', // each button
            },
          }}
          aria-label="React Splide Example"
        >
          <SplideSlide>
            <PetCard
              link="/"
              name="Aurora"
              gender="Fêmea"
              age={2}
              local="João Pessoa, PB"
              img="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>

          <SplideSlide>
            <PetCard
              link="/"
              name="Marley"
              gender="Macho"
              age={4}
              local="João Pessoa, PB"
              img="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>

          <SplideSlide>
            <PetCard
              link="/"
              name="Safira"
              gender="Fêmea"
              age={1}
              local="João Pessoa, PB"
              img="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>

          <SplideSlide>
            <PetCard
              link="/"
              name="Frajola"
              gender="Macho"
              age={3}
              local="Brasília, DF"
              img="https://images.unsplash.com/photo-1629551531237-b9c1bcce90f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>

          <SplideSlide>
            <PetCard
              link="/"
              name="Aurora"
              gender="Fêmea"
              age={2}
              local="João Pessoa, PB"
              img="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>

          <SplideSlide>
            <PetCard
              link="/"
              name="Marley"
              gender="Macho"
              age={4}
              local="João Pessoa, PB"
              img="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>

          <SplideSlide>
            <PetCard
              link="/"
              name="Safira"
              gender="Fêmea"
              age={1}
              local="João Pessoa, PB"
              img="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>

          <SplideSlide>
            <PetCard
              link="/"
              name="Frajola"
              gender="Macho"
              age={3}
              local="Brasília, DF"
              img="https://images.unsplash.com/photo-1629551531237-b9c1bcce90f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              imgAlt="Foto do pet"
            />
          </SplideSlide>
        </Splide>
      </SectionBody>
    </S.PetsAvailable>
  );
}
