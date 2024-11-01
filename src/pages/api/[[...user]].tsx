/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteData, retrieveData, updateData } from '@/lib/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const users = await retrieveData('users');
        const data = users.map((user: any) => {
            delete user.password;
            return user;
        }
        );

        res.status(200).json({
            status: true,
            statuscode: 200,
            mesagge: 'success',
            data,
        });
    }
    else if (req.method === 'PUT') {
        const { id, data } = req.body;
        await updateData('users', id, data, (result: boolean) => {
            if (result) {
                res.status(200).json({
                    status: true,
                    statuscode: 200,
                    mesagge: 'success',
                });
            }
            else {
                res.status(400).json({
                    status: false,
                    statuscode: 400,
                    mesagge: 'failed',
                });
            }



        })
    }
    else if (req.method === 'DELETE') {
        const { id } :any = req.query;
        await deleteData('users', id, (result: boolean) => {
            if (result) {
                res.status(200).json({
                    status: true,
                    statuscode: 200,
                    mesagge: 'success',
                });
            }
            else {
                res.status(400).json({
                    status: false,
                    statuscode: 400,
                    mesagge: 'failed',
                });
            }
        })
    }
}

