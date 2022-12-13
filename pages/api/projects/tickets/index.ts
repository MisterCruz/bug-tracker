// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Ticket from '../../../../models/Ticket';
import dbConnect from '../../../../utils/mongo';

type Data = {
    name: string
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const tickets:any = await Ticket.find();
            res.status(201).json(tickets);
        } catch(err) {
            res.status(500);
        }
    } 

    if (method === "POST") {
        try {
            const ticket = await Ticket.create(req.body);
            res.status(201).json(ticket);
        } catch (err) {
            res.status(500);
        }
    }
}