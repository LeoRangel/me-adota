import { SectionHeader, SectionBody } from '../..';
import * as S from './styles';

export function OurWork() {
  return (
    <S.OurWork>
      <SectionHeader
        title="Nosso trabalho"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis, dignissim
        id sapien."
        isTextCenter
        hasBG={false}
      />

      <SectionBody>
        <S.ItemsList>
          <S.Item>
            <S.ItemHeader>
              <h3>5</h3>
            </S.ItemHeader>
            <S.ItemBody>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
            </S.ItemBody>
          </S.Item>

          <S.Item>
            <S.ItemHeader>
              <h3>100+</h3>
            </S.ItemHeader>
            <S.ItemBody>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
            </S.ItemBody>
          </S.Item>

          <S.Item>
            <S.ItemHeader>
              <h3>25</h3>
            </S.ItemHeader>
            <S.ItemBody>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
            </S.ItemBody>
          </S.Item>

          <S.Item>
            <S.ItemHeader>
              <h3>700+</h3>
            </S.ItemHeader>
            <S.ItemBody>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
            </S.ItemBody>
          </S.Item>
        </S.ItemsList>
      </SectionBody>
    </S.OurWork>
  );
}
