import React, { useState } from "react";
import InputGroup from "./InputGroup";
import InputTwo from "./InputTwo";
import InputRadio from "./InputRadio";

const Modal = ({ openModal, step }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [stepModal, setStepModal] = useState(step);
  const onClickModal = () => {
    if (modalOpen) {
      setModalOpen(false);
      openModal(false);
    }
  };
  const onButtonClick = () => {
    setStepModal("Step 2");
  };
  return (
    <>
      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full p-8 border border-borderColor"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="flex flex-row-reverse">
                <span
                  class="text-sm hover:text-red-500 cursor-pointer"
                  onClick={onClickModal}
                >
                  Close
                </span>
              </div>
              <div className="p-4 w-577 h-564">
                <div className="flex justify-between">
                  <span className="text-2xl font-medium text-black-font mb-6">
                    Create a Job
                  </span>
                  <span className="text-right text-black-font font-bold text-base">
                    {stepModal}
                  </span>
                </div>
                {stepModal.includes("1") && (
                  <div>
                    <InputGroup
                      required={true}
                      label={"Job Title"}
                      placeholder={"ex. UX UI Designer"}
                    />
                    <InputGroup
                      required={true}
                      label={"Company Name"}
                      placeholder={"ex. Google"}
                    />
                    <InputGroup
                      required={true}
                      label={"Industry"}
                      placeholder={"ex. Information Technology"}
                    />
                    <div className="flex">
                      <div className="w-1/2 mr-6">
                        <InputGroup
                          required={false}
                          label={"Location"}
                          placeholder={"ex. Chennai"}
                        />
                      </div>
                      <div className="w-1/2">
                        <InputGroup
                          required={false}
                          label={"Remote Type"}
                          placeholder={"ex. In-office"}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {stepModal.includes("2") && (
                  <div>
                    <InputTwo
                      label={"Experience"}
                      placeholder1={"Minimum"}
                      placeholder2={"Maximum"}
                    />
                    <InputTwo
                      label={"Salary"}
                      placeholder1={"Minimum"}
                      placeholder2={"Maximum"}
                    />
                    <InputGroup required={false} label={"Total Employee"} placeholder={"ex. 100"}/>
                    <InputRadio />
                  </div>
                )}
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  className="w-68 inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-blue-btn text-base text-lg font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onButtonClick}
                >
                  {stepModal === "Step 1" ? "Next" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
