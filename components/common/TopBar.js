import { MyContext } from '@/context/AuthContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import ButtonLink from '../links/ButtonLink';
import NavLink from '../links/NavLink';
import NavLinkCol from '../links/NavLinkCol';

export const TOP_BAR_HEIGHT = '4.5rem';

export default function TopBar() {

    const { userToken, Logout } = useContext(MyContext);

    const { pathname } = useRouter();

    return (
        <header className="sticky inset-0 ">
            <div
                className={`pt-2 pb-2 lg:pb-0 bg-gray-700 text-white shadow-md flex items-center justify-between px-8`}
                style={{ height: `calc(100% - ${TOP_BAR_HEIGHT})` }}
            >
                <div className="flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-md w-44"
                        >
                            <NavLinkCol href="/">Home</NavLinkCol>
                            <NavLinkCol href="/shop">Shop</NavLinkCol>
                            <NavLinkCol href="/collections">Collections</NavLinkCol>
                            <NavLinkCol href="/about">About Us</NavLinkCol>
                        </ul>
                    </div>
                    <a className="text-2xl lg:text-3xl font-bold font-mono">ShopIn</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/shop">Shop</NavLink>
                        <NavLink href="/collections">Collections</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                    </ul>
                </div>


                {
                    userToken ?
                        <div className="flex items-center gap-4">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                                <div
                                    tabIndex={0}
                                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                                >
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">
                                                View cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            src="/public/images/my-image.jpg"
                                            alt="My Image"
                                            width={500}
                                            height={500}
                                            className="rounded-lg shadow-lg"
                                        />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-md w-48"
                                >
                                    <NavLinkCol href="/profile">Profile</NavLinkCol>
                                    <NavLinkCol href="/admin">Admin Dashboard</NavLinkCol>
                                    <button
                                        onClick={Logout}
                                        className='btn btn-sm btn-outline w-10/12 mx-auto mb-2 mt-4 rounded-md text-white hover:text-red-600'>Logout</button>
                                </ul>
                            </div>
                        </div>
                        :
                        <>
                            <ButtonLink href='/login'>Login</ButtonLink>
                        </>
                }

            </div>
        </header>
    );
}
