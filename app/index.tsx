import Login from "@/src/screens/Login";
import React from "react";

if (__DEV__) {
  import("../ReactotronConfig");
}

export default function Index() {
  return <Login />;
}
