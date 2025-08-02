const JobBoard = () => {
  const jobCounts = 10;
  const companyName = "Google";

  const getJobMessage = () => {
    return jobCounts === 0
      ? `Today ${companyName} doesn't have any job openings.` // ← if true
      : `Today ${companyName} has ${jobCounts} job(s) available.`; // ← if false
  };
  return (
    <div>
      <h1>Welcome to {companyName} Job Board </h1>
      <p>{getJobMessage()}</p>
    </div>
  );
};

export default JobBoard;
