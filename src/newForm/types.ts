/* eslint-disable @typescript-eslint/no-explicit-any */
// types.ts
export interface FormField {
	_id: string;
	type: string;
	label: string;
	id: string;
	options?: string[];
	placeholder?: string;
	required?: boolean;
}

export interface FormStep {
	_id?: string;
	stepTitle: string;
	fields: FormField[];
}

export interface FormData {
	[key: string]: any;
}
