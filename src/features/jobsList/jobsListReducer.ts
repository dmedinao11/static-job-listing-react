import { createReducer } from "@reduxjs/toolkit";
import { Contract, IJob, Level, Role } from "../../app/jobList/job.interface";
import { RootState } from "../../app/store";

const initialState: IJob[] = [
	{
		id: 1,
		company: "Photosnap",
		logo: "photosnap.svg",
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
		logo: "manage.svg",
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
		logo: "account.svg",
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
		logo: "myhome.svg",
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
		logo: "loop-studios.svg",
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
		logo: "faceit.svg",
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
		logo: "shortly.svg",
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
		logo: "insure.svg",
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
		logo: "eyecam-co.svg",
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
		logo: "the-air-filter-company.svg",
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
	if (state.filters.tags.length === 0) return state.jobs;

	const filterByTags = (item: IJob) => {
		return state.filters.tags.some(
			(tag) =>
				item.role === tag ||
				item.level === tag ||
				item.tools.includes(tag) ||
				item.languages.includes(tag)
		);
	};
	return state.jobs.filter(filterByTags);
};
