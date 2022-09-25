import React from "react";

import {
  Github,
  City,
  Instagram,
  Twitter,
  AcceptEmail,
} from "@icon-park/react";

import { UnOrderedList, ListItemContent } from "../styles/basics";

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

const Social = ({ city, contact }: Props) => {
  return (
    <AnimateFadeInDown delay={1}>
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
