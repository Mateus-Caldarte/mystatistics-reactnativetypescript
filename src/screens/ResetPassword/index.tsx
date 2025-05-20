import { AppDispatch } from "@/src/redux/store/store";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { fetchModificarSenhaThunk } from "../../redux/thunks/ResetPassword";
import { PasswordValidationResult, ResetPasswordProps } from "./Models";
import ResetPasswordView from "./view";

const ResetPassword = ({}: ResetPasswordProps) => {
  const route = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { email, token } = useLocalSearchParams();

  const [newPassword, setNewPassword] = useState("");
  const [previousPassword, setPreviousPassword] = useState<string | undefined>(
    "oldSecurePass!"
  );
  const [validationResults, setValidationResults] =
    useState<PasswordValidationResult>({
      hasMinLength: false,
      hasNumber: false,
      hasLetter: false,
      hasSpecialChar: false,
      isDifferentFromPrevious: true,
    });

  useEffect(() => {
    const validate = (password: string) => {
      const hasMinLength = password.length >= 8;
      const hasNumber = /[0-9]/.test(password);
      const hasLetter = /[a-zA-Z]/.test(password);
      const hasSpecialChar = /[!@#$%^&*]/.test(password);
      const isDifferentFromPrevious = previousPassword
        ? password !== previousPassword
        : true;

      setValidationResults({
        hasMinLength,
        hasNumber,
        hasLetter,
        hasSpecialChar,
        isDifferentFromPrevious,
      });
    };

    validate(newPassword);
  }, [newPassword, previousPassword]);

  const handleResetPassword = async () => {
    if (
      validationResults.hasMinLength &&
      validationResults.hasNumber &&
      validationResults.hasLetter &&
      validationResults.hasSpecialChar &&
      validationResults.isDifferentFromPrevious
    ) {
      const result = await dispatch(
        fetchModificarSenhaThunk(email as string, token as string, newPassword)
      );

      if (result.success) {
        route.push("/reset-password-success");
      } else {
        Alert.alert("Erro", result.mensagem || "Falha ao modificar a senha.");
      }
    } else {
      Alert.alert(
        "Desculpe",
        "A senha não atende a todos os requisitos tente novamente\n" +
          (!validationResults.isDifferentFromPrevious
            ? "- Deve ser diferente da senha anterior\n"
            : "") +
          (!validationResults.hasMinLength
            ? "- Deve conter pelo menos 8 caracteres\n"
            : "") +
          (!validationResults.hasNumber
            ? "- Deve conter pelo menos um número\n"
            : "") +
          (!validationResults.hasLetter
            ? "- Deve conter pelo menos uma letra\n"
            : "") +
          (!validationResults.hasSpecialChar
            ? "- Deve conter pelo menos um caractere especial (!@#$%^&*)\n"
            : "")
      );
    }
  };

  return (
    <ResetPasswordView
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      validationResults={validationResults}
      handleResetPassword={handleResetPassword}
      route={route}
    />
  );
};

export default ResetPassword;
