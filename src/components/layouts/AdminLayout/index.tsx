import Sidebar from "@/components/ui/sidebar";

type PropsTypes = {
    children: React.ReactNode,
}
const AdminLayout = (props: PropsTypes) => {
    const { children, } = props;
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )



}


export default AdminLayout;