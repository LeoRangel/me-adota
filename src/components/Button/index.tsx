import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined: boolean;
  isWhite: boolean;
  children: ReactNode;
};

export function Button({ isOutlined, isWhite, children, ...props }: ButtonProps) {
  return (
    <S.Button isOutlined={isOutlined} isWhite={isWhite} {...props}>
      {children}
    </S.Button>
  );
}
