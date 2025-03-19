import { useState } from "react";
import {
  aboutItems,
  resourcesItems,
  socialLinks,
  toolboxItems,
} from "../constants/footer";

const Footer = () => {
  const [language, setLanguage] = useState("English");

  return (
    <footer className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 w-full">
          <div className="space-y-4 col-span-2">
            <img src="/images/blue-logo.svg" alt="blue logo" />

            <p className="text-gray-footer lg:text-sm lg:max-w-xs">
              VidAU - AI Video Ads for you.
              <br />
              Start successful video promo using VidAU AI Video Generator
            </p>

            <div className="flex space-x-3 py-2">
              {socialLinks.map((link) => (
                <img src={link.icon} alt={link.name} />
              ))}
            </div>

            <div className="relative inline-block text-left">
              <select
                className="bg-[#6d8dff] border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>

            <div className="text-xs text-gray-footer pt-4">
              Copyright © 2024 VidAU. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-300 mb-4">
              ToolBox
            </h3>
            <ul className="space-y-2">
              {toolboxItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-footer hover:text-primary-300 lg:text-md font-medium text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourcesItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-footer hover:text-primary-300 lg:text-md font-medium text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-300 mb-4">
              About Us
            </h3>
            <ul className="space-y-2">
              {aboutItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-footer hover:text-primary-300 lg:text-md font-medium text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
