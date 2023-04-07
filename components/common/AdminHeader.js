import { MyContext } from "@/context/AuthContext";
import { useContext } from "react";
import NavLinkCol from "../links/NavLinkCol";

export default function AdminHeader() {

  const { Logout } = useContext(MyContext);

  return (
    <div className="fixed top-0 left-0 right-0 h-16 z-50 bg-gray-800 shadow-md shadow-gray-600">
      <div className="navbar bg-gray-800 hover:bg-gray-800 px-2">
        <div className="w-full flex items-center justify-between gap-2 px-2">
          <h4 className="text-2xl font-bold text-white">ShopIn</h4>
          <div className="form-control w-6/12">
            <input
              type="text"
              placeholder="Search for your items"
              className="input input-bordered"
            />
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full border border-orange-500"></div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-700 text-gray-50 rounded-md w-52"
            >
              <NavLinkCol href="/admin">Profile</NavLinkCol>

              <button
                onClick={Logout}
                className='btn btn-sm btn-outline w-10/12 mx-auto mb-2 mt-4 rounded-md text-white hover:text-red-600'>Logout</button>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
