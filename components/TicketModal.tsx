import axios from "axios";
import React, { use, useState } from "react";

type projectIdProps = {
  projectId: string;
};

const TicketModal: React.FunctionComponent<projectIdProps> = ({
  projectId,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");

  const handleCreate = async () => {
    try {
      const newTicket = {
        title,
        desc,
        author,
        status,
      };

      await axios.post(
        `http://localhost:3000/api/projects/${projectId}/tickets`,
        newTicket
      );
      console.log(newTicket.author);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        New Ticket
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add new ticket</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Add a new project
                  </p>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pt-2"
                    placeholder="enter title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2"
                    placeholder="enter description"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pt-2"
                    placeholder="enter author"
                    onChange={(e) => setAuthor(e.target.value)}
                  />

                  <label
                    htmlFor="ticketStatus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="ticketStatus"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option selected>Choose a status...</option>
                    <option value="Not started">Not started</option>
                    <option value="In progress">In progress</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCreate}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default TicketModal;
