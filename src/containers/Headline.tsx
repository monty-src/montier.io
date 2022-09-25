import React from "react";

import TitleBar from "../components/system.css/TitleBar";
import Seperator from "../components/system.css/Separator";
import WindowPane from "../components/system.css/WindowPane";
import AnimateFadeInDown from "../../src/components/animation/AnimateFadeInDown";
import styled from "styled-components";

interface Props {
  title: string;
  quote: string;
  quote_author: string;
}

const HeadlineContainer = ({ title, quote, quote_author }: Props) => {
  return (
    <AnimateFadeInDown>
      <TitleBar text={title} />
      <Seperator />
      <Pane>
        <h4>{quote}</h4>
        <p>{quote_author}</p>
      </Pane>
    </AnimateFadeInDown>
  );
};

const Pane = styled(WindowPane)`
  text-align: center;
`;

export default HeadlineContainer;
