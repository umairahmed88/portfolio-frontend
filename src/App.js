import React from "react";
import "./App.scss";
import {
	About,
	Contact,
	Header,
	Skills,
	Testimonial,
	Work,
} from "./container/index.container";
import { Navbar } from "./components/index.components";

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Contact />
		</div>
	);
};

export default App;
