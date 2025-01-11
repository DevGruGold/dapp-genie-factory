import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Terminal } from "lucide-react";

interface InstallationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstallationDialog({ open, onOpenChange }: InstallationDialogProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const steps = [
    { message: "Downloading Python installer...", duration: 2000 },
    { message: "Installing Python...", duration: 3000 },
    { message: "Setting up environment variables...", duration: 1500 },
    { message: "Cloning dApp template...", duration: 2000 },
    { message: "Installing dependencies...", duration: 2500 },
    { message: "Starting development server...", duration: 1500 },
  ];

  useEffect(() => {
    if (!open) {
      setStep(0);
      setProgress(0);
      setLog([]);
      return;
    }

    const runStep = async (currentStep: number) => {
      if (currentStep >= steps.length) {
        setTimeout(() => {
          setLog(prev => [...prev, "✨ Installation complete! Your dApp is ready."]);
          setTimeout(() => onOpenChange(false), 2000);
        }, 1000);
        return;
      }

      setLog(prev => [...prev, `> ${steps[currentStep].message}`]);
      
      const progressIncrement = 100 / steps.length;
      const progressInterval = steps[currentStep].duration / 10;
      
      for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, progressInterval));
        setProgress(prev => Math.min(prev + (progressIncrement / 10), 100));
      }

      setTimeout(() => {
        setStep(currentStep + 1);
        runStep(currentStep + 1);
      }, 500);
    };

    runStep(0);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Installing dApp Factory</h2>
            <Progress value={progress} className="w-full" />
            
            <div className="bg-black rounded-md p-4 space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-4 w-4 text-gray-400" />
                <p className="text-sm text-gray-400">Terminal</p>
              </div>
              <div className="space-y-2 font-mono text-sm text-gray-100">
                {log.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}