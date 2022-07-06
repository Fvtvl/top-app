import React from "react";
import { Button, Htag } from "../Components/index";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost" arrow="right">Button</Button>
    </>
  )
};
