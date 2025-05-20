import { useRouter } from "expo-router";
import { TextInput } from "react-native";

export interface VerifyCodeProps {}

export type VerifyCodeViewProps = {
  route: ReturnType<typeof useRouter>;
  handleChange: (value: string, index: number) => void;
  code: string[];
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  inputs: React.RefObject<(TextInput | null | undefined)[]>;
  setCode: React.Dispatch<React.SetStateAction<string[]>>;
  maskedEmail: string | string[];
  loading: boolean;
  onResendCode: () => Promise<void>;
};
