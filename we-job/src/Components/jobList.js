import "./jobList.css";
const JobList = (props) => {
  const jobs = props.jobs;

  return (
    <div className="jobList">
      {jobs.map((job) => (
        <div className="jobPreview" key={job.id}>
          <h2>{job.title}</h2>
          <p>Written by {job.author}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
