import React from "react";

interface Props {
  text: string;
}

const TitleBar = ({ text }: Props) => {
  return (
    <div className="title-bar">
      <h1 className="title">{text}</h1>
    </div>
  );
};

export default TitleBar;
