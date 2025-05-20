import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { fetchTotalizadoresThunk } from "../../../redux/thunks";
import { MyStatisticsProps } from "./Models";
import MyStatisticsView from "./view";

const decodeTema = (tema: string) =>
  decodeURIComponent(tema.replace(/\+/g, "%20"));

const MyStatistics: React.FC<MyStatisticsProps> = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector(
    (state: RootState) => state.totalizadores
  );

  const [accuracyRate, setAccuracyRate] = useState(0);
  const [temaMaisDominado, setTemaMaisDominado] = useState("");
  const [temaMenosDominado, setTemaMenosDominado] = useState("");

  useEffect(() => {
    (async () => {
      const result = await dispatch<any>(fetchTotalizadoresThunk());
      if (!result.success) {
        Alert.alert("Erro", "Não foi possível carregar os totalizadores");
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setAccuracyRate(
        data.qtdRespondidas > 0
          ? Math.round((data.qtdAcertos / data.qtdRespondidas) * 100)
          : 0
      );
      setTemaMaisDominado(decodeTema(data.temaDominado.nome));
      setTemaMenosDominado(decodeTema(data.temaMenosDominado.nome));
    }
  }, [data]);

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
    <MyStatisticsView
      isLoading={isLoading}
      isError={isError}
      accuracyRate={accuracyRate}
      temaMaisDominado={temaMaisDominado}
      temaMenosDominado={temaMenosDominado}
      qtdRespondidas={data?.qtdRespondidas ?? 0}
      qtdAcertos={data?.qtdAcertos ?? 0}
    />
  );
};

export default MyStatistics;
