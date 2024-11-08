// MultiStepForm.tsx
import React, { useState } from "react";
import { FormStep } from "./FormStep";

export type FieldType = {
	_id: string;
	type: "text" | "number" | "dropdown";
	label: string;
	id: string;
	placeholder: string;
	required: boolean;
	options?: string[];
};

export type FormStepType = {
	stepTitle: string;
	fields: FieldType[];
};

interface MultiStepFormProps {
	formSteps: FormStepType[];
}

const MultiStepFormNew: React.FC<MultiStepFormProps> = ({ formSteps }) => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [formData, setFormData] = useState<Record<string, string | number>>(
		{}
	);

	const handleChange = (value: string | number, id: string) => {
		setFormData((prevData) => ({ ...prevData, [id]: value }));
	};

	const nextStep = () => {
		if (currentStep < formSteps.length - 1) setCurrentStep(currentStep + 1);
	};

	const prevStep = () => {
		if (currentStep > 0) setCurrentStep(currentStep - 1);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form Data Submitted:", formData);
		alert("Form submitted!");
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
			<FormStep
				stepData={formSteps[currentStep]}
				formData={formData}
				handleChange={handleChange}
			/>
			<div className="flex justify-between mt-6">
				{currentStep > 0 && (
					<button
						type="button"
						onClick={prevStep}
						className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
					>
						Previous
					</button>
				)}
				{currentStep < formSteps.length - 1 ? (
					<button
						type="button"
						onClick={nextStep}
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
					>
						Next
					</button>
				) : (
					<button
						type="submit"
						className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
					>
						Submit
					</button>
				)}
			</div>
		</form>
	);
};

export default MultiStepFormNew;
