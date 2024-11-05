/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteData, retrieveData, updateData } from '@/lib/firebase/service';
import jwt from 'jsonwebtoken';
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
        const { data } = req.body;
        const {user }:any =req.query;
        const token = req.headers.authorization?.split(' ')[1] || ''; //membuat token untuk melindungi API
        jwt.verify(token, process.env.NEXTAUTH_SECRET || '', async (err: any, decoded: any) => {
            if (decoded && decoded.role === "admin") { //hanya user yang punya token dan role tertentu dapat hapus
                await updateData('users', user[1], data, (result: boolean) => {
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
            else {
                res.status(403).json({
                    status: false,
                    statuscode: 403,
                    mesagge: 'Access Denied',
                });
            }
        });

        
    }
    else if (req.method === 'DELETE') {
        const { user }: any = req.query;
        const token = req.headers.authorization?.split(' ')[1] || ''; //membuat token untuk melindungi API
        jwt.verify(token, process.env.NEXTAUTH_SECRET || '', async (err: any, decoded: any) => {
            if (decoded && decoded.role === "admin") { //hanya user yang punya token dan role tertentu dapat hapus
                await deleteData('users', user[1], (result: boolean) => {
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
            else {
                res.status(403).json({
                    status: false,
                    statuscode: 403,
                    mesagge: 'Access Denied',
                });
            }
        });


    }

}

