import { useRouter } from "expo-router";

export interface MyStatisticsScreenProps {}

export type MyStatisticsScreenViewProps = {
  tabs: {
    label: string;
    content: React.JSX.Element;
  }[];
  route: ReturnType<typeof useRouter>;
};
