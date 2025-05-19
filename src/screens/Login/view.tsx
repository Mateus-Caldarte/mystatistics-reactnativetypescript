import Button from "@/src/atomic/atoms/Button";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputWithIcon from "../../atomic/atoms/Input";
import { LoginViewProps } from "./Models";

const LoginView: React.FC<LoginViewProps> = ({ route }) => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          marginBottom: 20,
          color: "#323F4B",
          fontWeight: "600",
        }}
      >
        Login
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Bem-vindo(a) de volta!
      </Text>
      <Text style={{ fontSize: 14, color: "#000", marginBottom: 14 }}>
        Email
      </Text>
      <InputWithIcon
        iconName="email-outline"
        placeholder="Insira seu email"
        keyboardType="default"
      />
      <Text
        style={{ fontSize: 14, color: "#000", marginTop: 12, marginBottom: 14 }}
      >
        Senha
      </Text>
      <InputWithIcon
        iconName="lock-outline"
        placeholder="Insira sua senha"
        secureTextEntry
      />
      <Button
        title="Entrar"
        onPress={() => route.push("/my-statistics-screen")}
      />
      <TouchableOpacity
        onPress={() => route.push("/verify-email")}
        style={{ marginTop: 12 }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#344054",
            textDecorationLine: "none",
            fontSize: 16,
          }}
        >
          Esqueci a senha
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
