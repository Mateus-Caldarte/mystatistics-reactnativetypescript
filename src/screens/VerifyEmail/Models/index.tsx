import { useRouter } from "expo-router";

export interface VerifyEmailProps {}

export type VerifyEmailViewProps = {
  route: ReturnType<typeof useRouter>;
  handleSendCode: () => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};
