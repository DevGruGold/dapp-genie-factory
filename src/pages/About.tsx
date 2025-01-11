import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-6">About The dApp Factory</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            The dApp Factory is a powerful tool designed to streamline the development of decentralized applications on the Polygon network. Our platform enables developers to quickly generate and deploy dApp templates, reducing development time and complexity.
          </p>
          
          <div className="mt-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Getting Started Guide</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="step1">
                <AccordionTrigger>Step 1: System Requirements</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Python 3.7 or higher installed on your computer</li>
                    <li>Node.js and npm (Node Package Manager)</li>
                    <li>A code editor (like Visual Studio Code)</li>
                    <li>Command line terminal (Terminal on Mac/Linux, Command Prompt on Windows)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step2">
                <AccordionTrigger>Step 2: Installing Python</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Visit <a href="https://www.python.org/downloads/" className="text-polygon-primary hover:underline" target="_blank" rel="noopener noreferrer">Python's official website</a></li>
                    <li>Download the latest version for your operating system</li>
                    <li>Run the installer</li>
                    <li>Important: Check "Add Python to PATH" during installation</li>
                    <li>Verify installation by opening terminal and typing:
                      <pre className="bg-gray-100 p-2 rounded mt-2">python --version</pre>
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step3">
                <AccordionTrigger>Step 3: Running the dApp Generator</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Save the Python script as <code>dapp_generator.py</code></li>
                    <li>Open your terminal/command prompt</li>
                    <li>Navigate to the folder containing the script:
                      <pre className="bg-gray-100 p-2 rounded mt-2">cd path/to/your/folder</pre>
                    </li>
                    <li>Run the script:
                      <pre className="bg-gray-100 p-2 rounded mt-2">python dapp_generator.py</pre>
                    </li>
                    <li>Wait for the script to complete all installations</li>
                    <li>The dApp will automatically launch in your browser at <code>http://localhost:5000</code></li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step4">
                <AccordionTrigger>Step 4: Troubleshooting Common Issues</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Python not found:</h4>
                      <p>Ensure Python is added to your system's PATH variable</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Permission errors:</h4>
                      <p>Try running the terminal as administrator (Windows) or using sudo (Mac/Linux)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Port already in use:</h4>
                      <p>Close other applications that might be using port 5000, or modify the port in the script</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

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