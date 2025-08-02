const JobBoard = () => {
  const jobCounts = 4;
  const companyName = "Google";

  const getJobMessage = () => { //// we Use ternary for simple two-option choices
    // return jobCounts === 0
    //   ? `Today ${companyName} doesn't have any job openings.` // ← if true
    //   : `Today ${companyName} has ${jobCounts} job(s) available.`; // ← if false
    if (jobCounts === 0) {
      return `${companyName} doen't have any job for Today.`;
    } else if(jobCounts <=5) {
      return `${companyName} has a few job offer(${jobCounts} jobs).`;
    } else { 
      return `${companyName} has many job opening (${jobCounts} jobs).`;
    }
      
  };
  return (
    <div>
      <h1>Welcome to {companyName} Job Board </h1>
      <p>{getJobMessage()}</p>
      
      {/* simple calculation */}
      <p>Expected jobs next week: {Math.floor(jobCounts * 1.5)}</p>
    </div>
  );
};

export default JobBoard;
