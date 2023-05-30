import { useEffect, useState } from "react";
import jobsData from "../data/jobsData.json";

const JobCard = () => {
  return (
    <div className="w-full mx-4 md:mx-24 lg:mx-36">
      {jobsData.map((job) => (
        <div
          key={job.id}
          className="border-2 rounded-md p-4 mb-6 bg-white drop-shadow-xl"
        >
          <div className="flex justify-between">
            <div>
              <img src={job.logo} alt="" />
            </div>
            <div className="flex items-center justify-around"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
