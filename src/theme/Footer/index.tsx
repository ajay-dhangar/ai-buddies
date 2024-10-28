import React from "react";
import Link from "@docusaurus/Link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 gradient-text">
            AIBuddies
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Your ultimate platform for learning AI with a comprehensive
            collection of resources, interactive tutorials, and practical
            projects. Start your journey to master AI and stay ahead of the
            curve.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 pl-2">
            <li className="list-none">
              <Link
                to="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/learning-paths"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Learning Paths
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/projects"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Projects Showcase
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/blog"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Resources
          </h3>
          <ul className="space-y-3 pl-2">
            <li className="list-none">
              <Link
                to="/docs"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Documentation
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/community"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Community
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/faq"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                FAQs
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/support"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Connect With Us
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Follow us on social media to stay updated with the latest news and
            updates.
          </p>
          <div className="flex space-x-6">
            <Link
              to="#"
              aria-label="Facebook"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="#"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} AIBuddies. All rights reserved. |
          Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
