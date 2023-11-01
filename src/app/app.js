import React from 'react';
import Router from '../router/router';
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init();

function App() {

	return (
		<div>
			<Router />
		</div>
	);
}
export default App;
