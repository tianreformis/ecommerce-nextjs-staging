import Link from "next/link"

type Propstypes={
    lists: Array<{
        title: string,
        url: string,
        icon: React.ReactNode
    }>
}
const Sidebar = (props:Propstypes) => {
    const { lists } = props;
    return (
        <div className="w-56 bg-blue-200 h-screen px-4 py-4 rounded-lg m-3 flex flex-col gap-4">
            <h1 className="font-bold text-lg my-4">Admin Panel</h1>
            {lists.map(item => (
                <div key={item.title} className="flex flex-row gap-3 justify-start items-center bg-slate-50 py-2 rounded-lg">
                    <div>
                        
                    </div>
                    {item.icon}<Link href={`${item.url}`}> {item.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;