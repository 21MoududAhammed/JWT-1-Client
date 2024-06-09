import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
export default function NavBar() {
  const { loggedOut } = useAuth();

  const handleSignOut = async () => {
    try {
      const result = await loggedOut();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="flex justify-center py-5 shadow font-semibold mb-5">
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
          <button onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
}
