import React from "react";

const SelectedTicket = () => {
  return (
    <div className="flex flex-wrap justify-between m-10">
      <h1 className="font-bold text-[#1f2937] dark:text-gray-400">
        Selected Ticket
      </h1>
      <h2 className="">Ticket Name</h2>
      <p>Description</p>
      <p>Ticket Description</p>
      <button className="bg-slate-500 text-white font-bold py-2 px-4 rounded-full">
        Ticket Status
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit Ticket
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete Ticket
      </button>
    </div>
  );
};

export default SelectedTicket;
