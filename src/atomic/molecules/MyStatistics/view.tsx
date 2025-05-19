import React from "react";
import { Text, View } from "react-native";

interface MyStatisticsViewProps {}

const MyStatisticsView: React.FC<MyStatisticsViewProps> = ({}) => {
  return (
    <View style={{ padding: 16, borderRadius: 8 }}>
      <View
        style={{
          borderBottomWidth: 1.5,
          borderBottomColor: "#E3E8EF",
          paddingBottom: 8,
          marginBottom: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#000" }}>Total de questões respondidas</Text>
          <Text style={{ color: "#000", fontWeight: "bold" }}>370</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1.5,
          borderBottomColor: "#E3E8EF",
          paddingBottom: 8,
          marginBottom: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#000" }}>Questões corretas</Text>
          <Text style={{ color: "#000", fontWeight: "bold" }}>289</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1.5,
          borderBottomColor: "#E3E8EF",
          paddingBottom: 8,
          marginBottom: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#000" }}>Média de acertos</Text>
          <Text style={{ color: "#000", fontWeight: "bold" }}>78%</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1.5,
          borderBottomColor: "#E3E8EF",
          paddingBottom: 8,
          marginBottom: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#000" }}>Tema mais dominado</Text>
          <Text style={{ color: "#000", fontWeight: "bold" }}>
            Infectologia
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#000" }}>Tema menos dominado</Text>
        <Text style={{ color: "#000", fontWeight: "bold" }}>Neurologia</Text>
      </View>
    </View>
  );
};

export default MyStatisticsView;
