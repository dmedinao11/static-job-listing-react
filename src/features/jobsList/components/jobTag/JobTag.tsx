/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./JobTag.css";

const JobTag = ({ tag }: { tag: string }) => {
	return <a className="job__filterTag">{tag}</a>;
};

export default JobTag;
