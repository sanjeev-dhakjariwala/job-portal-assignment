import React, {useState} from "react";
import Modal from "./Modal";

function App() {

  const[isOpen, setOpen] = useState(false);

  const toggleModal = () =>{
    setOpen(true);
  }
  return (
    <div className="flex justify-center">
      <button className="w-48 h-12 text-16 btn" onClick={toggleModal}>Create Job</button>
      {
        isOpen && <Modal />
      }
    </div>
  );
}

export default App;
