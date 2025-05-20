import store from "@/src/redux/store/store";
import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </Provider>
  );
}
