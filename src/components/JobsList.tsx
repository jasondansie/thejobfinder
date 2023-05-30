import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchJobs } from '../features/jobs/jobsSlice';


const JobsList = () => {
  
  const dispatch: AppDispatch = useDispatch();

  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const isLoading = useSelector((state: RootState) => state.jobs.isLoading);
  const error = useSelector((state: RootState) => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>{job.title} {job.flag}</div>
      ))}
    </div>
  );
};

export default JobsList;
