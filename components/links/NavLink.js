import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children }) {
  const { pathname } = useRouter();
  let active = href === pathname;

  return (
    <Link
      className={`p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer  ${
        active ? 'text-green-500 border-opacity-100' : ''
      } `}
      href={href}
    >
      {children}
    </Link>
  );
}
