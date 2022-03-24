import { Button } from '..';
import { ArrowRightIcon } from '../../assets/icons';
import * as S from './styles';

export function NewslaterForm() {
  return (
    <S.NewslaterForm action="">
      <fieldset>
        <legend className="visually-hidden">Search pet form</legend>

        <label htmlFor="email">
          <span className="visually-hidden">E-mail</span>
          <S.Input type="email" id="email" placeholder="Informe seu e-mail" />
        </label>

        <Button type="submit" isOutlined={false} isWhite={false}>
          {ArrowRightIcon()}
        </Button>
      </fieldset>
    </S.NewslaterForm>
  );
}
