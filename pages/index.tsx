import React, { useState } from "react";
import { Button, Htag, P, Tag, Rating } from "../Components/index";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" onClick={() => setCounter(x => x + 1)}>Button</Button>
      <Button appearance="ghost" arrow="right">Button</Button>
      <P size="l">dddd</P>
      <P size="m">dddd</P>
      <P size="s">dddd</P>
      <Tag size="m" color="red">red</Tag>
      <Tag size="m" color="ghost">ghost</Tag>
      <Tag size="m" color="primary">primary</Tag>
      <Tag size="m" color="green">green</Tag>
      <Tag size="m" color="grey">grey</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  )
};
