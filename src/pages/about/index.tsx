import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function HomeView() {
    const pathname = usePathname();

    return (
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                    {/* <!-- logo - start --> */}
                    <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg>

                        Flowrift
                    </Link>
                    {/* <!-- logo - end -->
  
        <!-- nav - start --> */}
                    <nav className="hidden gap-12 lg:flex">
                        <Link href="/" className={`text-lg font-semibold transition duration-100 hover:text-indigo-500
                        ${pathname === '/'
                                ? " text-indigo-700"
                                : "text-gray-600"}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`text-lg font-semibold transition duration-100 hover:text-indigo-500
                        ${pathname === '/about'
                                ? " text-indigo-700"
                                : "text-gray-600"}`}>
                            Home
                        </Link>

                        
                    </nav>
                    {/* <!-- nav - end -->
  
        <!-- buttons - start --> */}
                    <Link href="/auth/login" className="hidden rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-600 focus-visible:ring md:text-base lg:inline-block">Login</Link>

                    <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>

                        Menu
                    </button>
                    {/* <!-- buttons - end --> */}
                </header>

                <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                    {/* <!-- content - start --> */}
                    <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to build the web</h1>

                        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

                        <form className="flex w-full gap-2 md:max-w-md">
                            <input placeholder="Email" className="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                            <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Sign up</button>
                        </form>
                    </div>
                    {/* <!-- content - end -->
  
        <!-- image - start --> */}
                    <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                        <Image
                            src="https://images.unsplash.com/photo-1620206343767-7da98185edd4?auto=format&q=75&fit=crop&w=1000" loading="lazy"
                            alt="Photo by Fakurian Design"
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                        />
                    </div>

                </section>
            </div>
        </div>
    )
}
