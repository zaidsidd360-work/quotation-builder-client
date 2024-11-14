import React from "react";

interface FencingFinalPageProps {
	onBookCall: () => void; // Function to handle booking a call
	onPermissionToCall: () => void; // Function to handle getting permission to call
}

const FencingFinalPage: React.FC<FencingFinalPageProps> = ({
	onBookCall,
	onPermissionToCall,
}) => {
	return (
		<div className="flex flex-col items-center justify-center bg-white p-6 text-center">
			<h2 className="text-xl font-semibold mb-4 text-gray-800">
				Thank you for sharing your details!
			</h2>
			<p className="text-gray-600 mb-6">
				You can book a call with our experts, or give us permission to
				reach out at your convenience.
			</p>

			<div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
				<button
					onClick={onBookCall}
					className="w-full sm:w-auto px-5 py-3 bg-blue-600 text-white rounded-lg font-medium transition hover:bg-blue-500 focus:outline-none"
				>
					Book a Call
				</button>
				<button
					onClick={onPermissionToCall}
					className="w-full sm:w-auto px-5 py-3 bg-green-600 text-white rounded-lg font-medium transition hover:bg-green-500 focus:outline-none"
				>
					Permission to Call Me
				</button>
			</div>
		</div>
	);
};

export default FencingFinalPage;
