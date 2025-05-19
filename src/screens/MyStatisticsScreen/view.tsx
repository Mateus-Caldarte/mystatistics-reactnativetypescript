import GoBack from "@/src/atomic/atoms/GoBack";
import Tab from "@/src/atomic/molecules/Tab";
import React from "react";
import { View } from "react-native";
import { MyStatisticsScreenViewProps } from "./Models";

const MyStatisticsScreenView: React.FC<MyStatisticsScreenViewProps> = ({
  tabs,
  route,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 70,
      }}
    >
      <GoBack
        showIcon={false}
        text="Minhas estatísticas"
        onPress={() => route.back()}
      />
      <View style={{ marginTop: 30 }}>
        <Tab tabs={tabs} />
      </View>
    </View>
  );
};

export default MyStatisticsScreenView;
