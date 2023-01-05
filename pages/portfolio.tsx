/**
 * pages/portfolio
 *
 *
 * @file pages/portfolio
 * @author montier@blackinfrastructure.com
 */
import React from "react";
import axios from "axios";
import type { NextPage } from "next";

import { wrapper } from "../src/store";
import PortfolioPane from "../src/containers/PortfolioPane";

import "animate.css";

/**
 * iPortFolio
 *
 *
 */
export interface iPortfolio {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;

    title: string;
    description: string;
    link: string | null;
  };
}

/**
 * Portfolio Page Props
 *
 *
 */
export interface PortfolioPageProps {
  data: iPortfolio[];
}

/**
 * Portfolio Component
 *
 *
 * @param props
 * @returns {}
 */
const Portfolio: NextPage<PortfolioPageProps> = ({ data }) => (
  <PortfolioPane portfolio={data} />
);

/**
 * Get Servier Side Props
 *
 *
 * @returns
 */
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const response = await axios.get(`${process.env.API_BASE_URL}portfolios`);

      const { data } = response?.data;

      return {
        props: {
          data,
        },
      };
    }
);

export default Portfolio;
