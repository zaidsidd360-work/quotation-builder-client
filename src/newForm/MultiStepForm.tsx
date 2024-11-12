import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { FormStep, FormData } from "./types";
import FormStepComponent from "./FormStepComponent";
import StepIndicator from "./StepIndicator";
import QuotationPage from "./QuotationPage";
import { findAverageBill } from "./helper";

interface MultiStepFormProps {
	steps: FormStep[];
	onSubmit: (data: FormData) => void;
}

const MultiStepForm = ({ steps, onSubmit }: MultiStepFormProps) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState<FormData>({});

	const handleNextStep = () => {
		if (currentStep < steps.length) {
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
		if (currentStep === steps.length) {
			onSubmit(formData);
		} else {
			handleNextStep();
		}
	};

	console.log(formData);

	return (
		<div className="sm:max-w-3xl w-[90vw] mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
			{currentStep < steps.length ? (
				<>
					<StepIndicator
						totalSteps={steps.length + 1}
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
				</>
			) : (
				<QuotationPage
					monthlyBillAmount={findAverageBill(
						formData.energy_bill || "0"
					)}
				/>
			)}
		</div>
	);
};

export default MultiStepForm;
