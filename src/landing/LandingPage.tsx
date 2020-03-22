import { openConsentManager } from "@segment/consent-manager";
import { Link } from "gatsby";
import React from "react";
import { View } from "react-native";
import SegmentConsentManager from "../components/SegmentConsentManager";
import SEO from "../seo";
// @ts-ignore
import UndrawArtMuseumSvg from "./undraw_art_museum_8or4.inline.svg";
// @ts-ignore
import UndrawProjectCompletedSvg from "./undraw_project_completed_w0oq.inline.svg";
// @ts-ignore
import UndrawRoadSignSvg from "./undraw_road_sign_mfpo.inline.svg";
// @ts-ignore
import UndrawToTheMoonSvg from "./undraw_to_the_moon_v1mv.inline.svg";
// @ts-ignore
import UndrawTypewriterSvg from "./undraw_typewriter_i8xd.inline.svg";

interface LandingPageProps {
  landingPageData: {
    defaultTitle: string;
    screenshot: any;
  };
}

export class LandingPage extends React.Component<LandingPageProps> {
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
                  {/*
                  <svg
                    className="h-6 w-6 inline-block fill-current text-orange-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
                  </svg>
                  */}
                  {defaultTitle}
                </a>
              </div>

              {/*
              <div className="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>

              <div
                className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
                id="nav-content"
              >
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3">
                    <a
                      className="inline-block py-2 px-4 text-black font-bold no-underline"
                      href="#"
                    >
                      Active
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                </ul>
                <button
                  id="navAction"
                  className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
                >
                  Action
                </button>
              </div>
              */}
            </div>
          </nav>

          <div className="container mx-auto min-h-screen">
            <div className="text-center px-3 lg:px-0">
              <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                Stay quarantined, remain a customer
              </h1>
              <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
                Your local business needs your help in order to survive, make a
                difference by reaching out
              </p>

              {/*
              <button className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48">
                <Link to="/app/">Go to App</Link>
              </button>
              <a
                href="#"
                className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
              >
                View Additional Action
              </a>
              */}
            </div>

            <div className="text-center px-3 lg:px-0">
              <a name="top" />

              <form
                action="https://app.getresponse.com/add_subscriber.html"
                accept-charset="utf-8"
                method="post"
              >
                <div className="text-center px-3 lg:px-0 lg:mx-48">
                  <p className="mt-6">
                    <strong>
                      1. Recall your last restaurant visit, the last art
                      performance, your last visit to your barber, your Yoga
                      instructor, etc. Think of what local businesses that you
                      would like to remain a customer with but can't throughout
                      the quarantine.
                    </strong>
                  </p>

                  <label className="block mt-4">
                    <span className="text-gray-700">
                      Local business that you want to help survive throughout
                      the quarantine:
                    </span>
                    <input
                      className="form-input mt-1 block w-full"
                      type="text"
                      name="custom_local_business_to_save"
                      placeholder=""
                    />
                  </label>

                  <p className="mt-6">
                    <strong>
                      2. Tell your local businesses how you would be willing to
                      help out (buy vouchers, participate/order online, help
                      them set up shop online, etc, be creative!).
                    </strong>
                  </p>

                  <label className="block mt-4">
                    <span className="text-gray-700">
                      How you are willing to help:
                    </span>
                    <input
                      className="form-input mt-1 block w-full"
                      type="text"
                      name="custom_help_offered"
                      placeholder=""
                    />
                  </label>

                  <p className="mt-6">
                    <strong>
                      3. Let the local business know who you are or where you
                      are from, so that we can tell the local business that
                      there are quarantined customers that want to remain
                      customers / support them.
                    </strong>
                  </p>

                  <label className="block mt-6">
                    <span className="text-gray-700">
                      What do we call you, Hero?
                    </span>
                    <input
                      className="form-input mt-1 block w-full"
                      name="name"
                      placeholder="Jane Doe"
                    />
                  </label>
                  {/*
                  <div className="mt-4">
                    <span className="text-gray-700">Choose what suits your situation best:</span>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio"
                          name="accountType"
                          value="personal"
                        />
                        <span className="ml-2">I am a quarantined customer and skdljfsdjklf sdflkj sdfjkl sdfjkl sdf</span>
                      </label>
                      <label className="inline-flex items-center ml-6">
                        <input
                          type="radio"
                          className="form-radio"
                          name="accountType"
                          value="busines"
                        />
                        <span className="ml-2">Business</span>
                      </label>
                    </div>
                  </div>
                  */}
                  <label className="block mt-4">
                    <span className="text-gray-700">Country</span>
                    <select
                      className="form-select mt-1 block w-full"
                      name="custom_country"
                    >
                      <option value="">(Choose)</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Aland Islands">Aland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire, Sint Eustatius and Saba">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, the democratic republic of the">
                        Congo, the democratic republic of the
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curacao">Curacao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic republic of">
                        Iran, Islamic republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of man">Isle of man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, democratic people's republic of">
                        Korea, democratic people's republic of
                      </option>
                      <option value="Korea, republic of">
                        Korea, republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao people's democratic republic">
                        Lao people's democratic republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, the former yugoslav republic of">
                        Macedonia, the former yugoslav republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, federated states of">
                        Micronesia, federated states of
                      </option>
                      <option value="Moldova, republic of">
                        Moldova, republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine, State of">
                        Palestine, State of
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Réunion">Réunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Barthélemy">Saint Barthélemy</option>
                      <option value="Saint Helena, Ascension and Tristan da Cunha">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Martin">Saint Martin</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Sint Maarten">Sint Maarten</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and the South Sandwich Islands">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic Of">
                        Tanzania, United Republic Of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City State">
                        Vatican City State
                      </option>
                      <option value="Venezuela, Bolivarian Republic Of">
                        Venezuela, Bolivarian Republic Of
                      </option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </label>
                  <label className="block mt-4">
                    <span className="text-gray-700">City</span>
                    <input
                      className="form-input mt-1 block w-full"
                      type="text"
                      name="custom_city"
                      placeholder=""
                    />
                  </label>

