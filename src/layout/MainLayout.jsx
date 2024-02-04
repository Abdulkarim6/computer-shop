import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";

const MainLayout = () => {
    return (
        <>
           <Navber></Navber>
           <Outlet></Outlet> 
        </>
    );
};

export default MainLayout;