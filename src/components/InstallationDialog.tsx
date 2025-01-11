import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Terminal, Smartphone } from "lucide-react";

interface InstallationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstallationDialog({ open, onOpenChange }: InstallationDialogProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [showTermux, setShowTermux] = useState(true);

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
      setShowTermux(true);
      return;
    }

    const startInstallation = () => {
      setShowTermux(false);
      runStep(0);
    };

    // Auto-start installation after showing Termux info for 4 seconds
    const timer = setTimeout(startInstallation, 4000);
    return () => clearTimeout(timer);
  }, [open]);

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4">
          {showTermux ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-polygon-primary" />
                <h2 className="text-lg font-semibold">Android Setup Required</h2>
              </div>
              <div className="bg-black rounded-md p-4">
                <p className="text-gray-100 mb-4">To get started on Android, you'll need to install Termux first:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Download Termux from F-Droid store</li>
                  <li>Open Termux and wait for initial setup</li>
                  <li>Run: pkg update && pkg upgrade</li>
                  <li>Run: pkg install python</li>
                </ol>
              </div>
              <p className="text-sm text-gray-600">The installation will continue automatically in a few seconds...</p>
            </div>
          ) : (
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}