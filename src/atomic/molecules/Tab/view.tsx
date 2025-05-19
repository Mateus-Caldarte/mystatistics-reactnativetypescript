import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TabViewRenderProps } from "./Models";

const TabView: React.FC<TabViewRenderProps> = ({
  tabs,
  activeIndex,
  onTabClick,
}) => {
  return (
    <View style={{ flexDirection: "column", width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onTabClick(index)}
            style={{
              flex: 1,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth: activeIndex === index ? 2 : 0,
              borderBottomColor: "#095A88",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: activeIndex === index ? "#095A88" : "#333",
                fontWeight: activeIndex === index ? "bold" : "normal",
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ padding: 15 }}>{tabs[activeIndex].content}</View>
    </View>
  );
};

export default TabView;
