import React from "react";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface GoBackProps {
  onPress: () => void;
  text?: string;
  showIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  iconStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const GoBack: React.FC<GoBackProps> = ({
  onPress,
  text = "",
  showIcon = true,
  iconName = "chevron-back",
  iconSize = 24,
  iconColor = "#000",
  iconStyle,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[{ flexDirection: "row", alignItems: "center" }, containerStyle]}
      onPress={onPress}
      activeOpacity={1}
    >
      {showIcon && (
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={iconStyle}
        />
      )}
      {text !== "" && (
        <Text
          style={[
            {
              flex: 1,
              textAlign: "center",
              marginLeft: showIcon ? 8 : 0,
              fontSize: 20,
              fontWeight: "600",
              color: "#000",
            },
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default GoBack;
