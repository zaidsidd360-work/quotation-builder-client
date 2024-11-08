/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { FormStep, FormData } from "./types";
import FormStepComponent from "./FormStepComponent";
import StepIndicator from "./StepIndicator";

interface MultiStepFormProps {
	steps: FormStep[];
	onSubmit: (data: FormData) => void;
}

const MultiStepForm = ({ steps, onSubmit }: MultiStepFormProps) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState<FormData>({});

	const handleNextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep((current) => current + 1);
		}
	};

	const handlePrevStep = () => {
		if (currentStep > 0) {
			setCurrentStep((current) => current - 1);
		}
	};

	const handleFieldChange = (fieldId: string, value: any) => {
		setFormData((prev) => ({
			...prev,
			[fieldId]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (currentStep === steps.length - 1) {
			onSubmit(formData);
		} else {
			handleNextStep();
		}
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
			<StepIndicator
				totalSteps={steps?.length}
				currentStep={currentStep}
				steps={steps}
			/>

			<form onSubmit={handleSubmit} className="mt-8">
				<FormStepComponent
					step={steps[currentStep]}
					formData={formData}
					onChange={handleFieldChange}
				/>

				<div className="mt-8 flex justify-between items-center">
					<button
						type="button"
						onClick={handlePrevStep}
						disabled={currentStep === 0}
						className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 transition-colors
              ${
					currentStep === 0
						? "text-gray-400 cursor-not-allowed"
						: "text-gray-600 hover:bg-gray-300"
				}`}
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Previous
					</button>

					<button
						type="submit"
						className="flex items-center px-6 py-2.5 bg-black text-white rounded-lg 
              text-sm font-medium hover:bg-black/70 transition-colors"
					>
						{currentStep === steps.length - 1 ? (
							<>
								Submit
								<CheckCircle2 className="w-4 h-4 ml-2" />
							</>
						) : (
							<>
								Next
								<ArrowRight className="w-4 h-4 ml-2" />
							</>
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default MultiStepForm;
