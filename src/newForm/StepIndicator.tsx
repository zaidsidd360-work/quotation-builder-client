import { Check } from "lucide-react";
import { FormStep } from "./types";

interface StepIndicatorProps {
	totalSteps: number;
	currentStep: number;
	steps: FormStep[];
}

const StepIndicator = ({
	totalSteps,
	currentStep,
	steps,
}: StepIndicatorProps) => {
	return (
		<div className="flex justify-between items-center">
			{steps.map((step, index) => (
				<div key={step._id} className="flex items-center">
					<div className="flex flex-col items-center text-center">
						<div
							className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
              ${
					index <= currentStep
						? "border-black bg-black text-white"
						: "border-gray-300 text-gray-300"
				}`}
						>
							{index < currentStep ? (
								<Check className="w-4 h-4" />
							) : (
								<span className="text-sm font-medium">
									{index + 1}
								</span>
							)}
						</div>
						<span
							className={`mt-2 text-xs font-medium
              ${index <= currentStep ? "text-black" : "text-gray-400"}`}
						>
							{step.stepTitle}
						</span>
					</div>
					{index < totalSteps - 1 && (
						<div
							className={`w-24 h-0.5 mx-2
              ${index < currentStep ? "bg-black" : "bg-gray-300"}`}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default StepIndicator;
