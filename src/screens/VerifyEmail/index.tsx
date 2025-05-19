import { useRouter } from "expo-router";
import React from "react";
import { VerifyEmailProps } from "./Models";
import VerifyEmailView from "./view";

const VerifyEmail = ({}: VerifyEmailProps) => {
  const route = useRouter();

  return (
    <>
      <VerifyEmailView route={route} />
    </>
  );
};

export default VerifyEmail;
