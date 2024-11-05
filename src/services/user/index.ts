/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";

const userServices = {
    getAllUsers: () => instance.get('/api/user'),
    
    updatedUser: (id: string, data: any) =>
        instance.put('/api/user', { id, data }),

    deleteUser: (id: string, token:string) => instance.delete(`/api/user/${id}`,{
        headers: {
            'Authorization': `Bearer ${token}`,
        },        
    }),

};

export default userServices; 