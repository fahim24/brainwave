import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex justify-center items-center w-[100vw] h-[100vh] ">
				<button
					className="font-bold border border-solid border-gray-300 px-5 py-3 bg-gray-200"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
