import { token } from "@/src/functions/tokenGeneration";
import { loginThunk } from "@/src/redux/thunks";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { LoginProps } from "./Models";
import LoginView from "./view";

const Login = ({}: LoginProps) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    const payload = {
      login: email,
      senha: senha,
      tokenAcesso: token,
    };

    try {
      const result = await dispatch<any>(loginThunk(payload));

      if (result?.success && result?.data?.error) {
        let mensagemErro = "Erro desconhecido";
        try {
          mensagemErro = decodeURIComponent(result.data.mensagem);
        } catch {
          mensagemErro = result.data.mensagem || mensagemErro;
        }

        Alert.alert("Erro", "Usuário inválido");
        return;
      }

      if (result?.success) {
        route.push("/my-statistics-screen");
      } else {
        Alert.alert("Erro", "Não foi possível fazer login.");
      }
    } catch (error) {
      console.error("Erro inesperado ao fazer login");
      Alert.alert("Erro", "Erro inesperado ao fazer login.");
    }
  };

  return (
    <LoginView
      route={route}
      dispatch={dispatch}
      handleLogin={handleLogin}
      email={email}
      setEmail={setEmail}
      senha={senha}
      setSenha={setSenha}
    />
  );
};

export default Login;
