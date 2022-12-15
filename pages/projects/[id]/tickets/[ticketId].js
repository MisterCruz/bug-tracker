import React from "react";
import axios from "axios";
import SelectedTicket from "../../../../components/SelectedTicket";

const ticketId = ({ ticketRes }) => {
  return (
    <div>
      <SelectedTicket ticketRes={ticketRes[0]} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/projects/${params.id}/tickets/${params.ticketId}`
  );
  return {
    props: {
      ticketRes: res.data,
    },
  };
};

export default ticketId;
