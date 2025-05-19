import { useRouter } from "expo-router";
import React from "react";
import { LoginProps } from "./Models";
import LoginView from "./view";

const Login = ({}: LoginProps) => {
  const route = useRouter();

  return (
    <>
      <LoginView route={route} />
    </>
  );
};

export default Login;
