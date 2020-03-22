import { graphql, StaticQuery } from "gatsby";
import React from "react";
import "../all-styles";
import { LandingPage } from "../landing/LandingPage";

export default class App extends React.Component<{}> {
  public render() {
    return (
      <StaticQuery
        query={query}
        render={({
          site: {
            siteMetadata: { defaultTitle },
          },
          file: {
            childImageSharp: { fluid },
          },
        }) => {
          return (
            <LandingPage
              landingPageData={{ defaultTitle, screenshot: fluid }}
            />
          );
        }}
      />
    );
  }
}
const query = graphql`
  query LandingPage {
    site {
      siteMetadata {
        defaultTitle: title
      }
    }
    file(relativePath: { eq: "og/qc-screen-og-image-1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
