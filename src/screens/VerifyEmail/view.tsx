import Button from "@/src/atomic/atoms/Button";
import React from "react";
import { Text, View } from "react-native";
import GoBack from "../../atomic/atoms/GoBack";
import InputWithIcon from "../../atomic/atoms/Input";
import { VerifyEmailViewProps } from "./Models";

const VerifyEmailView: React.FC<VerifyEmailViewProps> = ({ route }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        marginTop: 50,
      }}
    >
      <View>
        <GoBack
          text="Esqueci a senha"
          onPress={() => {
            route.back();
          }}
        />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 40,
            marginBottom: 10,
            color: "#333",
          }}
        >
          Esqueceu a senha?
        </Text>
        <Text style={{ fontSize: 16, color: "#666", marginBottom: 30 }}>
          Insira seu e-mail para enviarmos um código de redefinição de senha
        </Text>

        <View style={{ marginBottom: 20 }}>
          <InputWithIcon
            placeholder="Insira seu email"
            iconName="email-outline"
          />
        </View>
      </View>

      <Button title="Enviar código" onPress={() => {}} />
    </View>
  );
};

export default VerifyEmailView;
