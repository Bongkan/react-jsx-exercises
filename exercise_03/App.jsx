import React from "react";

const App = () => {
	const temperature = 25;

	return (
		<>
			<Header temperature={temperature} />
			<Main temperature={temperature} />
			<Footer temperature={temperature} />
		</>
	);
};

const Header = ({ temperature }) => {
	return (
		<div>
			<button type="button">ON / OFF</button>
			<span>Current Temperature {temperature} Celsius</span>
		</div>
	);
};

const Main = ({ temperature }) => {
	return (
		<div>
			<Temperature temperature={temperature} />
		</div>
	);
};

const Temperature = ({ temperature }) => {
	return <div> {temperature} Celcius</div>;
};

const Footer = () => {
	return (
		<div>
			<button type="button">UP</button>
			<button type="button">DOWN</button>
		</div>
	);
};

export default App;
