import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { ProgressTrackingViewProps } from "./Models";

const { width: screenWidth } = Dimensions.get("window");

const ProgressTrackingView: React.FC<ProgressTrackingViewProps> = ({
  sortedTotalizadores,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <View style={{ paddingTop: 12 }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          backgroundColor: "#fff",
          marginBottom: 12,
          width: "40%",
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={sortOrder}
          onValueChange={(itemValue) => setSortOrder(itemValue)}
          style={{
            height: 50,
            paddingHorizontal: 8,
            color: sortOrder ? "#000" : "#999",
          }}
        >
          <Picker.Item label="Ordenar" value="" enabled={false} color="#999" />
          <Picker.Item label="A-Z" value="nome-asc" />
          <Picker.Item label="Z-A" value="nome-desc" />
        </Picker>
      </View>

      {sortedTotalizadores.map((item, index) => (
        <View
          key={index}
          style={{
            width: screenWidth - 32,
            padding: 20,
            borderWidth: 1,
            borderColor: "#e0e0e0",
            borderRadius: 8,
            backgroundColor: "#fff",
            marginBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="#777"
              style={{ marginRight: 8 }}
            >
              <Path d="M19.47 7.73a7.5 7.5 0 0 0-10.94 0L8.2 9.06a9 9 0 0 0-2.2 5.29v3.65a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.65a9 9 0 0 0-2.2-5.29l-0.33-1.33zM12 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              <Path d="M12 4a3 3 0 0 1 3 3h-6a3 3 0 0 1 3-3z" />
            </Svg>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "#333" }}>
              {item.temaNome}
            </Text>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#666", fontSize: 14, marginBottom: 4 }}>
              <Text style={{ fontWeight: "bold" }}>
                {item.totalQuestionsAnswered.split(" ")[0]}
              </Text>{" "}
              {item.totalQuestionsAnswered.split(" ").slice(1).join(" ")}
            </Text>
            <View
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 4,
                height: 8,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  backgroundColor: "#095A88",
                  height: "100%",
                  borderRadius: 4,
                  width: `${item.answeredProgress}%`,
                }}
              />
            </View>
          </View>

          <View>
            <Text style={{ color: "#666", fontSize: 14, marginBottom: 4 }}>
              <Text style={{ fontWeight: "bold" }}>
                {item.correctAnswers.split(" ")[0]}
              </Text>{" "}
              {item.correctAnswers.split(" ").slice(1).join(" ")}
            </Text>
            <View
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 4,
                height: 8,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  backgroundColor: "#095A88",
                  height: "100%",
                  borderRadius: 4,
                  width: `${item.correctProgress}%`,
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProgressTrackingView;
