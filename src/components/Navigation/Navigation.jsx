import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className={css["navigation"]}>
      <ul className={css["navigation-list"]}>
        <li>
          <NavLink className={css["navigation-link"]} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css["navigation-link"]} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
