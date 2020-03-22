import { graphql, StaticQuery } from "gatsby";
import React from "react";
import "../all-styles";
import { ThankYouPage } from "../landing/ThankYouPage";

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
            <ThankYouPage
              landingPageData={{ defaultTitle, screenshot: fluid }}
            />
          );
        }}
      />
    );
  }
}
const query = graphql`
  query ThankYouPage {
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
