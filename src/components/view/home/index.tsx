import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavbarHome } from '@/components/ui/navbar';
import { ContentHome } from '@/components/ui/content';

export default function HomeView() {
    const pathname = usePathname();

    return (
        <>
        <NavbarHome />
        <ContentHome />
        </>
    )
}
