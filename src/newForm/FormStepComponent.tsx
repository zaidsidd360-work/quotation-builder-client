/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormStep, FormData, FormField } from "./types";
import {
	Dropdown,
	NumberField,
	RadioToggle,
	TextArea,
	TextField,
} from "./FormField";

interface FormStepComponentProps {
	step: FormStep;
	formData: FormData;
	onChange: (fieldId: string, value: any) => void;
}

const FormStepComponent = ({
	step,
	formData,
	onChange,
}: FormStepComponentProps) => {
	const renderField = (field: FormField) => {
		const props = {
			field,
			value: formData[field.id],
			onChange: (value: any) => onChange(field.id, value),
		};

		switch (field.type) {
			case "text":
				return <TextField {...props} />;
			case "number":
				return <NumberField {...props} />;
			case "radio":
				return <RadioToggle {...props} />;
			case "dropdown":
				return <Dropdown {...props} />;
			case "textarea":
				return <TextArea {...props} />;
			default:
				return null;
		}
	};

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-semibold text-gray-800">
				{step?.stepTitle}
			</h2>
			<div className="grid gap-6">
				{step?.fields.map((field) => (
					<div key={field._id}>{renderField(field)}</div>
				))}
			</div>
		</div>
	);
};

export default FormStepComponent;
