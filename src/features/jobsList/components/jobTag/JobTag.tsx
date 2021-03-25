/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./JobTag.css";
import { useJobDispatch } from "../../../../app/hooks";
import { apply } from "../../../filter/filterSlice";

const JobTag = ({ tag }: { tag: string }) => {
	const dispatch = useJobDispatch();
	const handleTagClick = () => {
		dispatch(apply(tag));
	};
	return (
		<a className="job__filterTag" onClick={handleTagClick}>
			{tag}
		</a>
	);
};

export default JobTag;
