import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type InputIconProps = {
  iconName: string;
} & TextInputProps;

const InputIcon: React.FC<InputIconProps> = ({ iconName, style, ...rest }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#DADADA",
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: "#fff",
      }}
    >
      <Icon
        name={iconName}
        size={20}
        color="#A0A0A0"
        style={{ marginRight: 8 }}
      />
      <TextInput
        style={[{ flex: 1, color: "#000", fontSize: 16 }, style]}
        placeholderTextColor="#697586"
        {...rest}
      />
    </View>
  );
};

export default InputIcon;
