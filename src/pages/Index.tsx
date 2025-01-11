import { useState } from "react";
import { TemplateCard } from "@/components/TemplateCard";
import { ConfigForm } from "@/components/ConfigForm";
import { useToast } from "@/components/ui/use-toast";

const TEMPLATES = [
  {
    id: "basic",
    title: "Basic DApp",
    description: "A simple DApp template with wallet connection and basic Polygon integration",
    features: ["Wallet Connect", "Basic Transactions", "Polygon SDK"],
  },
  {
    id: "nft",
    title: "NFT DApp",
    description: "Template for creating and managing NFTs on Polygon",
    features: ["NFT Minting", "Gallery View", "Metadata Support"],
  },
  {
    id: "token",
    title: "Token DApp",
    description: "Launch your own token on Polygon with this template",
    features: ["ERC-20", "Token Transfer", "Supply Management"],
  },
];

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleGenerate = (data: { name: string; description: string }) => {
    toast({
      title: "DApp Template Generated!",
      description: `Created ${data.name} using the ${selectedTemplate} template`,
    });
  };

  return (
    <div className="min-h-screen bg-polygon-light">
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-polygon-dark mb-4">
            Polygon DApp Factory
          </h1>
          <p className="text-lg text-gray-600">
            Choose a template and start building on Polygon in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {TEMPLATES.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              features={template.features}
              selected={selectedTemplate === template.id}
              onSelect={() => handleTemplateSelect(template.id)}
            />
          ))}
        </div>

        {selectedTemplate && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Configure Your DApp</h2>
            <ConfigForm onSubmit={handleGenerate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;