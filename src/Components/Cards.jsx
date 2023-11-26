import React from "react";
import chromeLogo from "../images/logo-chrome.svg";
import firefoxLogo from "../images/logo-firefox.svg";
import operaLogo from "../images/logo-opera.svg";
import dotsBackground from "../images/bg-dots.svg";

// Higher Order Component
const withExtensionCard = (WrappedComponent) => {
  return function ExtensionCardWrapper(props) {
    const { logo, browser, minVersion, translateY, boxShadow } = props;

    return (
      <div
        className={`bg-white shadow-${boxShadow} text-center p-8 rounded lg:transform lg:translate-y-${translateY}`}
      >
        <img src={logo} alt={`${browser} Logo`} className="block mx-auto mb-4" />
        <h3 className="text-xl mb-4">{`Add to ${browser}`}</h3>
        <p className="text-sm">{`Minimum version ${minVersion}`}</p>
        <img src={dotsBackground} alt="" className="block mx-auto my-4" />
        <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75">
          Add & Install Extension
        </button>
      </div>
    );
  };
};

// Individual Card Component
const ExtensionCard = ({ logo, browser, minVersion, translateY, boxShadow }) => {
  // This component only contains the structure of the card
  // The styling and common logic are provided by the HOC
  return null;
};

// Applying the HOC to create enhanced ExtensionCard components
const EnhancedChromeCard = withExtensionCard(ExtensionCard);
const EnhancedFirefoxCard = withExtensionCard(ExtensionCard);
const EnhancedOperaCard = withExtensionCard(ExtensionCard);

// Parent Component
export default function Cards() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <article className="text-center mb-10">
        <h2 className="text-3xl mb-8 lg:text-4xl">Download the Extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favorite you’d like us to prioritize.
        </p>
      </article>

      <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <EnhancedChromeCard
          logo={chromeLogo}
          browser="Chrome"
          minVersion="62"
          translateY="0"
          boxShadow="2xl"
        />
        <EnhancedFirefoxCard
          logo={firefoxLogo}
          browser="Firefox"
          minVersion="55"
          translateY="10"
          boxShadow="2xl"
        />
        <EnhancedOperaCard
          logo={operaLogo}
          browser="Opera"
          minVersion="46"
          translateY="20"
          boxShadow="2xl"
        />
      </article>
    </section>
  );
}
