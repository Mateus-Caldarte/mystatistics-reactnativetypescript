export interface TypesType {
  REQUEST: string;
  SUCESS: string;
  FAILED: string;
  CLEAR: string;
}

export const Types = {
  REQUEST: "viacep/request",
  SUCCESS: "viacep/success",
  FAILURE: "viacep/failure",
  CLEAR: "viacep/clear",
};

export interface CepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}
