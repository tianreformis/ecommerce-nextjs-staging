import AdminUsersView from "@/components/view/admin/Users";
import userServices from "@/services/user";
import { useEffect, useState } from "react";

const AdminUsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getAllUsers = async() => {
            const {data} = await userServices.getAllUsers();
            setUsers(data.data);
        };
        getAllUsers();
        
    }, []);
    console.log(users);
    
    return (
       <AdminUsersView users={users}/>
    )
}

export default AdminUsersPage;