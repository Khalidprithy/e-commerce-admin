import Link from 'next/link';
import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdDashboard, MdPeopleAlt } from 'react-icons/md';
export default function Sidebar() {
  const mainMenu = [
    {
      id: '13245sada',
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: MdDashboard,
      color: '#D35400 ',
    },
    {
      id: '1324gfdsasada',
      name: 'Product',
      path: '/admin/product',
      icon: FaShoppingBasket,
      color: '#27AE60 ',
    },
    {
      id: '13245dsasada',
      name: 'Customer',
      path: '/admin/customer',
      icon: MdPeopleAlt,
      color: '#D35400 ',
    },
    {
      id: '1gas3245sada',
      name: 'Orders',
      path: '/admin/orders',
      icon: IoIosPaper,
      color: '#D35400 ',
    },
    {
      id: '132dsa45sada',
      name: 'Cart',
      path: '/admin/cart',
      icon: BsFillCartCheckFill,
      color: '#28B463 ',
    },
  ];

  return (
    <div className="fixed z-40 menu p-2 mt-16 pb-16 w-16 md:w-40 h-[calc(100vh-64px)] bg-gray-800 pt-5 text-base-content transition-all ease-in-out duration-500">
      <ul>
        {mainMenu.map((menu) => (
          <li key={menu.id}>
            <Link
              href={menu?.path}
              className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700"
            >
              {React.createElement(menu.icon, {
                className: `text-2xl`,
                style: { color: menu.color },
              })}{' '}
              <span className="font-semibold hidden md:block">{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
