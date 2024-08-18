import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authentication/authprovider/AuthProvider";
import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const navlinks = (
    <>
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      {user ? (
        <li>
          {" "}
          <button onClick={logOut}>LogOut</button>{" "}
        </li>
      ) : (
        <li>
          <NavLink to={"/login"}>LogIn</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl bg-cyan-100">BudgetLow</Link>
        </div>
        <div className="flex-none gap-2">
         <div>
          {
            user ? 
          <button onClick={logOut} className="btn">LogOut</button>:
          <Link to={"/login"} className="btn">Login</Link> 
          }
         </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
