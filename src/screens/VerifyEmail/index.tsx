import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert } from "react-native";
import { VerifyEmailProps } from "./Models";
import VerifyEmailView from "./view";

const VerifyEmail = ({}: VerifyEmailProps) => {
  const route = useRouter();
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

  const handleSendCode = () => {
    if (!validateEmail(email)) {
      Alert.alert("Email inválido", "Por favor, insira um email válido.");
      return;
    }

    const maskedEmail = maskEmail(email);
    route.push({
      pathname: "/verify-code",
      params: { maskedEmail },
    });
  };

  return (
    <>
      <VerifyEmailView
        route={route}
        handleSendCode={handleSendCode}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
};

export default VerifyEmail;
