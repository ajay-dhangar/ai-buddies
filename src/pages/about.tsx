import Layout from "@theme/Layout";
import React from "react";
import Section from "../components/About/Section";
import Team from "../components/About/Team";
import CoreValues from "../components/About/CoreValues";
import OurMission from "../components/About/OurMission";

const About: React.FC = () => {
  return (
    <Layout
      title="About AIBuddies"
      description="Learn more about AIBuddies, your go-to resource for AI projects and learning paths."
    >
      <main className="bg-white dark:bg-gray-900 min-h-screen transition-all duration-300">
        <Section />
        <OurMission />
        <CoreValues />
        <Team />
      </main>
    </Layout>
  );
};

export default About;
