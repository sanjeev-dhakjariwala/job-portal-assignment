import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import JobCard from "./JobCard";
import axios from "axios";
import { URL } from "../utils/index";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [allJob, setAllJob] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/addJob`)
      .then((response) => {
        console.log(response.data);
        setAllJob(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function openModal(open) {
    if (open) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  return (
    <div className="">
      <div className="flex justify-center">
        <button
          className="w-48 h-12 text-lg btn"
          onClick={() => openModal(true)}
        >
          Create Job
        </button>
      </div>
      {isOpen && <Modal openModal={openModal} step={"Step 1"} />}
      <div className="flex flex-wrap m-2">
        <div className="flex flex-wrap">
          {allJob.map((job) => {
            return (
              <div key={job.id}>
                <JobCard
                  jobTitle={job.jobTitle}
                  companyName={job.companyName}
                  industry={job.industry}
                  location={job.location}
                  remoteType={job.remoteType}
                  experience={job.experience}
                  salary={job.salary}
                  totalEmployee={job.totalEmployee}
                  applyType={job.applyType}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
