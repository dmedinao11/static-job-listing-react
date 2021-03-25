/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "../../../../shared/card/Card";

import "./FilterTabs.css";
import FilterTag from "../filterTag/FilterTag";

import { useJobSelector, useJobDispatch } from "../../../../app/hooks";
import { removeAll } from "../../filterSlice";

const FilterTab = () => {
	const tags: string[] = useJobSelector((state) => state.filters.tags);
	const tagsToRender = tags.map((tag, key) => <FilterTag tag={tag} key={key} />);

	const showClass = tagsToRender.length > 0 ? "filterTab--show" : "filterTab--hide";

	const dispatch = useJobDispatch();

	const handleClear = () => {
		dispatch(removeAll());
	};

	return (
		<div className={"filterTab " + showClass}>
			<Card>
				<div className="filterTab__container">
					<section className="filterTab__tags">{tagsToRender}</section>
					<a className="filterTab__clear" onClick={handleClear}>
						Clear
					</a>
				</div>
			</Card>
		</div>
	);
};

export default FilterTab;
