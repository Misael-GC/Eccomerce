import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext }  from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
// https://www.youtube.com/watch?v=yvOx2pEhCLs implementar el diseño responsive de este video

function Navbar() {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm top-0">
      {/*puedes borrar font-light */}
      {/* Lado derecho */}
      <ul className="flex items-center gap-3">
        {/* other */}
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? activeStyle : ""
            }
          >
            All
          </NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/fornitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fornitures
          </NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      {/* Lado derecho */}
      <ul className="flex items-center gap-3">
        {/* other */}
        <li className="text-black/60">shopi@gmail.com</li>
        {/* other */}
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        {/* other */}
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        {/* other */}
        <li className="flex">
          <NavLink to="/fornitures" className="flex gap-1">
           <ShoppingCartIcon className="h-5 w-5 text-black"/>
           <div>
           {context.count}
           </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
