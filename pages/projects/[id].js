import axios from "axios";
import React from "react";
import TicketModal from "../../components/TicketModal";

const Projects = ({ project }) => {
  return (
    <div className="overflow-x-auto relative border-solid border-2 border-gray-200 shadow-md shaddow-inner">
      <div className="flex justify-between pb-5 pt-5 pr-5">
        <h1 className="font-bold float-left pl-5">{project.title}</h1>
        <TicketModal />
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Tickets
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Ticket Author
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {project.tickets.map((ticket) => (
            <>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {ticket.text}
                </th>
                <td className="py-4 px-6">{ticket.description}</td>
                <td className="py-4 px-6">{ticket.contributors}</td>
                <td className="py-4 px-6">{ticket.status}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/projects/${params.id}`
  );
  return {
    props: {
      project: res.data,
    },
  };
};

export default Projects;
