import React from "react";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import lightLogo from "../images/logo-bookmark.svg";

export default function Footer() {
  return (
    <>
      <section className="btn-blue px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white font-normal text-sm uppercase tracking-widest mb-8 text-center">
            35,000+ already joined
          </h3>
          <h2 className="text-white text-3xl mb-8 lg:text-4xl text-center lg:w-96 lg:mx-auto">
            Stay up to date with what we're doing
          </h2>

          <form className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
              className="w-full py-2 px-4 rounded shadow-lg text-sm"
            />
            <button
              type="submit"
              className="btn-red text-white py-2 px-4 rounded shadow-lg hover:opacity-75 md:w-40 text-sm"
            >
              Contact Us
            </button>
          </form>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: "hsl(229, 31%, 21%)",
        }}
        className="py-10 px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-col text-center md:flex-row md:justify-between">
          <div className="md:flex md:items-center md:gap-6 lg:gap-10">
            <img src={lightLogo} alt="" />

            <ul className="mt-6 md:mt-0 md:flex md:gap-6 lg:gap-10">
              <li>
                <button className="text-white uppercase text-sm tracking-wide">
                  Features
                </button>
              </li>
              <li className="my-4 md:my-0">
                <button className="text-white uppercase text-sm tracking-wide">
                  Pricing
                </button>
              </li>
              <li>
                <button className="text-white uppercase text-sm tracking-wide">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <ul className="flex items-center gap-4 lg:gap-10">
            <li>
              <button>
                <img src={facebookIcon} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={twitterIcon} alt="" />
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <p className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://www.linkedin.com/in/kevork-lepedjian/"
              rel="noreferrer"
              target="_blank"
            >
              Kevork Lepedjian
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
