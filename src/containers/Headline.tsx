import React from "react";
import Image from "next/image";
import styled from "styled-components";

import TitleBar from "../components/system.css/TitleBar";
import Seperator from "../components/system.css/Separator";
import WindowPane from "../components/system.css/WindowPane";
import AnimateFadeInDown from "../../src/components/animation/AnimateFadeInDown";

import Profile from "../../public/face_co.svg";

interface Props {
  title: string;
  quote: string;
  quote_author: string;
}

const HeadlineContainer = ({ title, quote, quote_author }: Props) => {
  return (
    <AnimateFadeInDown delay={2}>
      <TitleBar text={title} />
      <Seperator />
      <WindowPane>
        <Container>
          <Image height={200} width={200} src={Profile} />
          <h4>{quote}</h4>
          <p>{quote_author}</p>
        </Container>
      </WindowPane>
    </AnimateFadeInDown>
  );
};

const Container = styled("section")`
  text-align: center;
`;

export default HeadlineContainer;
