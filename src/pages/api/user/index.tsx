/* eslint-disable @typescript-eslint/no-explicit-any */
import { retrieveData } from '@/lib/firebase/service';
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
}

