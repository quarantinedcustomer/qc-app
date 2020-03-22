import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
const SEO = ({
  title,
  description,
  image,
  pathname,
  article,
}: {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: string;
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          facebookAppId,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      };
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {(!article ? true : null) && (
              <meta property="og:type" content="website" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta property="og:image:width" content="2400" />
            <meta property="og:image:height" content="1256" />
            {facebookAppId && (
              <meta property="fb:app_id" content={facebookAppId} />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <meta property="og:site_name" content={siteUrl} />
            <meta property="og:locale" content="en" />
          </Helmet>
        </>
      );
    }}
  />
);
export default SEO;
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        facebookAppId
        twitterUsername
      }
    }
  }
`;
