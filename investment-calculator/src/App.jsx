import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 0,
		annualInvestment: 0,
		expectedReturn: 0,
		duration: 10,
	});

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevState) => ({
			...prevState,
			[inputIdentifier]: +newValue,
		}));
	}

	const inputIsValid = userInput.duration > 0;

	return (
		<>
			<Header />
			<UserInput handleChange={handleChange} userInput={userInput} />
			{inputIsValid ? (
				<Results input={userInput} />
			) : (
				<p className="center">
					Please enter a duration greater than 0.
				</p>
			)}
		</>
	);
}

export default App;
