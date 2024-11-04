/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/button";
import { Edit, LucideDelete } from "lucide-react";
import { useEffect, useState } from "react";
import ModalUpdateUser  from "./ModalUpdateUser";
import Link from "next/link";
import ModalDeletedUser  from "./ModalDeletedUser";

type PropTypes = {
    users: any;
}

const AdminUsersView = (props: PropTypes) => {
    const { users } = props;
    const [updatedUser , setUpdatedUser ] = useState<any>({});
    const [deletedUser , setDeletedUser ] = useState<any>({});
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10); // Number of users per page
    const [usersData, setUsersData] = useState<any[]>([]);

    useEffect(() => {
        setUsersData(users);
    }, [users]);

    // Calculate total pages
    const totalPages = Math.ceil(usersData.length / usersPerPage);

    // Get current users
    const indexOfLastUser  = currentPage * usersPerPage;
    const indexOfFirstUser  = indexOfLastUser  - usersPerPage;
    const currentUsers = usersData.slice(indexOfFirstUser , indexOfLastUser );

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <AdminLayout
                dashboardHeaderTitle="Manajemen Pengguna"
                pageTitle="User  Management"
            >
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50 font-bold">
                            <tr className="font-bold">
                                <th scope="col" className="px-6 py-4 text-gray-900">No</th>
                                <th scope="col" className="px-6 py-4 text-gray-900">Nama Lengkap</th>
                                <th scope="col" className="px-6 py-4 text-gray-900">Role</th>
                                <th scope="col" className="px-6 py-4 text-gray-900">Email</th>
                                <th scope="col" className="px-6 py-4 text-gray-900">Nomor</th>
                                <th scope="col" className="px-6 py-4 text-gray-900">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                            {currentUsers.map((user: any, index: number) => (
                                <tr className="hover:bg-gray-50" key={user.id}>
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                        {index + 1 + (currentPage - 1) * usersPerPage}
                                    </th>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 rounded-full text-sm text-gray-900">
                                            {user.fullname}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${user.role === "admin" ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-black hover:underline cursor-text">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <Link href={user.phone ? `https://wa.me/62${user.phone}` : `https://#`}>
                                            {user.phone || "Tidak ada Nomor"}
                                        </Link>
                                    </td>
                                    <td className="px-6 py- 4">
                                        <div className="flex justify-end gap-4">
                                            <Button
                                                type="button"
                                                onClick={() => setUpdatedUser(user)}
                                                variant="secondary"
                                            >
                                                <Edit />
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="danger"
                                                onClick={() => setDeletedUser(user)}
                                            >
                                                <LucideDelete />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination controls */}
                <div className="flex justify-center gap-2 mt-4">
                    {Array(totalPages)
                        .fill(0)
                        .map((_, index) => (
                            <Button
                                key={index + 1}
                                type="button"
                                onClick={() => handlePageChange(index + 1)}
                                variant={currentPage === index + 1 ? "primary" : "secondary"}
                            >
                                {index + 1}
                            </Button>
                        ))}
                </div>

            </AdminLayout>
            {Object.keys(updatedUser).length && (
                <ModalUpdateUser
                    updatedUser={updatedUser}
                    setUpdatedUser={setUpdatedUser}
                    setUsersData={setUsersData}
                />
            )}
            {Object.keys(deletedUser ).length && (
                <ModalDeletedUser
                    deletedUser={deletedUser}
                    setDeletedUser={setDeletedUser}
                    setUsersData={setUsersData}
                />
            )}
        </>
    );
};

export default AdminUsersView;