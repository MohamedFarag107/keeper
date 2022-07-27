import React, { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import NewNote from "../NewNote/NewNote";
import Notes from "../Notes/Notes";

function Keeper() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <>
      {show && <NewNote onClick={toggleModal} />}
      <div className="keeper container mx-auto px-4">
        <nav className="flex justify-between items-center py-8 text-2xl">
          <h1 className="font-bold ">Keeper</h1>
          <BsPlusSquareFill onClick={toggleModal} />
        </nav>
        <Notes />
      </div>
    </>
  );
}

export default Keeper;
