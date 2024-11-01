/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/button";
import { Edit, LucideDelete } from "lucide-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import Link from "next/link";



type PropTypes = {
    users: any;
}

const AdminUsersView = (props: PropTypes) => {
    const { users } = props;
    const [updatedUser, setUpdatedUser] = useState<any>({});
    const [usersData, setUsersData] = useState<any>([]);

    useEffect(() => {
        setUsersData(users);
    }, [users]);

    return (
        <>
            <AdminLayout>
                <Head>
                    <title>Admin | Users Management </title>
                </Head>
                <div className="text-xl font-bold px-5">
                    Admin Users Dashboard
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50 font-bold">
                            <tr className="font-bold">
                                <th scope="col" className="px-6 py-4 text-gray-900">No</th>
                                <th scope="col" className="px-6 py-4 text-gray-900">Nama Lengkap</th>
                                <th scope="col" className="px-6 py-4  text-gray-900">Role</th>
                                <th scope="col" className="px-6 py-4  text-gray-900">Email</th>
                                <th scope="col" className="px-6 py-4  text-gray-900">Nomor</th>
                                <th scope="col" className="px-6 py-4  text-gray-900">Aksi</th>

                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                            {usersData.map((user: any, index: number) => (
                                <tr className="hover:bg-gray-50 " key={user.id}>
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                        <div className="relative h-10 w-10">
                                            {/* <img
              className="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            /> */}
                                            {/* <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
                                            {index + 1}
                                        </div>

                                    </th>
                                    <td className="px-6 py-4">
                                        <span
                                            className="inline-flex items-center gap-1 rounded-full text-sm text-gray-900"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full"></span>
                                            {user.fullname}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${user.role === "admin"
                                                ? "text-red-600 bg-red-50 "
                                                : "text-green-600 bg-green-50 "} `}
                                        >
                                            <span className={`h-1.5 w-1.5 rounded-full ${user.role === "admin"
                                                ? "bg-red-600 "
                                                : "bg-green-600"} `}></span>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-black hover:underline cursor-text">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <span
                                                className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 hover:font-bold"
                                            >
                                                <Link href={user.phone != "" ? `https://wa.me/62${user.phone}` : `https://#`}>
                                                    {user.phone != "" ? user.phone : "Tidak ada Nomor"}
                                                </Link>
                                            </span>

                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-4">
                                            <Button
                                                type="button"
                                                onClick={() => setUpdatedUser(user)}
                                                variant="secondary"
                                            >
                                                <Edit />
                                            </Button>
                                            <Button type="button"
                                                variant="danger"
                                            >
                                                <LucideDelete />
                                            </Button>

                                        </div>
                                    </td>
                                </tr>

                            ))
                            }
                        </tbody>
                    </table>
                </div>

            </AdminLayout>
            {
                Object.keys(updatedUser).length && (
                    <ModalUpdateUser
                        updatedUser={updatedUser}
                        setUpdatedUser={setUpdatedUser}
                        setUsersData={setUsersData}

                    />
                )
            }
        </>
    )
}

export default AdminUsersView;
