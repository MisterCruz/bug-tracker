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
            const tickets:any = await Project.findById(projectId);
            console.log(req.query.projectId);
            res.status(201).json(tickets.tickets);
        } catch(err) {
            res.status(500);
        }
    } 


    if (method === "POST") {
        try {
            let ticket = await Ticket.create(req.body)
            let result = await Project.findByIdAndUpdate(
                projectId,
                { $push: {tickets: ticket}},
                {upsert: true, new: true}, function (err, result) {
                    console.log(err)
                }
            )
            
            res.status(201).json(result)
        } catch (err) {
            res.status(500)
        }
        
    }

}