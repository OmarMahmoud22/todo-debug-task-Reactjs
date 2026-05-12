import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.side_bar}>
      <div className="p-4 fw-bold text-white fs-4 border-bottom border-secondary mb-3">
        <i className="fa-solid fa-check-double me-2"></i>Todo Master
      </div>
      <nav className="nav flex-column px-2">
        <NavLink to="/" className="nav-link text-white py-3">
          <i className="fa-solid fa-house me-2"></i> Home
        </NavLink>
        <NavLink to="/todos" className="nav-link text-white py-3">
          <i className="fa-solid fa-list-check me-2"></i> My Tasks
        </NavLink>
      </nav>
    </aside>
  );
};
export default Sidebar;
