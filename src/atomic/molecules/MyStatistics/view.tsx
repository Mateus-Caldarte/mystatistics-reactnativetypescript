import React from "react";
import { Text, View } from "react-native";
import { MyStatisticsViewProps } from "./Models";

const MyStatisticsView: React.FC<MyStatisticsViewProps> = ({
  accuracyRate,
  temaMaisDominado,
  temaMenosDominado,
  qtdRespondidas,
  qtdAcertos,
}) => {
  return (
    <View style={{ padding: 16, borderRadius: 8 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text>Total de questões respondidas</Text>
        <Text style={{ fontWeight: "bold" }}>{qtdRespondidas}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text>Questões corretas</Text>
        <Text style={{ fontWeight: "bold" }}>{qtdAcertos}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text>Média de acertos</Text>
        <Text style={{ fontWeight: "bold" }}>{accuracyRate}%</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text>Tema mais dominado</Text>
        <Text style={{ fontWeight: "bold" }}>{temaMaisDominado}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Tema menos dominado</Text>
        <Text style={{ fontWeight: "bold" }}>{temaMenosDominado}</Text>
      </View>
    </View>
  );
};

export default MyStatisticsView;
