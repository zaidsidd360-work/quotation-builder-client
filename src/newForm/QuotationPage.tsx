import React from "react";

interface QuotationPageProps {
	monthlyBillAmount: number;
}

const QuotationPage: React.FC<QuotationPageProps> = ({ monthlyBillAmount }) => {
	// Calculate the yearly current bill based on the monthly amount provided
	const yearlyCurrentBill = monthlyBillAmount * 12;

	// Calculate total units consumed per year based on 45 cents per unit
	const totalUnitsConsumed = yearlyCurrentBill / 0.45;

	// Calculate the yearly solar price based on 25 cents per unit
	const yearlySolarPrice = totalUnitsConsumed * 0.25;

	// Calculate the annual savings
	const yearlySavings = yearlyCurrentBill - yearlySolarPrice;

	return (
		<div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-300 max-w-lg mx-auto mt-8">
			<h2 className="text-2xl font-semibold text-gray-800 mb-4">
				<span role="img" className="text-4xl" aria-label="party">
					🎉
				</span>{" "}
				Congratulations!
			</h2>
			<p className="text-gray-600 text-lg mb-6">
				Your estimated price with solar energy is:{" "}
				<span className="text-2xl font-bold text-green-600">
					${yearlySolarPrice.toLocaleString()} per year
				</span>
			</p>

			<div className="bg-gray-100 p-4 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold text-gray-700 mb-4">
					Yearly Cost Comparison
				</h3>
				<table className="w-full text-left text-gray-700">
					<thead>
						<tr>
							<th className="pb-2 text-center">Option</th>
							<th className="pb-2 text-center">Yearly Cost</th>
							<th className="pb-2 text-center">Units Consumed</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-t text-center">
							<td className="py-2 font-medium">Current Bill</td>
							<td className="py-2">
								${yearlyCurrentBill.toLocaleString()}
							</td>
							<td className="py-2">
								{totalUnitsConsumed.toFixed(2)} units
							</td>
						</tr>
						<tr className="border-t text-center">
							<td className="py-2 font-medium">With Solar</td>
							<td className="py-2 text-green-600">
								${yearlySolarPrice.toLocaleString()}
							</td>
							<td className="py-2">
								{totalUnitsConsumed.toFixed(2)} units
							</td>
						</tr>
					</tbody>
				</table>

				{/* Annual Savings Line */}
				<p className="text-lg font-semibold text-blue-600 mt-4">
					You will save approximately $
					{yearlySavings.toLocaleString()} annually!
				</p>
			</div>
		</div>
	);
};

export default QuotationPage;
