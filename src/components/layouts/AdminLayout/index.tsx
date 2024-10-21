type PropsTypes = {
    children: React.ReactNode,
}
const AdminLayout = (props: PropsTypes) => {
    const { 
        children, 
    } = props;

    <div>

        {children}
    </div>


}


export default AdminLayout;