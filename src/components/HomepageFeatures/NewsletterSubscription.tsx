const NewsletterSubscription = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-10">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-4">Stay updated with the latest news and resources from AIBuddies.</p>
      <input type="email" placeholder="Your email" className="p-2 rounded-l-lg border border-gray-300" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">Subscribe</button>
    </section>
  );
};

export default NewsletterSubscription;
