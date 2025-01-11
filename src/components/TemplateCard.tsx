import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  title: string;
  description: string;
  features: string[];
  selected: boolean;
  onSelect: () => void;
}

export function TemplateCard({ title, description, features, selected, onSelect }: TemplateCardProps) {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-lg",
        selected && "border-polygon-primary ring-2 ring-polygon-primary"
      )}
      onClick={onSelect}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary">{feature}</Badge>
            ))}
          </div>
          <Button 
            className={cn(
              "w-full",
              selected ? "bg-polygon-primary hover:bg-polygon-primary/90" : "bg-gray-200 hover:bg-gray-300"
            )}
            onClick={onSelect}
          >
            {selected ? "Selected" : "Select Template"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}