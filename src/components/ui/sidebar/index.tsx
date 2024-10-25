/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link"
import { useRouter } from "next/router"
import Button from "../button"
import { signOut } from "next-auth/react"

type Propstypes = {
    lists: Array<{
        title: string,
        url: string,
        icon: React.ReactNode
    }>
}
const Sidebar = (props: Propstypes) => {
    const { lists } = props;
    const { pathname } = useRouter();
    return (
        <div className="w-56 bg-black h-screen px-4 py-4 rounded-lg m-3 flex flex-col gap-4">
            <h1 className="font-bold text-xl my-4 text-white text-center">Admin Panel</h1>
            <div className="flex flex-col justify-between gap-4">
                {lists.map((list, index) => (
                    <Link
                        key={list.title}
                        href={list.url}
                        className={`
                    flex flex-row gap-3 justify-start items-center  py-2 px-4 rounded-lg 
                ${pathname === list.url
                                ? "bg-white text-black font-bold "
                                : "bg-black text-white "
                            }} `}>

                        {list.icon}{list.title}
                    </Link>

                ))}
                <div className="flex flex-row justify-center py-5 ">
                    <Button
                        type="button"
                        onClick={() => signOut()}
                    >
                        Keluar
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;