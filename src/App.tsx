import { useEffect, useState } from "react";
import "./App.css";
// import MultiStepFormNew, { FormStepType } from "./components/MultiStepFormNew";
import MultiStepForm from "./newForm/MultiStepForm";
import { FormStep } from "./newForm/types";

const dummyFormSteps: FormStep[] = [
	{
		stepTitle: "Fence Info",
		fields: [
			{
				options: ["Wood", "Vinyl", "Chain Link", "Aluminum"],
				_id: "673d21a49884470f8ed89c02",
				type: "dropdown",
				label: "Fence Material",
				id: "fence_material",
				placeholder: "Select fence material",
				required: true,
			},
			{
				options: [],
				_id: "673d21a49884470f8ed89c03",
				type: "number",
				label: "Fence Length (feet)",
				id: "fence_length",
				placeholder: "Enter total length in feet",
				required: true,
			},
			{
				options: [],
				_id: "673d21a49884470f8ed89c04",
				type: "number",
				label: "Fence Height (feet)",
				id: "fence_height",
				placeholder: "Enter height in feet",
				required: true,
			},
			{
				options: ["Standard", "Premium"],
				_id: "673d21a49884470f8ed89c05",
				type: "dropdown",
				label: "Fence Style",
				id: "fence_style",
				placeholder: "Select fence style",
				required: true,
			},
			{
				options: ["Front Yard", "Back Yard", "Both"],
				_id: "673d21a49884470f8ed89c06",
				type: "radio",
				label: "Installation Area",
				id: "installation_area",
				required: true,
			},
		],
	},
	{
		stepTitle: "Customer Info",
		fields: [
			{
				options: [],
				_id: "673d21a49884470f8ed89c08",
				type: "text",
				label: "Full Name",
				id: "full_name",
				placeholder: "Enter your name",
				required: true,
			},
			{
				options: [],
				_id: "673d21a49884470f8ed89c09",
				type: "text",
				label: "Property Address",
				id: "property_address",
				placeholder: "Enter your property address",
				required: true,
			},
			{
				options: [],
				_id: "673d21a49884470f8ed89c0a",
				type: "phone",
				label: "Phone Number",
				id: "phone_number",
				placeholder: "Enter your phone number",
				required: true,
			},
			{
				options: [],
				_id: "673d21a49884470f8ed89c0b",
				type: "email",
				label: "Email",
				id: "email",
				placeholder: "Enter your email address",
				required: false,
			},
		],
	},
	{
		stepTitle: "Extras",
		fields: [
			{
				options: ["None", "Single Gate", "Double Gate"],
				_id: "673d21a49884470f8ed89c0d",
				type: "dropdown",
				label: "Gate Option",
				id: "gate_option",
				placeholder: "Select gate option",
				required: false,
			},
			{
				options: ["Yes", "No"],
				_id: "673d21a49884470f8ed89c0e",
				type: "radio",
				label: "Stain or Sealant",
				id: "stain_sealant",
				required: false,
			},
			{
				options: ["Yes", "No"],
				_id: "673d21a49884470f8ed89c0f",
				type: "radio",
				label: "Include Decorative Elements",
				id: "decorative_elements",
				required: false,
			},
			{
				options: [],
				_id: "673d21a49884470f8ed89c10",
				type: "textarea",
				label: "Additional Comments",
				id: "comments",
				placeholder: "Enter any additional information or questions",
				required: false,
			},
		],
	},
];

const App: React.FC = () => {
	const [formSteps, setFormSteps] = useState<FormStep[]>(dummyFormSteps);
	const [clientName, setClientName] = useState<string>("");
	const [clientIndustry, setClientIndustry] = useState<string>("");
	const [loading, setLoading] = useState(true); // Add loading state

	useEffect(() => {
		// const fetchFormSteps = async () => {
		// 	try {
		// 		const response = await fetch(
		// 			"http://localhost:5000/api/forms/Fencing/671778939884470f8edb5c0e"
		// 		);
		// 		const data = await response.json();
		// 		console.log(data);
		// 		setClientName(data.name);
		// 		setClientIndustry(data.industry);
		// 		setFormSteps(data.formSteps);
		// 	} catch (error) {
		// 		console.error("Error fetching form steps:", error);
		// 	} finally {
		// 		setLoading(false); // Set loading to false after data is fetched
		// 	}
		// };

		// fetchFormSteps();
		setFormSteps(() => [...dummyFormSteps]);
		setLoading(false);
		setClientName("LiveWire");
		setClientIndustry("Fencing");
	}, []);

	// Display loading message until data is fully fetched
	if (loading) {
		return <p>Loading form steps...</p>;
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-max">
				<h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
					{clientName} {clientIndustry}
				</h1>
				<MultiStepForm
					steps={formSteps}
					onSubmit={(data) => console.log(data)}
					clientIndustry={clientIndustry} // Pass clientIndustry down
				/>
			</div>
		</div>
	);
};

export default App;
