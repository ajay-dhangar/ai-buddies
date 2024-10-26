import Layout from "@theme/Layout";
import React from "react";
import List from "../../components/community/List";
import Header from "../../ui/Header";

const Community: React.FC = () => {
  return (
    <Layout
      title="Community"
      description="Join our community to connect with other AI enthusiasts, share projects, and learn together."
    >
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <Header title="Join Our Community" />
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
          Join our community to connect with other AI enthusiasts, share
          projects, and learn together.
        </p>
        <List />
      </div>
    </Layout>
  );
};

export default Community;
