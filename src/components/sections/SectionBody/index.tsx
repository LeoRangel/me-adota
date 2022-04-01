import { ReactNode } from 'react';
import * as S from './styles';
import { Wrapper } from '../..';

type SectionBodyProps = {
  children: ReactNode;
};

export function SectionBody({ children }: SectionBodyProps) {
  return (
    <S.SectionBody>
      <Wrapper>{children}</Wrapper>
    </S.SectionBody>
  );
}
