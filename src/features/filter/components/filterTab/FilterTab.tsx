/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "../../../../shared/card/Card";

import "./FilterTabs.css";
import FilterTag from "../filterTag/FilterTag";

const FilterTab = () => {
	return (
		<div className="filterTab">
			<Card>
				<div className="filterTab__container">
					<section className="filterTab__tags">
						<FilterTag tag="Frontend" />
						<FilterTag tag="CSS" />
						<FilterTag tag="JavaScript" />
					</section>
					<a className="filterTab__clear" onClick={console.log}>
						Clear
					</a>
				</div>
			</Card>
		</div>
	);
};

export default FilterTab;
