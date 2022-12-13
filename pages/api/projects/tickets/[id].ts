// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Ticket from '../../../../models/Ticket';
import dbConnect from '../../../../utils/mongo';


type Data = {
    name: string
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {
      method, 
      query: {id},
  } = req;

    dbConnect();

    if (method === "GET") {
      try {
        const ticket = await Ticket.findById(id)
        res.status(200).json(ticket)
      } catch (err) {
        res.status(500)
      }
    } 

    // if (method === "PUT") {
    //   try {
    //     const project = await Project.findByIdAndUpdate(id, req.body, {
    //       new: true,
    //     });
    //     res.status(201).json(project)
    //   } catch (err) {
    //     res.status(500)
    //   }
    // }

}