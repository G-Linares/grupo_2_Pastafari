import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Pastafari</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Secciones</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonIcon className="icon" />
            <span>Usuario</span>
          </li>
          <li>
            <RestaurantMenuIcon className="icon" />
            <span>Menú</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
