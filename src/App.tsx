import { useEffect, useState } from "react";
import "./App.css";
// import MultiStepFormNew, { FormStepType } from "./components/MultiStepFormNew";
import MultiStepForm from "./newForm/MultiStepForm";

const App: React.FC = () => {
	const [formSteps, setFormSteps] = useState([]);
	const [clientName, setClientName] = useState<string>("");

	useEffect(() => {
		// Fetch form steps from the API
		const fetchFormSteps = async () => {
			try {
				const response = await fetch(
					"http://localhost:5000/api/forms/Solar/6717720d9884470f8ecee0da"
				);
				const data = await response.json();
				console.log(data);
				setClientName(data.name);
				setFormSteps(data.formSteps);
			} catch (error) {
				console.error("Error fetching form steps:", error);
			}
		};

		fetchFormSteps();
	}, []);

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
