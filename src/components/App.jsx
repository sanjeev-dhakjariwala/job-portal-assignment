import React, { useState } from "react";
import Modal from "./Modal";
import JobCard from "./JobCard";

function App() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
        <div>
          <JobCard />
        </div>
      </div>
    </div>
  );
}

export default App;
