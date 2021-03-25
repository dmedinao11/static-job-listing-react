/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FilterTag.css";

const FilterTag = ({ tag }: { tag: string }) => {
	return (
		<div className="tag">
			<span className="tag__name">{tag}</span>
			<a className="tag__close">
				<FontAwesomeIcon icon={faTimes} />
			</a>
		</div>
	);
};

export default FilterTag;
