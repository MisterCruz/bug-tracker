// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from "../../../utils/mongo.js";
import Project from '../../../models/Project';

type Data = {
    name: string
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const projects:any = await Project.find();
            res.status(201).json(projects);
        } catch(err) {
            res.status(500);
        }
    } 

    if (method === "POST") {
        try {
            const project = await Project.create(req.body);
            res.status(201).json(project);
        } catch (err) {
            res.status(500);
        }
    }
}