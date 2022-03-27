import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '..';
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
          <FontAwesomeIcon icon={solid('arrow-right')} />
        </Button>
      </fieldset>
    </S.NewslaterForm>
  );
}
