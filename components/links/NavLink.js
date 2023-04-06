import Link from "next/link";
import { useRouter } from 'next/router';



export default function NavLink({ href, children }) {
    const { pathname } = useRouter();
    let active = href === pathname
    console.log(pathname, active);

    return <Link className={active ? "underline" : ""} href={href}>{children}</Link>
}