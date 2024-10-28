import React from "react";
import { FaPhoneAlt, FaEnvelope, FaComments } from "react-icons/fa";
import Layout from "@theme/Layout";
import Header from "../ui/Header";

const Support: React.FC = () => {
  return (
    <Layout
      title="Support Center"
      description="We’re here to help you. Choose a support option below to get started."
    >
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <Header title="Support Center" />
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            We’re here to help you. Choose a support option below to get
            started.
          </p>

          {/* Contact Options Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Support */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div className="text-blue-500 dark:text-blue-400 text-3xl mb-4">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reach out to our support team for immediate assistance via
                phone.
              </p>
              <a
                href="tel:+123456789"
                className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Email Support */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div className="text-blue-500 dark:text-blue-400 text-3xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Send us an email and we’ll get back to you as soon as possible.
              </p>
              <a
                href="mailto:ai.buddies.github.io@gmail.com"
                className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700"
              >
                ai.buddies.github.io@gmail.com
              </a>
            </div>

            {/* Live Chat Support */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div className="text-blue-500 dark:text-blue-400 text-3xl mb-4">
                <FaComments />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Live Chat
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Chat with a support representative in real-time for assistance.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 border-none">
                Start Chat
              </button>
            </div>
          </div>

          {/* Frequently Asked Questions Section */}
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  How do I reset my password?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  To reset your password, click on the "Forgot Password" link on
                  the login page and follow the instructions sent to your
                  registered email.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  How can I update my account information?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Go to the "Account Settings" section in your profile and
                  update your details accordingly.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  What is AIBuddies’ refund policy?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We offer a 30-day money-back guarantee for all our courses.
                  Contact support for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
