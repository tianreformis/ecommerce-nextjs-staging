import Sidebar from "@/components/ui/sidebar";
import { LayoutDashboard,Archive } from 'lucide-react';



const listSidebarItems = [
    {
        title: 'Dashboard',
        url: '/admin',
        icon:<LayoutDashboard size={20}/>,
    },
    {
        title: 'Products',
        url: '/admin/products',
        icon:<Archive size={20}/>
    },
]
type PropsTypes = {
    children: React.ReactNode,
}
const AdminLayout = (props: PropsTypes) => {
    const { children, } = props;
    return (
        <div className="">
            <Sidebar lists={listSidebarItems} />
            {children}
        </div>
    )



}


export default AdminLayout;