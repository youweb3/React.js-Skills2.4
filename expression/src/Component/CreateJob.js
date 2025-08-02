import React from 'react'

//when you create component use rafc is automaticlly creat function you dont need to type manualy
////////////////Pracice:
//1. Now add the actual number of jobs using JSX.Expression to return value using{}
//just add actual number to returen value

//2. Create a function countJob and return jobs, Display it on web page
//define function to return variable, which dynamically being also applicable and return

//3. When no jobs are running, ensure that we print as No job to schedule, else return jobs running on your webpage.


const CreateJob = () => {
    const jobCount = 10;
    const countJob = () =>{
//instead of write multiple code with if/else we can use ternary operation:

        // if (jobCount === 0) {
        //     return 'no job to schedule today !!!'
            
        // } else {
        //     return `Today Count for Running Job: ${jobCount}`;
            
        // }

        ////////////////

        return jobCount === 0 ? 'No job to schedule today !!!' : `Today Count for Running Job: ${jobCount}`;
    }
  return (
    <div>
    <h1>Job:{countJob()}</h1>
    </div>
  );
}

export default CreateJob
