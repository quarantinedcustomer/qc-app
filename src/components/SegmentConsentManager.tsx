import { ConsentManager, openConsentManager } from "@segment/consent-manager";
import inEU from "@segment/in-eu";
import React from "react";

export default function () {
  const bannerContent = (
    <span>
      Cookies. Bla bla. Etc. You know. Except that we won't track your visit at
      all unless you close this banner or tap/click somewhere outside of it. If
      you do, we will get to see that you visited our site. Now the legal
      phrasing: By using our website, you’re agreeing to the collection of data
      as described in our{" "}
      <a href="https://www.iubenda.com/privacy-policy/92143021" target="_blank">
        Website Data Collection Policy
      </a>
      .
      {/*
      We use cookies (and other similar technologies) to collect data to improve your experience on
      our site. By using our website, you’re agreeing to the collection of data as described in our{' '}
      <a href="https://www.iubenda.com/privacy-policy/92143021" target="_blank">
        Website Data Collection Policy
      </a>
      .
      */}
    </span>
  );
  // const bannerSubContent = 'You can change your preferences at any time.';
  const bannerSubContent =
    "To interact with the site without being tracked, click here";
  const preferencesDialogTitle = "Website Data Collection Preferences";
  // const preferencesDialogContent =
  //   'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.'
  const preferencesDialogContent =
    "We use data collected by cookies and JavaScript libraries to analyze site traffic.";
  const cancelDialogTitle = "Are you sure you want to cancel?";
  const cancelDialogContent =
    "Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy.";
  const customCategories = {
    Analytics: {
      purpose:
        "To understand user behavior in order to provide you with a more relevant user experience.",
      integrations: ["Google Analytics", "Mixpanel"],
    },
  };
  /*
closeBehavior={
  (categories) => ({
    ...categories,
    advertising: false
  })
}
   */

  return (
    <div>
      <ConsentManager
        writeKey="qTmQd1uZfPljD6mV4iuxifavGKn5xuCC"
        shouldRequireConsent={inEU}
        implyConsentOnInteraction={true}
        bannerContent={bannerContent}
        bannerSubContent={bannerSubContent}
        preferencesDialogTitle={preferencesDialogTitle}
        preferencesDialogContent={preferencesDialogContent}
        cancelDialogTitle={cancelDialogTitle}
        cancelDialogContent={cancelDialogContent}
        customCategories={customCategories}
        closeBehavior={"accept"}
      />
    </div>
  );
}
