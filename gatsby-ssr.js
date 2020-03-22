const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  // Prevents FOUC together with having src/styles/prevent-fouc.css
  // be the last styles that are loaded
  // Note: prevent-fouc.css must be imported, or the site won't appear
  setHeadComponents([
    <style
      dangerouslySetInnerHTML={{
        __html: `html{visibility: hidden;opacity:0;}`,
      }}
    />,
  ]);

  // Segment snippet without analytics.load (to be able to respect cookie consent)
  const host = "https://cdn.segment.io";
  const prodKey = "";
  const devKey = "";
  const segmentSnippet = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="${host}/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
    // no analytics.load before cookie consent has been established
    window.analytics.writeKey = ${
      process.env.NODE_ENV === "production" ? prodKey : devKey
    }
  }}();`;
  setHeadComponents([
    <script
      key="segment-snippet"
      dangerouslySetInnerHTML={{ __html: segmentSnippet }}
    />,
  ]);
};
