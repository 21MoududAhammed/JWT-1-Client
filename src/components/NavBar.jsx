import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="flex justify-center py-5 shadow font-semibold">
      <ul className="flex gap-8">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/sign-in"
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/sign-up"
          >
            Sign UP
          </NavLink>
        </li>
        <li>
          <button>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
}
