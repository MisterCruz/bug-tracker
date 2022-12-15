import React from "react";

const SelectedTicket = ({ ticketRes }) => {
  return (
    <div className="flex m-10">
      <div>
      <h1 className="font-bold text-[#1f2937] dark:text-gray-400">
        Ticket
      </h1>
      <p>Description</p>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit Ticket
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete Ticket
      </button>
      </div>
      <div>
      <h2>{ticketRes.title}</h2>
      <p>{ticketRes.desc}</p>
      <button className="bg-slate-500 text-white font-bold py-2 px-4 rounded-full">
        {ticketRes.status}
      </button>
      </div>
    </div>
  );
};

export default SelectedTicket;
