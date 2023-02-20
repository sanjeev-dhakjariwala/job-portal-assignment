import React from "react";
import companyImageImg from "../img/netflix.svg";

const JobCard = ({jobTitle,companyName,industry,location,remoteType,experience,salary,totalEmployee,applyType}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="job-card bg-white shadow-md rounded-lg p-6 m-3 relative">
        <div className="flex items-center">
          <img
            src={companyImageImg}
            className="w-12 h-12 mr-4 self-start"
            alt="CompanyImage"
          ></img>
          <div className="flex flex-col">
            <span className="text-2xl text-black-font font-normal">
              {jobTitle}
            </span>
            <div>
              <span className="text-base text-black-font font-normal">
                {companyName} - {industry}
              </span>
            </div>
            <div>
              <span className="text-base text-cardLocation font-normal">
                {location} ({remoteType})
              </span>
            </div>
            <div className="mt-6 mb-2">
              <span className="text-base text-black-font font-normal">
                Part-Time (9.00 am - 5.00 pm IST)
              </span>
            </div>
            <div className="mb-2">
              <span className="text-base text-black-font font-normal">
                Experience ({experience.minimum} - {experience.maximum} years)
              </span>
            </div>
            <div className="mb-2">
              <span className="text-base text-black-font font-normal">
                INR (₹) {salary.minimum} - {salary.maximum} / Month
              </span>
            </div>
            <div className="mb-8">
              <span className="text-base text-black-font font-normal">
                {totalEmployee} Employees
              </span>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-32 h-10 bg-blue-btn text-base text-white font-medium py-2 px-4 rounded mr-6`}
              >
                Apply Now
              </button>
              <button
                className={`border border-blue-btn border-1 w-40 h-10 bg-white-500 text-base text-blue-btn font-medium py-2 px-4 rounded`}
              >
                External Apply
              </button>
            </div>
          </div>
        </div>
        <span className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500 cursor-pointer">Delete</span>
      </div>
    </div>
  );
};

export default JobCard;
