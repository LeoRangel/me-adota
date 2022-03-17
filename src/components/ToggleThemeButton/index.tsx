import { ButtonHTMLAttributes } from 'react';
import { Theme } from '../../types';
import * as S from './styles';

type ToggleThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: Theme;
};

export function ToggleThemeButton({ theme, ...props }: ToggleThemeButtonProps) {
  return (
    <S.ToggleThemeButton theme={theme} {...props}>
      <span />
    </S.ToggleThemeButton>
  );
}
