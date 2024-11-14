interface StepIndicatorProps {
	totalSteps: number;
	currentStep: number;
}

const StepIndicator = ({ totalSteps, currentStep }: StepIndicatorProps) => {
	// Calculate progress percentage for mobile slider
	const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

	return (
		<>
			{/* Progress Slider for All Screen Sizes */}
			<div className="w-full">
				<div className="px-2 mb-2 flex justify-center sm:justify-between text-sm font-medium">
					<span className="text-black hidden sm:block">
						Step {currentStep + 1} of {totalSteps}
					</span>
					<span className="text-black">
						{Math.round(progressPercentage)}% done
					</span>
				</div>
				<div className="h-1 w-full flex items-center bg-gray-300">
					<div
						className="h-1 bg-black transition-all duration-300 ease-in-out"
						style={{ width: `${progressPercentage}%` }}
					/>
					<div className="w-4 h-4 bg-black rounded-full"></div>
				</div>
			</div>
		</>
	);
};

export default StepIndicator;
