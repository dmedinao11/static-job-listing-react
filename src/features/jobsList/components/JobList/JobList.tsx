import React from "react";
import Job from "../job/Job";
import { selectFilteredJobs } from "../../jobsListReducer";
import { useJobSelector } from "../../../../app/hooks";

const JobList = () => {
  const jobs = useJobSelector(selectFilteredJobs);
  return (
    <>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </>
  );
};

export default JobList;
