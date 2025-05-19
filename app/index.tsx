import store from "@/src/redux/store/store";
import Login from "@/src/screens/Login";
import React from "react";
import { Provider } from "react-redux";

export default function Index() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
