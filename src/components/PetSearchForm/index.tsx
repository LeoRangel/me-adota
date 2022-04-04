import { Button } from '..';
import * as S from './styles';

export function PetSearchForm() {
  return (
    <S.PetSearchForm action="">
      <fieldset>
        <legend className="visually-hidden">Formulário de pesquisa de pets</legend>

        <label htmlFor="local" className="localLabel">
          <span className="visually-hidden">Localização</span>
          <S.Input type="search" id="local" placeholder="Informe a localização" />
        </label>

        <label htmlFor="species">
          <span className="visually-hidden">Espécie</span>
          <S.Select id="species" name="species">
            <option value="">Espécie</option>
            <option value="gatos">Gatos</option>
            <option value="cachorros">Cachorros</option>
            <option value="roedores">Roedores</option>
            <option value="repteis">Répteis</option>
          </S.Select>
        </label>

        <Button type="submit" isOutlined={false} isWhite={false}>
          Buscar
        </Button>
      </fieldset>
    </S.PetSearchForm>
  );
}
