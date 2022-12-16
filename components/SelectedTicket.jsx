import React from "react";

const SelectedTicket = ({ ticketRes }) => {
  return (
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead>
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                ID
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Ticket Title
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Description
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Status
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Edit
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticketRes._id}</td>
              <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                {ticketRes.title}
              </td>
              <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                {ticketRes.desc}
              </td>
              <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                <button className="bg-slate-500 text-white font-bold py-2 px-4 rounded-full">
                {ticketRes.status}
                </button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit Ticket
              </button>
              </td>
              <td>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete Ticket
              </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  );
};

export default SelectedTicket;
