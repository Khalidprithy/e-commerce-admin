import Link from 'next/link';

export default function ButtonLink({ href, children }) {
  return (
    <Link
      className={`text-white hover:text-white border border-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800`}
      href={href}
    >
      {children}
    </Link>
  );
}
