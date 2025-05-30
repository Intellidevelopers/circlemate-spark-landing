
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import OnboardingProgress from "./OnboardingProgress";

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  nextAction?: () => void;
  previousAction?: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
  showSkip?: boolean;
}

const OnboardingLayout = ({
  children,
  currentStep,
  totalSteps,
  nextAction,
  previousAction,
  nextDisabled = false,
  nextLabel = "Next",
  showSkip = false,
}: OnboardingLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img
              src="/logo.png"
              alt="CircleMate Logo"
              className="w-24 h-24"
            />
          </Link>
        </div>

        <div className="mb-8">
          <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in">
          <div className="mb-8">{children}</div>

          <div className="flex justify-between mt-8">
            {previousAction ? (
              <Button
                variant="outline"
                onClick={previousAction}
                className="px-6"
              >
                Back
              </Button>
            ) : (
              <div></div>
            )}

            <div className="flex space-x-4">
              
              <Button
                onClick={nextAction}
                disabled={nextDisabled}
                className="px-6 text-white"
              >
                {nextLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
