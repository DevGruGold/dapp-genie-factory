import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-6">About The dApp Factory</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            The dApp Factory is a powerful tool designed to streamline the development of decentralized applications on the Polygon network. Our platform enables developers to quickly generate and deploy dApp templates, reducing development time and complexity.
          </p>
          <p className="text-lg mb-4">
            Whether you're building a simple token contract or a complex NFT marketplace, our templates provide a solid foundation for your blockchain project.
          </p>
          <div className="mt-8">
            <Link to="/" className="text-polygon-primary hover:text-polygon-primary/90">
              ← Back to Templates
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;