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
	// Calculate progress percentage for mobile slider
	const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

	return (
		<>
			{/* Mobile Progress Slider */}
			<div className="w-full md:hidden">
				<div className="px-2 mb-2 flex justify-between text-sm font-medium">
					<span className="text-black">
						Step {currentStep + 1} of {totalSteps}
					</span>
					<span className="text-black">
						{Math.round(progressPercentage)}%
					</span>
				</div>
				<div className="h-1 w-full flex items-center bg-gray-200">
					<div
						className="h-1 bg-black transition-all duration-300 ease-in-out"
						style={{ width: `${progressPercentage}%` }}
					/>
					<div className="w-4 h-4 bg-black rounded-full translate-x-[-50%]"></div>
				</div>
			</div>

			{/* Desktop Multi-step Indicator */}
			<div className="hidden md:block w-full">
				<div className="flex justify-between items-center px-4">
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
                                    ${
										index <= currentStep
											? "text-black"
											: "text-gray-400"
									}`}
								>
									{step.stepTitle}
								</span>
							</div>
							{index < totalSteps - 1 && (
								<div
									className={`w-24 h-0.5 mx-2
                                    ${
										index < currentStep
											? "bg-black"
											: "bg-gray-300"
									}`}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default StepIndicator;
