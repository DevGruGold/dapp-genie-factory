import { Link } from "react-router-dom";
import { Mail, Factory, Github, ArrowRight, WhatsApp } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const handleEmailClick = () => {
    window.location.href = "mailto:xmrtsolutions@gmail.com?subject=dApp%20Factory%20Inquiry&body=I'm%20interested%20in%20building%20a%20dApp%20on%20Polygon.";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/50661500559?text=Hi,%20I'm%20interested%20in%20building%20a%20dApp%20on%20Polygon.";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-polygon-dark text-white">
        <nav className="container py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Factory className="h-6 w-6" />
            <span className="text-xl font-bold">dApp Factory</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-polygon-primary transition-colors">
              About
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-polygon-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </nav>
        <div className="container py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Build Your Polygon dApp in Minutes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose from our curated templates and start building your decentralized application on Polygon today.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-polygon-primary hover:bg-polygon-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="flex-grow bg-polygon-light">
        {children}
      </main>

      <footer className="bg-polygon-dark text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-300">
                The dApp Factory simplifies blockchain development on Polygon.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <button
                  onClick={handleEmailClick}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <WhatsApp className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} dApp Factory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}