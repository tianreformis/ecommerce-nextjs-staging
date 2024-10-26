import Sidebar from "@/components/ui/sidebar";
import { LayoutDashboard, Archive, Users2 } from 'lucide-react';



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
}
const AdminLayout = (props: PropsTypes) => {
    const { children, } = props;
    return (
        <div className="flex">
            <Sidebar lists={listSidebarItems} />
            <div className="py-4 px-2">{children}
                </div>
        </div>
    )
}


export default AdminLayout;