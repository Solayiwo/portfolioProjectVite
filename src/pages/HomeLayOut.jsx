import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";

const HomeLayOut = () => {
  return (
    <div className="layout">
      <div className="head">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayOut;
