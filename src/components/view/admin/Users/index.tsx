import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/button";
import Head from "next/head";

type PropTypes = {
    users: any;
}



const AdminUsersView = (props: PropTypes) => {
    const { users } = props;
    return (
        <AdminLayout>
            <Head>
                <title>Admin | Users Management </title>
            </Head>
            <div className="text-xl font-bold">
                Admin Users Dashboard
            </div>
            <div className="card-table">
                <table className="table  align-middle text-gray-700 font-medium text-sm">
                    <thead className="">
                        <tr>
                            <th>#</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="border border-black">
                        {users.map((user: any, index: number) => (

                            <tr key={user.id} className="border-black">

                                <td>{index + 1}</td>
                                <td>{user.fullname}</td>
                                <td>{user.email}</td>

                                <td

                                    className={`
                                        ${user.role === "admin" 
                                            ? "bg-red-400" 
                                            : "bg-green-300"
                                        } px-2 py-1 rounded`}>

                                    {user.role}
                                </td>
                                <td>{user.phone}</td>
                                <td className="flex flex-row gap-2">
                                    <Button type="button">Edit</Button>
                                    <Button type="button">Hapus</Button>

                                </td>


                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

        </AdminLayout>
    )
}

export default AdminUsersView;
