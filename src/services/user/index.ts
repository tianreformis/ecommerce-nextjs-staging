/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";

const userServices = {
    getAllUsers: ()=> instance.get('/api/user'),
    updatedUser : (id:string, data:any) => 
        instance.put('/api/user',{id,data}),
}

export default userServices
 