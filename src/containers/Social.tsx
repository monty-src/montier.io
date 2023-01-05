/**
 * containers/Social
 *
 *
 * @file containers/Social
 * @author montier@blackinfrastructure.com
 */
import React from "react";

import {
  Github,
  City,
  Instagram,
  Twitter,
  AcceptEmail,
  DocumentFolder,
} from "@icon-park/react";

import { UnOrderedList, ListItemContent } from "../styles/basics";

import TitleBar from "../components/system.css/TitleBar";
import Separator from "../components/system.css/Separator";
import WindowPane from "../components/system.css/WindowPane";
import AnimateFadeInDown from "../../src/components/animation/AnimateFadeInDown";

interface Props {
  city: string;
  contact: {
    id: number;
    email: string;
    github: string;
    twitter: string;
    instagram: string;
  };
}

/**
 * Social Component
 * 
 * 
 * @param param
 * @returns 
 */
const Social = ({ city, contact }: Props) => {
  return (
    <AnimateFadeInDown delay={1}>
      <TitleBar text="Social" />
      <Separator />
      <WindowPane>
        <UnOrderedList>
          <ListItemContent>
            <City theme="outline" size="20" fill="#333" /> {city}
          </ListItemContent>
          <ListItemContent>
            <Github theme="outline" size="20" fill="#333" />{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/${contact.github}/`}
            >
              {contact.github}
            </a>
          </ListItemContent>
          <ListItemContent>
            <Twitter theme="outline" size="20" fill="#333" />{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </ListItemContent>
          <ListItemContent>
            <Instagram theme="outline" size="20" fill="#333" />{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`http://instagram.com/${contact.instagram}`}
            >
              {contact.instagram}
            </a>
          </ListItemContent>
          <ListItemContent>
            <AcceptEmail theme="outline" size="20" fill="#333" />{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </ListItemContent>
        </UnOrderedList>
      </WindowPane>
    </AnimateFadeInDown>
  );
};

export default Social;
1;
