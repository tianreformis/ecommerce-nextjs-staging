/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { retrieveDataById } from '@/lib/firebase/service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1]; //membuat token untuk mengambil UserID
    if (token) {
      jwt.verify(token, process.env.NEXTAUTH_SECRET || '',
        async (err: any, decoded: any) => {
          if (decoded) {

            const profile = await retrieveDataById('users', decoded.id);

            return res.status(200).json({
              status: true,
              statuscode: 200,
              message: 'success',
              data: profile,
            })
          }
        })
    }
  }
}