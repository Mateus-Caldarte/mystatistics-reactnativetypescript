import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Alert, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import {
  fetchSmsRecuperarThunk,
  fetchSmsValidarThunk,
} from "../../redux/thunks";
import { VerifyCodeProps } from "./Models";
import VerifyCodeView from "./view";

const VerifyCode = ({}: VerifyCodeProps) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<Array<TextInput | null | undefined>>([]);
  const { maskedEmail, email } = useLocalSearchParams();

  const handleChange = async (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value.length === 1 && index < code.length - 1) {
      inputs.current[index + 1]?.focus();
    } else if (value.length === 0 && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      const completedCode = newCode.join("");
      setLoading(true);
      try {
        const result = await dispatch(
          fetchSmsValidarThunk(email as string, completedCode) as any
        );

        if (result.success) {
          route.push({
            pathname: "/reset-password",
            params: {
              email: email,
              token: completedCode,
            },
          });
        } else {
          Alert.alert("Erro", "Código inválido. Tente novamente.");
          setCode(["", "", "", "", ""]);
          setTimeout(() => {
            inputs.current[0]?.focus();
          }, 100);
        }
      } catch {
        Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
        setCode(["", "", "", "", ""]);
        setTimeout(() => {
          inputs.current[0]?.focus();
        }, 100);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      Alert.alert("Erro", "Email não encontrado para reenviar código.");
      return;
    }

    setLoading(true);
    try {
      const result = await dispatch(
        fetchSmsRecuperarThunk(email as string) as any
      );
      if (result.success) {
        Alert.alert("Sucesso", "Código reenviado para seu e-mail.");
      } else {
        Alert.alert("Erro", "Falha ao reenviar código. Tente novamente.");
      }
    } catch {
      Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <VerifyCodeView
      route={route}
      handleChange={handleChange}
      code={code}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      inputs={inputs}
      setCode={setCode}
      maskedEmail={maskedEmail as string}
      loading={loading}
      onResendCode={handleResendCode}
    />
  );
};

export default VerifyCode;
