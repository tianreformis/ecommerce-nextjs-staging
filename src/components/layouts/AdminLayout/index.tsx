import Sidebar from "@/components/ui/Sidebar";
import { LayoutDashboard, Archive, Users2 } from 'lucide-react';
import Head from "next/head";


const listSidebarItems = [
    {
        title: 'Dashboard',
        url: '/admin',
        icon: <LayoutDashboard size={20} />,
    },
    {
        title: 'Products',
        url: '/admin/products',
        icon: <Archive size={20} />
    },
    {
        title: 'Users',
        url: '/admin/users',
        icon: <Users2 size={20} />
    },
]
type PropsTypes = {
    children: React.ReactNode,
    pageTitle: string,
    dashboardHeaderTitle: string,


}
const AdminLayout = (props: PropsTypes) => {
    const { children, pageTitle, dashboardHeaderTitle } = props;
    return (
        <div className="flex flex-row">
            <Sidebar lists={listSidebarItems} />
            <Head>
                <title>Admin | {pageTitle} </title>
            </Head>

            <div className="py-4 px-2">
                <div className="text-xl font-bold px-5">
                    {dashboardHeaderTitle}
                </div>
                {children}
            </div>
        </div>
    )
}


export default AdminLayout;