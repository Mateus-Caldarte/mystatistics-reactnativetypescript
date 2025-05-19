import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CheckmarkIcon from "../../../assets/checkmark.png";
import { ResetPasswordSuccessViewProps } from "./Models";

const ResetPasswordSuccessView: React.FC<ResetPasswordSuccessViewProps> = ({
  handleOnLoginPress,
}) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
          }}
        >
          <Image source={CheckmarkIcon} />
        </View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#063C5B",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Senha redefinida!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#063C5B",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Sua senha foi redefinida com sucesso.{"\n"}Clique abaixo para fazer o
          login
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#1C8ADB",
          paddingVertical: 15,
          borderRadius: 5,
          width: "100%",
          marginBottom: 30,
        }}
        onPress={handleOnLoginPress}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordSuccessView;
