import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GoBack from "../../atomic/atoms/GoBack";
import { VerifyCodeViewProps } from "./Models";

const VerifyCodeView: React.FC<VerifyCodeViewProps> = ({
  route,
  handleChange,
  code,
  isFocused,
  setIsFocused,
  inputs,
  maskedEmail,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 70 }}>
        <GoBack
          text="Esqueci a senha"
          onPress={() => {
            route.back();
          }}
        />

        <View style={{ marginTop: 32 }}>
          <Text style={{ fontSize: 26, fontWeight: "600", marginBottom: 8 }}>
            Verifique o código
          </Text>
          <Text style={{ fontSize: 16, color: "#555" }}>
            Verifique o código que enviamos para o email{" "}
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              {maskedEmail}
            </Text>
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 16,
              marginTop: 32,
            }}
          >
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputs.current[index] = ref;
                }}
                style={{
                  borderWidth: 1.5,
                  borderColor: isFocused ? "#0F96E3" : "#ccc",
                  borderRadius: 8,
                  width: 60,
                  height: 60,
                  textAlign: "center",
                  fontSize: 20,
                }}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            ))}
          </View>

          <TouchableOpacity style={{ marginTop: 20 }}>
            <Text style={{ color: "#0C78B6", fontSize: 16, fontWeight: 600 }}>
              Reenviar código
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default VerifyCodeView;
