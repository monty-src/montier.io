import React from "react";

import TitleBar from "../components/system.css/TitleBar";
import Seperator from "../components/system.css/Separator";
import WindowPane from "../components/system.css/WindowPane";
import AnimateFadeInDown from "../../src/components/animation/AnimateFadeInDown";

const HeadlineContainer = () => {
  return (
    <AnimateFadeInDown>
      <TitleBar text="Montier R. Elliott" />
      <Seperator />
      <WindowPane style={{ textAlign: "center" }}>
        <h4>quote text here</h4>
        <p>Author of quote</p>
      </WindowPane>
    </AnimateFadeInDown>
  );
};

export default HeadlineContainer;
