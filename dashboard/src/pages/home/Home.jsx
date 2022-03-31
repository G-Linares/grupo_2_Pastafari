import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import ListUser from "../../components/ListUser/ListUser";
import ListMenu from "../../components/ListMenu/ListMenu";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Usuarios" />
          <Widget type="Compras" />
          <Widget type="Platillos" />
        </div>
        <div className="charts">
        </div>
        <div className="listContainer">
          <div className="listTitle">Lista de usuarios</div>
          <ListUser />
          
        </div>
        <div className="listContainer">
          <div className="listTitle">Lista de Platillos</div>
          <ListMenu />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
