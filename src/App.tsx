import { useState } from "react";
import "./App.css";
// import MultiStepFormNew, { FormStepType } from "./components/MultiStepFormNew";
import MultiStepForm from "./newForm/MultiStepForm";

const dummyFormSteps = [
	{
		stepTitle: "Qualification",
		fields: [
			{
				options: ["Yes", "No"],
				_id: "672c494bcf46ae88baf54a31",
				type: "radio",
				label: "Are you the homeowner?",
				id: "is_homeowner",
				required: true,
			},
			{
				options: [
					"Less than $100",
					"$100-$200",
					"$201-$300",
					"$301-$400",
					"More than $400",
				],
				_id: "672c494bcf46ae88baf54a32",
				type: "dropdown",
				label: "Average Monthly Energy Bill",
				id: "energy_bill",
				placeholder: "Select your average monthly bill",
				required: true,
			},
			{
				options: [
					"Excellent (700+)",
					"Good (640-699)",
					"Fair (580-639)",
					"Poor (Below 580)",
				],
				_id: "672c494bcf46ae88baf54a33",
				type: "dropdown",
				label: "Credit Score Range",
				id: "credit_score",
				placeholder: "Select your credit score range",
				required: true,
			},
		],
	},
	{
		stepTitle: "Property Information",
		fields: [
			{
				options: [],
				_id: "672c494bcf46ae88baf54a35",
				type: "text",
				label: "Property Address",
				id: "property_address",
				placeholder: "Enter your property address",
				required: true,
			},
			{
				options: [],
				_id: "672c494bcf46ae88baf54a36",
				type: "number",
				label: "Roof Age (years)",
				id: "roof_age",
				placeholder: "Enter roof age in years",
				required: true,
			},
			{
				options: ["Flat", "Sloped", "Multiple levels"],
				_id: "672c494bcf46ae88baf54a37",
				type: "dropdown",
				label: "Roof Type",
				id: "roof_type",
				placeholder: "Select your roof type",
				required: true,
			},
		],
	},
	{
		stepTitle: "Energy Usage",
		fields: [
			{
				options: [],
				_id: "672c494bcf46ae88baf54a39",
				type: "number",
				label: "Square Footage of Home",
				id: "home_sqft",
				placeholder: "Enter home square footage",
				required: true,
			},
			{
				options: ["1-2", "3-4", "5+"],
				_id: "672c494bcf46ae88baf54a3a",
				type: "dropdown",
				label: "Number of Occupants",
				id: "occupants",
				placeholder: "Select number of occupants",
				required: true,
			},
			{
				options: ["Central AC", "Window Units", "Heat Pump", "None"],
				_id: "672c494bcf46ae88baf54a3b",
				type: "dropdown",
				label: "Cooling System Type",
				id: "cooling_system",
				placeholder: "Select cooling system type",
				required: false,
			},
		],
	},
	{
		stepTitle: "Additional Information",
		fields: [
			{
				options: ["Morning", "Afternoon", "Evening", "Weekend"],
				_id: "672c494bcf46ae88baf54a3d",
				type: "dropdown",
				label: "Preferred Installation Time",
				id: "preferred_time",
				placeholder: "Select preferred installation time",
				required: false,
			},
			{
				options: ["Yes", "No", "Not sure"],
				_id: "672c494bcf46ae88baf54a3e",
				type: "radio",
				label: "Interested in Battery Storage?",
				id: "battery_interest",
				required: false,
			},
			{
				options: [],
				_id: "672c494bcf46ae88baf54a3f",
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
	const [formSteps, setFormSteps] = useState(dummyFormSteps);
	const [clientName, setClientName] = useState<string>("LiveWire");

	// Since backend is not hosted yet, using dummy data
	// useEffect(() => {
	// 	// Fetch form steps from the API
	// 	const fetchFormSteps = async () => {
	// 		try {
	// 			const response = await fetch(
	// 				"http://localhost:5000/api/forms/Solar/6717720d9884470f8ecee0da"
	// 			);
	// 			const data = await response.json();
	// 			console.log(data);
	// 			setClientName(data.name);
	// 			setFormSteps(data.formSteps);
	// 		} catch (error) {
	// 			console.error("Error fetching form steps:", error);
	// 		}
	// 	};

	// 	fetchFormSteps();
	// }, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-max p-8">
				<h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
					{clientName} Solar
				</h1>
				<MultiStepForm
					steps={formSteps}
					onSubmit={(data) => console.log(data)}
				/>
				{/* {formSteps && formSteps.length > 0 ? (
					<MultiStepForm
						steps={formSteps}
						onSubmit={(data) => console.log(data)}
					/>
				) : (
					<p>Loading form steps...</p>
				)} */}
			</div>
		</div>
	);
};

export default App;
