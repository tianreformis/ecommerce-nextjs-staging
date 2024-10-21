import { NavbarHome } from '@/components/ui/navbar';
import { ContentHome } from '@/components/ui/content';
import Head from 'next/head';
export default function HomeView() {


    return (
        <>
            <Head>
                <title>Tian Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarHome />
            <ContentHome />
        </>
    )
}