                  <p className="mt-6">
                    <strong>
                      4. Add your email so that we can follow-up and specific
                      instructions on how to help out
                    </strong>
                  </p>

                  {/* Email field (required) */}
                  <label className="block mt-4">
                    <span className="text-gray-700">Email (required):</span>
                    <input
                      className="form-input mt-1 block w-full"
                      type="text"
                      name="email"
                      placeholder=""
                    />
                  </label>

                  <div className="flex mt-6">
                    <label className="flex items-center">
                      <input
                        id="webform_consent#Sw8N_0"
                        type="checkbox"
                        name="webform[consent#Sw8N-ver#ST2j]"
                        value="true"
                        className="form-checkbox"
                      />
                      <label htmlFor="webform_consent#Sw8N_0" className="ml-2">
                        I agree to to the{" "}
                        <a
                          href="https://www.iubenda.com/privacy-policy/82474744"
                          target="_blank"
                          className="underline"
                        >
                          privacy policy
                        </a>
                      </label>{" "}
                    </label>
                  </div>
                  {/* List token */}
                  {/* Get the token at: https://app.getresponse.com/campaign_list.html */}
                  <input type="hidden" name="campaign_token" value="Wxtin" />
                  {/* Thank you page (optional) */}
                  <input
                    type="hidden"
                    name="thankyou_url"
                    value="https://quarantinedcustomer.com/thank-you"
                  />
                  {/* Add subscriber to the follow-up sequence with a specified day (optional) */}
                  <input type="hidden" name="start_day" value="0" />
                  {/* Forward form data to your page (optional) */}
                  <input type="hidden" name="forward_data" value="get" />
                  {/* Subscriber button */}
                  <button
                    className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
                    type="submit"
                  >
                    Make a difference
                  </button>
                </div>
              </form>

              {/*
              <form>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Company Name*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Netboard"
                      />
                      <div>
                        <span className="text-red-500 text-xs italic">
                          Please fill out this field.
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="title"
                      >
                        Title*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="title"
                        type="text"
                        placeholder="Software Engineer"
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="application-link"
                      >
                        Application Link*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="application-link"
                        type="text"
                        placeholder="http://...."
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="location"
                      >
                        Location*
                      </label>
                      <div>
                        <select
                          className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                          id="location"
                        >
                          <option>Abuja</option>
                          <option>Enugu</option>
                          <option>Lagos</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="job-type"
                      >
                        Job Type*
                      </label>
                      <div>
                        <select
                          className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                          id="job-type"
                        >
                          <option>Full-Time</option>
                          <option>Part-Time</option>
                          <option>Internship</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="department"
                      >
                        Department*
                      </label>
                      <div>
                        <select
                          className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                          id="department"
                        >
                          <option>Engineering</option>
                          <option>Design</option>
                          <option>Customer Support</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mt-2">
                    <div className="md:w-full px-3">
                      <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              */}
            </div>

            {/*
            <div className="flex items-center w-full mx-auto content-end">
              <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl">
                <Img
                  className="object-fill container"
                  fluid={screenshot}
                  alt="Screenshot"
                />
              </div>
            </div>
            */}
          </div>
          {/*
          <section className="bg-white border-b py-12 ">
            <div className="container mx-auto flex flex-wrap items-center justify-between pb-12">
              <h2 className="w-full my-2 text-xl font-black leading-tight text-center text-gray-800 lg:mt-8">
                Our Customers / Featured in
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
              </div>

              <div className="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-between text-xl text-gray-500 font-bold opacity-75">
                <span className="w-1/2 p-4 md:w-auto flex items-center">
                  <svg
                    className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0z" />
                  </svg>
                  >TeeShirtz
                </span>

                <span className="w-1/2 p-4 md:w-auto flex items-center">
                  <svg
                    className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" />
                  </svg>
                  >Mic.Check
                </span>

                <span className="w-1/2 p-4 md:w-auto flex items-center">
                  <svg
                    className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 0 0 8 0z" />
                  </svg>
                  >BadgeLife.io
                </span>

                <span className="w-1/2 p-4 md:w-auto flex items-center">
                  <svg
                    className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z" />
                  </svg>
                  >Bugz 4 Life
                </span>
              </div>
            </div>
          </section>
          */}

