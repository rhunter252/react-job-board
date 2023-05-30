import jobsData from "../data/jobsData.json";

const JobCard = () => {
  return (
    <div className="w-full mx-4 md:mx-24 lg:mx-36">
      {jobsData.map((job) => (
        <div
          key={job.id}
          className="border-2 rounded-md p-4 mb-6 bg-white drop-shadow-xl border-l-4"
        >
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col  md:flex-row items-start md:items-center">
              <img
                className="w-12 md:w-30 ml-4 md:ml-0"
                src={job.logo}
                alt=""
              />
              <div className="mx-4">
                <div className="text-darkCyanHeader ">
                  {job.company}
                  {/* Conditionally render 'new' and 'featured' */}
                  {job.new && <span className="tag2">NEW!</span>}
                  {job.featured && <span className="tag3">FEATURED</span>}
                </div>
                <div className="font-bold">{job.position}</div>
                <div className="text-darkCyan ">
                  {job.postedAt} &#8226; {job.contract} &#8226; {job.location}
                </div>
              </div>
            </div>

            <div className="max-md:my-4">
              <hr className="border-t-2 w-full" />
            </div>

            <div className="flex flex-wrap md:items-center md:justify-around">
              <span className="tag">{job.role}</span>
              <span className="tag">{job.level}</span>
              <span className="tag">{job.contract}</span>

              {/* map over the languages and tools */}
              {job.languages.map((language) => (
                <span className="tag" key={language}>
                  {language}
                </span>
              ))}
              {job.tools.map((tool) => (
                <span className="tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
