import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { fetchSmsRecuperarThunk } from "../../redux/thunks";
import { VerifyEmailProps } from "./Models";
import VerifyEmailView from "./view";

const VerifyEmail = ({}: VerifyEmailProps) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const maskEmail = (email: string) => {
    const [user, domain] = email.split("@");
    const maskedUser = user
      .split("")
      .map((char, i) => (i < 4 ? "*" : char))
      .join("");
    return `${maskedUser}@${domain}`;
  };

  const handleSendCode = async () => {
    if (!validateEmail(email)) {
      Alert.alert("Email inválido", "Por favor, insira um email válido.");
      return;
    }

    try {
      const result = await dispatch(fetchSmsRecuperarThunk(email) as any);

      if (result.success) {
        const maskedEmail = maskEmail(email);
        route.push({
          pathname: "/verify-code",
          params: { maskedEmail, email },
        });
      } else {
        Alert.alert(
          "Erro",
          "Usuário não cadastrado tente novamente com outro usuário."
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
    }
  };

  return (
    <VerifyEmailView
      route={route}
      handleSendCode={handleSendCode}
      email={email}
      setEmail={setEmail}
    />
  );
};

export default VerifyEmail;
