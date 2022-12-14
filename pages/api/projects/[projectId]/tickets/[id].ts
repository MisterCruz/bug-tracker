// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../../../../models/Project';
import Ticket from '../../../../../models/Ticket';
import dbConnect from '../../../../../utils/mongo';




type Data = {
    name: string
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {
      method, 
      query: {id, projectId},
  } = req;

    dbConnect();

    if (method === "GET") {
      try {
        const project = await Project.findById(projectId)
        const ticket = await project.findOne({ _id: id})
        res.status(200).json(ticket)
      } catch (err) {
        res.status(500)
      }
    } 

    if (method === "POST") {
      try {
        const ticket = await Ticket.create(req.body);
        res.status(201).json(ticket)
      } catch (err) {
        res.status(500)
      }
    }

}