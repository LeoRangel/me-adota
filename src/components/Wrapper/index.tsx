import { ReactNode } from 'react';
import * as S from './styles';

type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
