import Link from "next/link"

const Error404Page = () => {
    return (
        <div className="h-svh w-svw flex flex-col justify-center align-middle items-center gap-4">
            <h1 className="text-xl sm:text-3xl font-bold">Halaman yang anda cari tidak ada</h1>
            <Link href="/" className="bg-black text-white px-4 py-4 rounded-md hover:underline hover:bg-slate-800">Kembali ke Beranda</Link>
        </div>
    )
}
export default Error404Page