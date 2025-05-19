import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: "#0C78B6",
          paddingVertical: 12,
          borderRadius: 6,
          marginTop: 32,
        },
        style,
      ]}
      disabled={disabled}
    >
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
