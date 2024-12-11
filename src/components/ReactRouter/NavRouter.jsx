import { Link, NavLink } from "react-router-dom";
import './ReactRouter.css'

const NavRouter = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/acerca">Acerca</Link>
      </nav>
      <br />
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/"}
        >
          Home
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/acerca"}
        >
          Acerca
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/productos"}
        >
          Productos
        </NavLink>
      </nav>
    </>
  );
};

export default NavRouter;
