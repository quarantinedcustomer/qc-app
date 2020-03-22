import { openConsentManager } from "@segment/consent-manager";
import { Link } from "gatsby";
import React from "react";
import { View } from "react-native";
import SegmentConsentManager from "../editor/components/SegmentConsentManager";
import SEO from "../seo";

interface ThankYouPageProps {
  landingPageData: {
    defaultTitle: string;
    screenshot: any;
  };
}

export class ThankYouPage extends React.Component<ThankYouPageProps> {
  public render() {
    const { defaultTitle, screenshot } = this.props.landingPageData;
    return (
      <View>
        <SEO />
        <div className="gradient leading-relaxed tracking-wide flex flex-col">
          <SegmentConsentManager />
          <nav
            id="header"
            className="w-full z-30 top-0 text-white py-1 lg:py-6"
          >
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
              <div className="pl-4 flex items-center">
                <a
                  className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="#"
                >
                  {defaultTitle}
                </a>
              </div>
            </div>
          </nav>

          <div className="container mx-auto min-h-screen">
            <div className="text-center px-3 lg:px-0">
              <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                Thank you
              </h1>
              <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
                Your local business needs you to survive the largest quarantine
                in human history, make a difference by reaching out
              </p>

              <button className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48">
                <Link to="/app/">Go to App</Link>
              </button>
            </div>
          </div>

          <footer className="bg-white ">
            <div className="container mx-auto mt-8 px-8">
              <div className="w-full flex flex-col md:flex-row py-6">
                <div className="flex-1 mb-6 mr-12">
                  <a
                    className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    href="#"
                  >
                    {defaultTitle}
                  </a>
                </div>

                <div className="flex-1">
                  <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                    Legal
                  </p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="javascript:void(0);"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                        onClick={openConsentManager}
                      >
                        Website Data Collection Preferences
                      </a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="https://www.iubenda.com/privacy-policy/todo/cookie-policy"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Cookie Policy
                      </a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="https://www.iubenda.com/privacy-policy/todo"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="flex-1">
                  <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                    Social
                  </p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="https://fb.me/todo"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Facebook
                      </a>
                    </li>
                    {/*
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="#"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Linkedin
                      </a>
                    </li>
                    */}
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="https://twitter.com/todo"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </View>
    );
  }
}
