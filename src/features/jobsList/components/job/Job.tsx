import React from "react";

import { IJob } from "../../../../app/jobList/job.interface";
import Card from "../../../../shared/card/Card";
import JobTag from "../jobTag/JobTag";

import "./Job.css";

const Job = ({ job }: { job: IJob }) => {
	const imagesRelativePath = "../../../../images/";
	return (
		<Card>
			<div className="job">
				<img className="job__logo" src={imagesRelativePath + job.logo} alt="logo" />
				<div className="job__description">
					<div className="job__tags">
						<h1 className="job__enterprise">{job.company}</h1>
						{job.new && <div className="job__chip job__chip--new">NEW!</div>}
						{job.featured && (
							<span className="job__chip job__chip--featured">FEATURED</span>
						)}
					</div>
					<h1 className="job__title">{job.position}</h1>
					<div className="job__info">
						{`${job.postedAt} · ${job.contract} · ${job.location}`}
					</div>
				</div>
				<div className="job__filterTags">
					<JobTag tag={job.role} />
					<JobTag tag={job.level} />
					{job.tools.map((tool, index) => (
						<JobTag key={index} tag={tool} />
					))}
					{job.languages.map((language, index) => (
						<JobTag key={index} tag={language} />
					))}
				</div>
			</div>
		</Card>
	);
};

export default Job;
