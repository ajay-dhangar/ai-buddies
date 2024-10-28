import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Layout from "@theme/Layout";
import Header from "../ui/Header";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your registered email. If you don't receive an email, check your spam folder or contact support.",
  },
  {
    question: "How can I update my account information?",
    answer:
      "Go to the 'Account Settings' section in your profile. From there, you can update your personal details, change your email address, and modify other account settings.",
  },
  {
    question: "What is AIBuddies' refund policy?",
    answer:
      "We offer a 30-day money-back guarantee for all our courses. If you're not satisfied with your purchase, contact our support team for a full refund within 30 days of your purchase.",
  },
  {
    question: "How do I access the AI projects and resources?",
    answer:
      "Once you log in to your account, navigate to the 'Projects' section in the main menu. Here, you'll find a curated list of AI projects and resources that are updated regularly.",
  },
  {
    question: "Can I contribute to AIBuddies?",
    answer:
      "Yes, we welcome contributions from the community! You can contribute by suggesting new content, reporting issues, or submitting pull requests on our GitHub repository.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <Header title="Frequently Asked Questions" />
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Here are some of the most common questions we receive. Click on a
            question to view the answer.
          </p>

          {/* FAQ List */}
          <div className="space-y-6 text-left">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4"
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none dark:bg-gray-800 border-none rounded p-2"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item.question}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-gray-600 dark:text-gray-400 px-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
