import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Alert, TextInput } from "react-native";
import { VerifyCodeProps } from "./Models";
import VerifyCodeView from "./view";

const VerifyCode = ({}: VerifyCodeProps) => {
  const route = useRouter();
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [isFocused, setIsFocused] = useState(false);
  const inputs = useRef<Array<TextInput | null | undefined>>([]);
  const { maskedEmail, email } = useLocalSearchParams();

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value.length === 1 && index < code.length - 1) {
      inputs.current[index + 1]?.focus();
    } else if (value.length === 0 && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    const completedCode = newCode.join("");
    if (newCode.every((digit) => digit !== "")) {
      if (completedCode === "12345") {
        route.push("/reset-password");
      } else {
        Alert.alert("Código inválido", "Por favor, tente novamente.");
        setCode(["", "", "", "", ""]);
        setTimeout(() => {
          inputs.current[0]?.focus();
        }, 100);
      }
    }
  };

  return (
    <>
      <VerifyCodeView
        route={route}
        handleChange={handleChange}
        code={code}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        inputs={inputs}
        setCode={setCode}
        maskedEmail={maskedEmail}
      />
    </>
  );
};

export default VerifyCode;
