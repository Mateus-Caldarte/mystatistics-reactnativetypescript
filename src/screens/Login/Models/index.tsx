import { useRouter } from "expo-router";

export interface LoginProps {}

export type LoginViewProps = {
  route: ReturnType<typeof useRouter>;
};
