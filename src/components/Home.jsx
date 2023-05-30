import JobCard from "./JobCard";
import jobsData from "../data/jobsData.json";

const Home = () => {
  return (
    <div className="h-full w-screen bg-lightCyan py-16">
      <div className="flex justify-center">
        <JobCard jobsData={jobsData} />
      </div>
    </div>
  );
};

export default Home;
