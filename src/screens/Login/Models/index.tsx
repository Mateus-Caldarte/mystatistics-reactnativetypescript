import { useRouter } from "expo-router";
import { AnyAction, Dispatch } from "redux";

export interface LoginProps {}

export type LoginViewProps = {
  route: ReturnType<typeof useRouter>;
  dispatch: Dispatch<AnyAction>;
  handleLogin: () => Promise<void>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  senha: string;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
};
