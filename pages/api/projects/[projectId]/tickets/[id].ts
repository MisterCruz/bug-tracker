// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../../../../models/Project';
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
        const ticket = project.tickets.filter((t: { _id: { toString: () => (string | string[] | undefined)[]; }; }) => {
          return t._id.toString().includes(id)
        })
        console.log(ticket)
        res.json(ticket)
      } catch (err) {
        res.status(500)
      }
    } 

}