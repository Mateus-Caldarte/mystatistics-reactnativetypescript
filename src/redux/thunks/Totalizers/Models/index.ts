export interface TemaDominado {
  id: number;
  nome: string;
  nomeHierarquia: string;
  qtdQuestoes: number;
  qtdTotaisQuestoes: number;
  ativo: boolean;
  temResumo: boolean;
  qtdCartas: number;
  qtdTotaisCartas: number;
  qtdCartasCasosClinicos: number;
  qtdTotaisCartasCasosClinicos: number;
  resumo: string;
  listaDeImagem: any[];
  icone: {
    id: number;
    nomeArquivo: string;
    largura: number;
    altura: number;
  };
  descendentes: any[];
  descendencia: any[];
  cardsDominados: number;
  qtdQuestoesProvaDeTitulo: number;
  qtdQuestoesOutrosCursos: number;
}

export interface TotalizadoresData {
  id: number;
  qtdRespondidas: number;
  qtdAcertos: number;
  qtdErros: number;
  qtdSimuladosFeitos: number;
  diasSemFaltar: number;
  qtdFlashcardsRespondidos: number;
  qtdAcertosFlashcards: number;
  qtdErrosFlashcards: number;
  qtdFlashcardsCasosClinicosRespondidos: number;
  qtdAcertosFlashcardsCadosClinicos: number;
  qtdErrosFlashcardsCadosClinicos: number;
  questoesFavoritadas: number[];
  temaDominado: TemaDominado;
  temaMenosDominado: TemaDominado;
}
