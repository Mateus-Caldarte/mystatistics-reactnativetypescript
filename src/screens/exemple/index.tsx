import React from "react";
import { ExampleProps } from "./Models";
import ExampleView from "./view";

const Example = ({}: ExampleProps) => {
  return (
    <>
      <ExampleView />
    </>
  );
};

export default Example;
