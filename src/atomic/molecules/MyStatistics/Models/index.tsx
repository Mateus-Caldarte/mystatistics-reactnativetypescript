export interface MyStatisticsProps {}

export interface MyStatisticsViewProps {
  isLoading: boolean;
  isError: boolean;
  accuracyRate: number;
  temaMaisDominado: string;
  temaMenosDominado: string;
  qtdRespondidas: number;
  qtdAcertos: number;
}

export interface TotalizadoresData {
  qtdRespondidas: number;
  qtdAcertos: number;
  temaDominado: { nome: string };
  temaMenosDominado: { nome: string };
}
