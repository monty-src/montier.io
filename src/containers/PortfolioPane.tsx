/**
 * containers/PreviewPost
 *
 *
 * @file containers/PreviewPost
 * @author montier@blackinfrastructure.com
 */
import React, { useState } from "react";
import styled from "styled-components";

import TitleBar from "../components/system.css/TitleBar";
import Separator from "../components/system.css/Separator";
import WindowPane from "../components/system.css/WindowPane";
import AnimateFadeInDown from "../components/animation/AnimateFadeInDown";

import type { iPortfolio } from "../../pages/portfolio";

interface dPortfolio {
  portfolio: iPortfolio[];
}

const PortfolioPane = (props: dPortfolio) => {
  return (
    <>
      <AnimateFadeInDown>
        <TitleBar text="Personal Projects" />
        <Separator />
        <WindowPane>
          <Container>
            <SiteContainer>
              <SiteHeader>
                <SiteTitle>
                  <a href="#" target="_blank">
                    FakeMyFlight
                  </a>
                </SiteTitle>
              </SiteHeader>
              <SiteBody>
                <SiteDescription>Generate Fake Flight Tickets</SiteDescription>
              </SiteBody>
            </SiteContainer>
            <SiteContainer>
              <SiteHeader>
                <SiteTitle>
                  <a href="#" target="_blank">
                    Montier.io
                  </a>
                </SiteTitle>
              </SiteHeader>
              <SiteBody>
                <SiteDescription>
                  Monty's Blog
                  <br />
                  <strong>You're here now!</strong>
                </SiteDescription>
              </SiteBody>
            </SiteContainer>
          </Container>
        </WindowPane>
      </AnimateFadeInDown>
      <AnimateFadeInDown delay={1}>
        <TitleBar text="User Interface Clones" />
        <Separator />
        <WindowPane>
          <Container>
            {props.portfolio.map((portfolio, idx) => (
              <SiteContainer key={idx}>
                <SiteHeader>
                  <SiteTitle>
                    <a href="#" target="_blank">
                      {portfolio.attributes.title}
                    </a>
                  </SiteTitle>
                </SiteHeader>
                <SiteBody>
                  <SiteDescription>
                    {portfolio.attributes.description}
                  </SiteDescription>
                </SiteBody>
              </SiteContainer>
            ))}
          </Container>
        </WindowPane>
      </AnimateFadeInDown>
      <AnimateFadeInDown delay={2}>
        <TitleBar text="Templates" />
        <Separator />
        <WindowPane>
          <Container>
            <SiteContainer>
              <SiteHeader>
                <SiteTitle>
                  <a href="https://github.com/monty-src/rollup-typescript-react-boilerplate" target="_blank">
                    rollup-typescript-react-boilerplate
                  </a>
                </SiteTitle>
              </SiteHeader>
              <SiteBody>
                <SiteDescription>
                  Typescript, React, Rollup Boilerplate
                </SiteDescription>
              </SiteBody>
            </SiteContainer>
          </Container>
        </WindowPane>
      </AnimateFadeInDown>
    </>
  );
};

const Container = styled("section")`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

const SiteContainer = styled("div")`
  padding: 10px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;
  border: 1px solid #000;
`;

const SiteTitle = styled("p")`
  margin: 0;
`;
const SiteDescription = styled("p")`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`;

const SiteHeader = styled("div")`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SiteBody = styled("div")`
  height: 90px;
  display: flex;
`;

export default PortfolioPane;
