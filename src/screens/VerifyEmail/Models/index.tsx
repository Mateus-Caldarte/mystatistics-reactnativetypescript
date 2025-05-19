import { useRouter } from "expo-router";

export interface VerifyEmailProps {}

export type VerifyEmailViewProps = {
  route: ReturnType<typeof useRouter>;
};
