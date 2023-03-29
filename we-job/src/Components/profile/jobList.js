import "./styles/jobList.css";
const JobList = (props) => {
  const jobs = props.jobs;

  return (
    <div className="jobList">
      {jobs.map((job) => (
        <div className="jobPreview" key={job.id}>
          <h1 align="left">{job.title}</h1>
          <a href=""><h2>{job.author}</h2></a>
          <p id="job_preview_date" >Published <b>{job.date}</b></p>
          <p id="job_preview_description">{job.body}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
