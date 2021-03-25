import React from "react";
import FilterTab from "./features/filter/components/filterTab/FilterTab";
import JobList from "./features/jobsList/components/JobList/JobList";
import Header from "./shared/header/Header";

function App() {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<FilterTab />
					<JobList />
				</div>
			</main>
		</>
	);
}

export default App;
