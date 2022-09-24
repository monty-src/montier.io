import React from "react";

import {
  Github,
  City,
  Instagram,
  Twitter,
  AcceptEmail,
} from "@icon-park/react";
import styled from "styled-components";

import WindowPane from "../components/system.css/WindowPane";
import AnimateFadeInDown from "../../src/components/animation/AnimateFadeInDown";

const Social = () => {
  return (
    <AnimateFadeInDown delay={1}>
      <WindowPane>
        <UnOrderedList>
          <ListItemContent>
            <City theme="outline" size="24" fill="#333" /> Charlotte, North
            Carolina
          </ListItemContent>
          <ListItemContent>
            <Github theme="outline" size="24" fill="#333" />{" "}
            <a target="_blank" href="https://github.com/monty-src/">
              {" "}
              @monty-src
            </a>
          </ListItemContent>
          <ListItemContent>
            <Twitter theme="outline" size="24" fill="#333" />{" "}
            <a target="_blank" href="https://twitter.com/monty_sdk">
              @monty_sdk
            </a>
          </ListItemContent>
          <ListItemContent>
            <Instagram theme="outline" size="24" fill="#333" />{" "}
            <a target="_blank" href="http://instagram.com/montier_elliott">
              @montier_elliott
            </a>
          </ListItemContent>
          <ListItemContent>
            <AcceptEmail theme="outline" size="24" fill="#333" />{" "}
            <a target="_blank" href="mailto:montier@blackinfrastructure.com">
              @montier@blackinfrastructure.com
            </a>
          </ListItemContent>
        </UnOrderedList>
      </WindowPane>
    </AnimateFadeInDown>
  );
};

const UnOrderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItemContent = styled.li`
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
  line-height: 1.4;
`;

export default Social;
