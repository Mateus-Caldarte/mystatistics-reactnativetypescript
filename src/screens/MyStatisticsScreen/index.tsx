import ProgressTracking from "@/src/atomic/templates/ProgressTracking";
import { useRouter } from "expo-router";
import React from "react";
import MyStatistics from "../../atomic/molecules/MyStatistics";
import { MyStatisticsScreenProps } from "./Models";
import MyStatisticsScreenView from "./view";

const MyStatisticsScreen = ({}: MyStatisticsScreenProps) => {
  const route = useRouter();

  const tabs = [
    {
      label: "Visão geral",
      content: <MyStatistics />,
    },
    {
      label: "Por tema",
      content: <ProgressTracking />,
    },
  ];
  return (
    <>
      <MyStatisticsScreenView tabs={tabs} route={route} />
    </>
  );
};

export default MyStatisticsScreen;
