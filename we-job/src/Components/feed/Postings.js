const Postings = (props) => {
  const jobs = props.jobs;

  return (
    <div id="post_main">
      {jobs.map((job) => (
        <div id="post" key={job.id}>
          <h2>Programmer</h2>
          <h3>Ubisoft</h3>
          <h3>Montreal, QC</h3>

          <p id="short_description">
            When you’re a Gameplay Programmer at Ubi Montreal, you have direct influence over the quality of the game that will end up in the players’ hands; there is a
          </p>
          <p id="date">Offer published 2 days ago</p>

        </div>
      ))}
    </div>
  );
};

export default Postings;
