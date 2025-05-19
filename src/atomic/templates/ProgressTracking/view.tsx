import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { ProgressTrackingViewProps } from "./Models";

const { width: screenWidth } = Dimensions.get("window");

const ProgressTrackingView: React.FC<ProgressTrackingViewProps> = ({
  surgeryGastroenterology = "Cirurgia / Gastroenterologia",
  totalQuestionsAnswered = "10/20 total de questões respondidas",
  correctAnswers = "10/20 respostas corretas",
  answeredProgress = 10,
  correctProgress = 20,
}) => {
  return (
    <View style={{ paddingTop: 12 }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 12,
          backgroundColor: "#fff",
          alignSelf: "flex-start",
          marginBottom: 12,
        }}
      >
        <Text style={{ color: "#444", fontSize: 14, marginRight: 4 }}>
          Ordenar
        </Text>
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Path d="M7 10l5 5 5-5H7z" fill="#444" />
        </Svg>
      </TouchableOpacity>

      <View
        style={{
          width: screenWidth - 32,
          padding: 20,
          borderWidth: 1,
          borderColor: "#e0e0e0",
          borderRadius: 8,
          backgroundColor: "#fff",
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
            {surgeryGastroenterology}
          </Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "#666", fontSize: 14, marginBottom: 4 }}>
            <Text style={{ fontWeight: "bold" }}>
              {totalQuestionsAnswered.split(" ")[0]}
            </Text>{" "}
            {totalQuestionsAnswered.split(" ").slice(1).join(" ")}
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
                width: `${answeredProgress}%`,
              }}
            />
          </View>
        </View>

        <View>
          <Text style={{ color: "#666", fontSize: 14, marginBottom: 4 }}>
            <Text style={{ fontWeight: "bold" }}>
              {correctAnswers.split(" ")[0]}
            </Text>{" "}
            {correctAnswers.split(" ").slice(1).join(" ")}
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
                width: `${correctProgress}%`,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressTrackingView;
