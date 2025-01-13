import type { NextApiRequest, NextApiResponse } from 'next';
import  signUp  from '@/services/auth/services';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method === 'POST') {
        await signUp(req.body, (status: boolean) => {
            if (!status) {
                res
                    .status(200)
                    .json({ status: true, message: 'Sukses' });
            } else {
                res
                    .status(404)
                    .json({ status: true, message: 'Gagal' });
            }
        });
    } else {
        res
            .status(405)
            .json({ status: false, message: 'Tidak diinjinkan' });
    }


}