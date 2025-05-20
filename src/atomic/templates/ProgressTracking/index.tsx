import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { fetchTotalizadoresThunk } from "../../../redux/thunks";
import { ProgressTrackingProps } from "./Models";
import ProgressTrackingView from "./view";

const decodeTema = (tema: string) =>
  decodeURIComponent(tema.replace(/\+/g, "%20"));

const ProgressTracking = ({}: ProgressTrackingProps) => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState<string>("");

  const { isLoading, isError, data } = useSelector(
    (state: RootState) => state.totalizadores
  );

  useEffect(() => {
    (async () => {
      const result = await dispatch<any>(fetchTotalizadoresThunk());
      if (!result.success) {
        Alert.alert("Erro", "Não foi possível carregar os totalizadores");
      }
    })();
  }, [dispatch]);

  const totalizadoresArray = Array.isArray(data)
    ? data
    : data?.temaDominado && Array.isArray(data.temaDominado)
    ? data.temaDominado
    : data
    ? [data]
    : [];

  const sortedTotalizadores = [...totalizadoresArray]
    .sort((a, b) => {
      const nomeA = decodeTema(a?.temaDominado?.nome ?? "").toLowerCase();
      const nomeB = decodeTema(b?.temaDominado?.nome ?? "").toLowerCase();
      const qtdA = a.qtdRespondidas ?? 0;
      const qtdB = b.qtdRespondidas ?? 0;

      switch (sortOrder) {
        case "nome-asc":
          return nomeA.localeCompare(nomeB);
        case "nome-desc":
          return nomeB.localeCompare(nomeA);
        case "respondidas-asc":
          return qtdA - qtdB;
        case "respondidas-desc":
          return qtdB - qtdA;
        default:
          return 0;
      }
    })
    .map((item) => {
      const temaNome = item?.temaDominado?.nome
        ? decodeTema(item.temaDominado.nome)
        : "Tema Dominado não disponível";

      const qtdRespondidas = item?.qtdRespondidas ?? 0;
      const qtdAcertos = item?.qtdAcertos ?? 0;

      const totalQuestionsAnswered = `${qtdRespondidas}/${qtdRespondidas} total de questões respondidas`;
      const correctAnswers = `${qtdAcertos}/${qtdRespondidas} respostas corretas`;

      const answeredProgress =
        qtdRespondidas > 0 ? (qtdRespondidas / qtdRespondidas) * 100 : 0;
      const correctProgress =
        qtdRespondidas > 0 ? (qtdAcertos / qtdRespondidas) * 100 : 0;

      return {
        temaNome,
        totalQuestionsAnswered,
        correctAnswers,
        answeredProgress,
        correctProgress,
      };
    });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (isError) {
    return (
      <View style={{ padding: 16 }}>
        <Text style={{ color: "red" }}>Erro ao carregar dados.</Text>
      </View>
    );
  }

  return (
    <ProgressTrackingView
      isLoading={isLoading}
      isError={isError}
      sortedTotalizadores={sortedTotalizadores}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
    />
  );
};

export default ProgressTracking;
