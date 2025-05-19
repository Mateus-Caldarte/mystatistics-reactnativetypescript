import { Dispatch } from "redux";
import { Creators } from "../../ducks";
import { CepData } from "../../ducks/Models";

export const fetchCep = (cep: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(Creators.request(cep));

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error("Erro na requisição ViaCEP");

      const data: CepData & { erro?: boolean } = await response.json();

      if (data.erro) {
        throw new Error("CEP não encontrado");
      }

      dispatch(Creators.success(data));
    } catch (error) {
      dispatch(Creators.failure());
    }
  };
};
