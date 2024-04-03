import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="mx-auto p-10">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;