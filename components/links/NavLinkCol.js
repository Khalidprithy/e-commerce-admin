import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinkCol({ href, children }) {
  const { pathname } = useRouter();
  let active = href === pathname;
  return (
    <Link
      className={`p-2 font-medium hover:text-green-500 duration-200 cursor-pointer  ${
        active ? 'text-green-500' : ''
      } `}
      href={href}
    >
      {children}
    </Link>
  );
}
