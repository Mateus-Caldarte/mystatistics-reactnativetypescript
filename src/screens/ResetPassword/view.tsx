import GoBack from "@/src/atomic/atoms/GoBack";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import Button from "../../atomic/atoms/Button";
import InputWithIcon from "../../atomic/atoms/Input";
import { ResetPasswordViewProps } from "./Models";

const ResetPasswordView: React.FC<ResetPasswordViewProps> = ({
  newPassword,
  setNewPassword,
  validationResults,
  handleResetPassword,
  route,
}) => {
  return (
    <View
      style={{ flex: 1, padding: 20, backgroundColor: "#fff", marginTop: 48 }}
    >
      <GoBack text="Esqueci a senha" onPress={() => route.push("/login")} />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
          color: "#222",
        }}
      >
        Redefina sua senha
      </Text>
      <Text style={{ fontSize: 16, color: "#666", marginBottom: 20 }}>
        Sua nova senha deve ser diferente de senhas utilizadas previamente
      </Text>
      <InputWithIcon
        iconName="lock-outline"
        placeholder="Insira nova sua senha"
        secureTextEntry={true}
        keyboardType="default"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Text
        style={{
          fontSize: 16,
          marginTop: 10,
          marginBottom: 10,
          color: "#333",
        }}
      >
        Pré-requisitos:
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        <Feather
          name={
            validationResults.isDifferentFromPrevious
              ? "check-circle"
              : "x-circle"
          }
          size={16}
          color={
            validationResults.isDifferentFromPrevious ? "#28A745" : "#FF4D4F"
          }
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 14, color: "#555" }}>
          Ser diferente da senha anterior
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        <Feather
          name={validationResults.hasMinLength ? "check-circle" : "x-circle"}
          size={16}
          color={validationResults.hasMinLength ? "#28A745" : "#FF4D4F"}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 14, color: "#555" }}>
          Conter pelo menos 8 caracteres
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        <Feather
          name={validationResults.hasNumber ? "check-circle" : "x-circle"}
          size={16}
          color={validationResults.hasNumber ? "#28A745" : "#FF4D4F"}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 14, color: "#555" }}>
          Conter pelo menos um número
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        <Feather
          name={validationResults.hasLetter ? "check-circle" : "x-circle"}
          size={16}
          color={validationResults.hasLetter ? "#28A745" : "#FF4D4F"}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 14, color: "#555" }}>
          Conter pelo menos uma letra
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      >
        <Feather
          name={validationResults.hasSpecialChar ? "check-circle" : "x-circle"}
          size={16}
          color={validationResults.hasSpecialChar ? "#28A745" : "#FF4D4F"}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 14, color: "#555" }}>
          Conter pelo menos um caractere especial (!@#$%^&*)
        </Text>
      </View>
      <Button
        title="Redefinir senha"
        onPress={handleResetPassword}
        style={{ marginTop: 30 }}
      />
    </View>
  );
};

export default ResetPasswordView;
