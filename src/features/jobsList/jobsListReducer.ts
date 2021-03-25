import { createReducer } from "@reduxjs/toolkit";
import { Contract, IJob, Level, Role } from "../../app/jobList/job.interface";
import { RootState } from "../../app/store";

import photosnap from "../../images/photosnap.svg";
import manage from "../../images/manage.svg";
import account from "../../images/account.svg";
import myhome from "../../images/myhome.svg";
import loopStudios from "../../images/loop-studios.svg";
import faceit from "../../images/faceit.svg";
import shortly from "../../images/shortly.svg";
import insure from "../../images/insure.svg";
import eyecamCo from "../../images/eyecam-co.svg";
import theAirFilterCompany from "../../images/the-air-filter-company.svg";

const initialState: IJob[] = [
	{
		id: 1,
		company: "Photosnap",
		logo: photosnap,
		new: true,
		featured: true,
		position: "Senior Frontend Developer",
		role: "Frontend" as Role,
		level: "Senior" as Level,
		postedAt: "1d ago",
		contract: "Full Time" as Contract,
		location: "USA Only",
		languages: ["HTML", "CSS", "JavaScript"],
		tools: []
	},
	{
		id: 2,
		company: "Manage",
		logo: manage,
		new: true,
		featured: true,
		position: "Fullstack Developer",
		role: "Fullstack" as Role,
		level: "Midweight" as Level,
		postedAt: "1d ago",
		contract: "Part Time" as Contract,
		location: "Remote",
		languages: ["Python"],
		tools: ["React"]
	},
	{
		id: 3,
		company: "Account",
		logo: account,
		new: true,
		featured: false,
		position: "Junior Frontend Developer",
		role: "Frontend" as Role,
		level: "Junior" as Level,
		postedAt: "2d ago",
		contract: "Part Time" as Contract,
		location: "USA Only",
		languages: ["JavaScript"],
		tools: ["React", "Sass"]
	},
	{
		id: 4,
		company: "MyHome",
		logo: myhome,
		new: false,
		featured: false,
		position: "Junior Frontend Developer",
		role: "Frontend" as Role,
		level: "Junior" as Level,
		postedAt: "5d ago",
		contract: "Contract" as Contract,
		location: "USA Only",
		languages: ["CSS", "JavaScript"],
		tools: []
	},
	{
		id: 5,
		company: "Loop Studios",
		logo: loopStudios,
		new: false,
		featured: false,
		position: "Software Engineer",
		role: "Fullstack" as Role,
		level: "Midweight" as Level,
		postedAt: "1w ago",
		contract: "Full Time" as Contract,
		location: "Worldwide",
		languages: ["JavaScript"],
		tools: ["Ruby", "Sass"]
	},
	{
		id: 6,
		company: "FaceIt",
		logo: faceit,
		new: false,
		featured: false,
		position: "Junior Backend Developer",
		role: "Backend" as Role,
		level: "Junior" as Level,
		postedAt: "2w ago",
		contract: "Full Time" as Contract,
		location: "UK Only",
		languages: ["Ruby"],
		tools: ["RoR"]
	},
	{
		id: 7,
		company: "Shortly",
		logo: shortly,
		new: false,
		featured: false,
		position: "Junior Developer",
		role: "Frontend" as Role,
		level: "Junior" as Level,
		postedAt: "2w ago",
		contract: "Full Time" as Contract,
		location: "Worldwide",
		languages: ["HTML", "JavaScript"],
		tools: ["Sass"]
	},
	{
		id: 8,
		company: "Insure",
		logo: insure,
		new: false,
		featured: false,
		position: "Junior Frontend Developer",
		role: "Frontend" as Role,
		level: "Junior" as Level,
		postedAt: "2w ago",
		contract: "Full Time" as Contract,
		location: "USA Only",
		languages: ["JavaScript"],
		tools: ["Vue", "Sass"]
	},
	{
		id: 9,
		company: "Eyecam Co.",
		logo: eyecamCo,
		new: false,
		featured: false,
		position: "Full Stack Engineer",
		role: "Fullstack" as Role,
		level: "Midweight" as Level,
		postedAt: "3w ago",
		contract: "Full Time" as Contract,
		location: "Worldwide",
		languages: ["JavaScript", "Python"],
		tools: ["Django"]
	},
	{
		id: 10,
		company: "The Air Filter Company",
		logo: theAirFilterCompany,
		new: false,
		featured: false,
		position: "Front-end Dev",
		role: "Frontend" as Role,
		level: "Junior" as Level,
		postedAt: "1mo ago",
		contract: "Part Time" as Contract,
		location: "Worldwide",
		languages: ["JavaScript"],
		tools: ["React", "Sass"]
	}
];

const jobsReducer = createReducer(initialState, (state) => state);

export default jobsReducer;

export const selectFilteredJobs = (state: RootState) => {
	return state.filters.tags.reduce((previus: IJob[], current: string) => {
		return previus.filter(
			(job: IJob) =>
				job.role === current ||
				job.level === current ||
				job.tools.includes(current) ||
				job.languages.includes(current)
		);
	}, state.jobs);
};
