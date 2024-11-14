import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { FormStep, FormData } from "./types";
import FormStepComponent from "./FormStepComponent";
import StepIndicator from "./StepIndicator";
import QuotationPage from "./QuotationPage";
import { findAverageBill } from "./helper";
import FencingFinalPage from "./FencingFinalPage";

interface MultiStepFormProps {
	steps: FormStep[];
	onSubmit: (data: FormData) => void;
	clientIndustry: string;
}

const MultiStepForm = ({
	steps,
	onSubmit,
	clientIndustry,
}: MultiStepFormProps) => {
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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

	// Check for the appropriate final page based on industry
	const isSolarIndustry = clientIndustry === "Solar";
	const isFencingIndustry = clientIndustry === "Fencing";

	return (
		<div className="sm:max-w-3xl w-[90vw] mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
			{currentStep < steps.length ? (
				<>
					<form onSubmit={handleSubmit} className="mt-8">
						<FormStepComponent
							step={steps[currentStep]}
							formData={formData}
							onChange={handleFieldChange}
						/>

						<div className="mt-8 flex justify-between items-center gap-5 bg-gray-200 p-2 md:p-3 rounded-xl">
							<button
								type="button"
								onClick={handlePrevStep}
								disabled={currentStep === 0}
								className={`flex items-center 
									px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium bg-gray-200 transition-colors
									${
										currentStep === 0
											? "text-gray-400 cursor-not-allowed"
											: "text-gray-600 hover:bg-gray-300"
									}`}
							>
								<ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
								Previous
							</button>

							<StepIndicator
								totalSteps={steps.length}
								currentStep={currentStep}
							/>

							<button
								type="submit"
								className="flex items-center 
									px-3 py-1.5 sm:px-6 sm:py-2.5 bg-black text-white rounded-lg text-xs sm:text-sm font-medium 
									hover:bg-black/70 transition-colors"
							>
								{currentStep === steps.length - 1 ? (
									<>
										Submit
										<CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
									</>
								) : (
									<>
										Next
										<ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
									</>
								)}
							</button>
						</div>
					</form>
				</>
			) : (
				<>
					{isSolarIndustry ? (
						<QuotationPage
							monthlyBillAmount={findAverageBill(
								formData.energy_bill || "0"
							)}
						/>
					) : isFencingIndustry ? (
						<FencingFinalPage
							onBookCall={() =>
								console.log("Book call for fencing")
							}
							onPermissionToCall={() =>
								console.log("Permission to call for fencing")
							}
						/>
					) : (
						<div className="text-center py-10">
							Please select a valid industry.
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default MultiStepForm;
