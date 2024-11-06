import Sidebar from "@/components/ui/Sidebar";
import { LayoutDashboard, UserCircle2, Package2 } from 'lucide-react';
import Head from "next/head";


const listSidebarItems = [
    {
        title: 'Dashboard',
        url: '/member',
        icon: <LayoutDashboard size={20} />,
    },
    {
        title: 'Orders',
        url: '/member/orders',
        icon: <Package2 size={20} />
    },
    {
        title: 'Profile',
        url: '/member/profile',
        icon: <UserCircle2 size={20} />
    },
]
type PropsTypes = {
    children: React.ReactNode,
    pageTitle: string,
    dashboardHeaderTitle: string,


}
const MemberLayout = (props: PropsTypes) => {
    const { children, pageTitle, dashboardHeaderTitle } = props;
    return (
        <div className="flex flex-row">
            <Sidebar lists={listSidebarItems} />
            <Head>
                <title>Member | {pageTitle} </title>
            </Head>

            <div className="py-4 px-2">
                <div className="text-xl font-bold px-5">
                    {dashboardHeaderTitle}
                </div>
                <div className="px-5">
                {children}
                </div>
                
            </div>
        </div>
    )
}


export default MemberLayout;