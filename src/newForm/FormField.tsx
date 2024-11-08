/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormField } from "./types";

interface FieldProps {
	field: FormField;
	value: any;
	onChange: (value: any) => void;
}

export const TextField = ({ field, value, onChange }: FieldProps) => (
	<div className="relative">
		<input
			type="text"
			id={field.id}
			value={value || ""}
			onChange={(e) => onChange(e.target.value)}
			placeholder={field.placeholder}
			required={field.required}
			className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 
        focus:ring-2 focus:ring-blue-500/20 transition-all outline-none
        placeholder:text-gray-400 text-gray-700"
		/>
		<label
			htmlFor={field.id}
			className="absolute -top-2.5 left-2 px-1 text-xs font-medium text-gray-600 bg-white"
		>
			{field.label}
			{field.required && <span className="text-red-500 ml-1">*</span>}
		</label>
	</div>
);

export const NumberField = ({ field, value, onChange }: FieldProps) => (
	<div className="relative">
		<input
			type="number"
			id={field.id}
			value={value || ""}
			onChange={(e) => onChange(Number(e.target.value))}
			placeholder={field.placeholder}
			required={field.required}
			className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 
        focus:ring-2 focus:ring-blue-500/20 transition-all outline-none
        placeholder:text-gray-400 text-gray-700"
		/>
		<label
			htmlFor={field.id}
			className="absolute -top-2.5 left-2 px-1 text-xs font-medium text-gray-600 bg-white"
		>
			{field.label}
			{field.required && <span className="text-red-500 ml-1">*</span>}
		</label>
	</div>
);

export const RadioToggle = ({ field, value, onChange }: FieldProps) => (
	<div className="space-y-2">
		<label className="text-sm font-medium text-gray-700">
			{field.label}
			{field.required && <span className="text-red-500 ml-1">*</span>}
		</label>
		<div className="flex gap-4">
			{field.options?.map((option) => (
				<label
					key={option}
					className="flex items-center gap-2 cursor-pointer"
				>
					<div
						className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer
              ${value === option ? "bg-black" : "bg-gray-300"}`}
						onClick={() => onChange(option)}
					>
						<div
							className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
                ${
					value === option
						? "translate-x-4 bg-white"
						: "translate-x-0 bg-white"
				}`}
						/>
					</div>
					<span className="text-sm text-gray-600">{option}</span>
				</label>
			))}
		</div>
	</div>
);

export const Dropdown = ({ field, value, onChange }: FieldProps) => (
	<div className="relative">
		<select
			id={field.id}
			value={value || ""}
			onChange={(e) => onChange(e.target.value)}
			required={field.required}
			className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 
        focus:ring-2 focus:ring-blue-500/20 transition-all outline-none appearance-none
        text-gray-700 bg-white"
		>
			<option value="">{field.placeholder}</option>
			{field.options?.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
		<label
			htmlFor={field.id}
			className="absolute -top-2.5 left-2 px-1 text-xs font-medium text-gray-600 bg-white"
		>
			{field.label}
			{field.required && <span className="text-red-500 ml-1">*</span>}
		</label>
		<div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
			<svg
				className="w-4 h-4 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</div>
	</div>
);

export const TextArea = ({ field, value, onChange }: FieldProps) => (
	<div className="relative">
		<textarea
			id={field.id}
			value={value || ""}
			onChange={(e) => onChange(e.target.value)}
			placeholder={field.placeholder}
			required={field.required}
			rows={4}
			className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 
        focus:ring-2 focus:ring-blue-500/20 transition-all outline-none
        placeholder:text-gray-400 text-gray-700"
		/>
		<label
			htmlFor={field.id}
			className="absolute -top-2.5 left-2 px-1 text-xs font-medium text-gray-600 bg-white"
		>
			{field.label}
			{field.required && <span className="text-red-500 ml-1">*</span>}
		</label>
	</div>
);
