import React from "react";
import PillInput from "./ui/PillInput";
import { FieldType } from "./MultiStepFormNew";
import CustomSelect from "./ui/CustomSelect";

interface FormStepProps {
	stepData: { stepTitle: string; fields: FieldType[] };
	formData: Record<string, string | number>;
	handleChange: (value: string | number, id: string) => void;
}

export const FormStep: React.FC<FormStepProps> = ({
	stepData,
	formData,
	handleChange,
}) => {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-4">
				{stepData.stepTitle}
			</h2>
			<div className="space-y-4">
				{stepData.fields.map((field) => {
					// Render input components based on field type
					switch (field.type) {
						case "text":
						case "number":
							return (
								<PillInput
									key={field.id}
									placeHolder={field.label}
									fieldName={field.id}
									value={formData[field.id] || ""}
									onChange={(value) =>
										handleChange(value, field.id)
									}
									type={field.type}
									required={field.required}
									pattern={
										field.type === "number"
											? "\\d*"
											: undefined
									}
								/>
							);

						case "dropdown":
							return (
								<CustomSelect
									key={field.id}
									options={field.options || []}
									placeholder={field.label}
									value={(formData[field.id] as string) || ""}
									onChange={(value) =>
										handleChange(field.id, value)
									}
								/>
							);

						default:
							return null;
					}
				})}
			</div>
		</div>
	);
};
