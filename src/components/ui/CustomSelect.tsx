import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
	options: string[];
	placeholder: string;
	value: string; // Current value from the parent
	onChange: (value: string) => void; // Handler for updating selected value
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	options,
	placeholder,
	value, // Receive the current value from parent
	onChange,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	// Toggle dropdown visibility
	const toggleDropdown = () => setIsOpen(!isOpen);

	// Handle option selection
	const handleOptionSelect = (option: string) => {
		onChange(option); // Notify parent about the change
		setIsOpen(false); // Close dropdown
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			className="relative w-full max-w-xs"
			ref={selectRef}
			aria-haspopup="listbox"
			aria-expanded={isOpen}
			aria-labelledby="custom-select"
		>
			<div
				className={`flex items-center justify-between w-full py-2 px-4 bg-white border rounded-full cursor-pointer ${
					isOpen ? "border-gray-500" : "border-gray-300"
				}`}
				onClick={toggleDropdown}
				aria-label="select"
			>
				<span className="text-gray-700">
					{value ? value : placeholder}
				</span>
				<ChevronDown
					className={`w-4 h-4 transition-transform duration-200 ${
						isOpen ? "transform rotate-180" : ""
					}`}
				/>
			</div>

			{/* Dropdown menu */}
			{isOpen && (
				<ul
					className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
					role="listbox"
				>
					{options.map((option) => (
						<li
							key={option}
							className={`cursor-pointer py-2 px-4 text-gray-700 hover:bg-gray-100 ${
								value === option
									? "bg-gray-200 font-semibold"
									: ""
							}`}
							onClick={() => handleOptionSelect(option)}
							role="option"
							aria-selected={value === option}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CustomSelect;
