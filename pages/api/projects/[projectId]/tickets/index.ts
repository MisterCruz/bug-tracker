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
            const tickets:any = await Project.findById(projectId);
            console.log(req.query.projectId);
            res.status(201).json(tickets.tickets);
        } catch(err) {
            res.status(500);
        }
    } 


    if (method === "POST") {
        try {
            Project.findByIdAndUpdate(
                projectId,
                { $push: {tickets: req.body}},
                {upsert: true, new: true}, function (err, result) {
                    console.log(err)
                }
            )
            
            res.status(201).json(req.body)
        } catch (err) {
            res.status(500)
        }
        
    }

}