          <section className="bg-gray-100 border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
              <h2 className="p-6 w-full my-2 text-4xl lg:text-5xl font-black leading-tight text-center text-gray-800">
                How it works
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
              </div>

              <div className="mb-12 sm:mb-0 flex flex-wrap">
                <div className="flex w-full sm:w-1/2 p-6">
                  <div className="flex flex-wrap content-center text-center sm:text-right">
                    <h3 className="w-full text-3xl text-gray-800 font-bold leading-none mb-12 sm:mb-3">
                      The problem
                    </h3>
                    <p className="text-gray-600">
                      Many small businesses take countermeasures (live
                      streaming, liquidity vouchers, restaurants switch to
                      take-away services etc), but their customers may not even
                      now it, and in many cases, small business owners don’t
                      even feel confident about how to take their business
                      online. Some even feel that it isn’t worth it, that their
                      quarantined customers wouldn’t even bother.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                  <UndrawRoadSignSvg className="w-full h-64 mx-auto" />
                </div>
              </div>

              <div className="mb-12 sm:mb-0 flex flex-wrap content-center flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <UndrawArtMuseumSvg className="w-full h-64 mx-auto" />
                </div>
                <div className="flex w-full sm:w-1/2 p-6 mt-6">
                  <div className="flex flex-wrap content-center text-center sm:text-left">
                    <h3 className="w-full text-3xl text-gray-800 font-bold leading-none mb-12 sm:mb-3">
                      The solution
                    </h3>
                    <p className="text-gray-600">
                      QuarantinedCustomer.com encourages quarantined customers
                      to remember their favourite local businesses and reach out
                      to them to hear how they can remain customers or support
                      them throughout the quarantine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 sm:mb-0 flex flex-wrap">
                <div className="flex w-full sm:w-1/2 p-6">
                  <div className="flex flex-wrap content-center text-center sm:text-right">
                    <h3 className="w-full text-3xl text-gray-800 font-bold leading-none mb-12 sm:mb-3">
                      Matchmaking
                    </h3>
                    <p className="text-gray-600">
                      We propose a matchmaking service that allows businesses to
                      list themselves, talk about their struggles and how they
                      are trying to survive. We encourage business owners to
                      reach and and ask for help, if they need technical
                      assistance setting up a live stream, someone in their
                      community is bound to know. This is where the
                      QuarantinedCustomer comes in, we encourage customers to
                      step up and volunteer their skills and expertise. Create a
                      profile, list your skills and we'll match you to the
                      business where you can do the most good.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                  <UndrawProjectCompletedSvg className="w-full h-64 mx-auto" />
                </div>
              </div>

              <div className="mb-12 sm:mb-0 flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <UndrawTypewriterSvg className="w-full h-64 mx-auto" />
                </div>
                <div className="flex w-full sm:w-1/2 p-6 mt-6">
                  <div className="flex flex-wrap content-center text-center sm:text-left">
                    <h3 className="w-full text-3xl text-gray-800 font-bold leading-none mb-12 sm:mb-3">
                      MVP
                    </h3>
                    <p className="text-gray-600">
                      Our MVP is a simple information collection form, we will
                      follow up on every submission to get create a more
                      detailed profile of each business and customer that signs
                      up. We'll do the matching and get people talking. If
                      there's interest we can automate the process with a web
                      app that collects the information and possibly does the
                      matching as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*
          <section className="bg-white border-b py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
                Title
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
              </div>

              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-600 text-base px-6 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="flex items-center justify-start">
                    <button className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                      Action
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-600 text-base px-6 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                      Action
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className=" text-gray-600 text-base px-6 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="flex items-center justify-end">
                    <button className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          */}

          <section className="gradient w-full mx-auto text-center p-6 pt-6 pb-12">
            <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-white">
              It takes 5 minutes to save a local business
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
            </div>

            <h3 className="my-4 text-2xl font-extrabold">
              Beat corona, not the entrepreneurs
            </h3>

            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
              <Link to="#top">Join the effort</Link>
            </button>
          </section>

          <footer className="bg-white ">
            <div className="container mx-auto mt-8 px-8">
              <div className="w-full flex flex-col md:flex-row py-6">
                <div className="flex-1 mb-6 mr-12">
                  <a
                    className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    href="#"
                  >
                    {/*
                    <svg
                      className="h-6 w-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
                    </svg>
                    */}
                    {defaultTitle}
                  </a>
                </div>

                {/*
                <div className="flex-1">
                  <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                    Links
                  </p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="#"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="#"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Help
                      </a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="mailto:support@clerk.ai"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
                */}
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
                        href="https://www.iubenda.com/privacy-policy/82474744/cookie-policy"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Cookie Policy
                      </a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="https://www.iubenda.com/privacy-policy/82474744"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                {/*
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
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="#"
                        target="_blank"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Linkedin
                      </a>
                    </li>
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
                    */}
                {/*
                <div className="flex-1">
                  <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                    Company
                  </p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="#"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Official Blog
                      </a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="#"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a
                        href="#"
                        className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                */}
              </div>
            </div>
          </footer>
        </div>
      </View>
    );
  }
}
