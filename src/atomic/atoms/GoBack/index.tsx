import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface GoBackProps {
  onPress: () => void;
  text: string;
}

const GoBack: React.FC<GoBackProps> = ({ onPress, text = "" }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center" }}
      onPress={onPress}
      activeOpacity={1}
    >
      <Icon name="chevron-back" size={24} color="#000" />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 8,
          fontSize: 18,
          fontWeight: 600,
          color: "#000",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default GoBack;
