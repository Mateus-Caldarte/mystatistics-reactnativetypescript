import { useRouter } from "expo-router";
import React from "react";
import { ResetPasswordSuccessProps } from "./Models";
import ResetPasswordSuccessView from "./view";

const ResetPasswordSuccess = ({}: ResetPasswordSuccessProps) => {
  const route = useRouter();

  const handleOnLoginPress = () => {
    route.push("/login");
  };

  return (
    <>
      <ResetPasswordSuccessView handleOnLoginPress={handleOnLoginPress} />
    </>
  );
};

export default ResetPasswordSuccess;
