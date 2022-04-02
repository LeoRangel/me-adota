import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { SectionHeader, SectionBody } from '../..';
import * as S from './styles';

export function HowItWorks() {
  return (
    <S.HowItWorks>
      <SectionHeader
        title="Como funciona"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis, dignissim
        id sapien."
        isTextCenter
        hasBG={false}
      />

      <SectionBody>
        <S.ItemsList>
          <S.Item>
            <S.Icon>
              <FontAwesomeIcon icon={solid('comment-dots')} />
            </S.Icon>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
          </S.Item>

          <S.Item>
            <S.Icon>
              <FontAwesomeIcon icon={solid('calendar-days')} />
            </S.Icon>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
          </S.Item>

          <S.Item>
            <S.Icon>
              <FontAwesomeIcon icon={solid('clipboard-check')} />
            </S.Icon>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
          </S.Item>

          <S.Item>
            <S.Icon>
              <FontAwesomeIcon icon={solid('house-chimney')} />
            </S.Icon>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum.</p>
          </S.Item>
        </S.ItemsList>
      </SectionBody>
    </S.HowItWorks>
  );
}
