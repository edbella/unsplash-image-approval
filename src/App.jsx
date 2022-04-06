import { useState } from "react";
import { AuthenticationProvider } from "./context/Authentication";
import Home from "./views/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<AuthenticationProvider>
			<div
        style={{
          paddingTop: 0,
					maxWidth: 468,
					width: "100%",
					height: "100vh",
          overflowY: "scroll",
          margin: "0 auto",
				}}
			>
				<Home />
			</div>
		</AuthenticationProvider>
	);
}

export default App;
