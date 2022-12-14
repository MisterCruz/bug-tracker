// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../../models/Project';
import dbConnect from '../../../utils/mongo';
type Data = {
    name: string
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {
      method, 
      query: {projectId},
  } = req;

    dbConnect();

    if (method === "GET") {
      try {
        const project = await Project.findById(projectId)
        res.status(200).json(project)
      } catch (err) {
        res.status(500)
      }
    } 
}