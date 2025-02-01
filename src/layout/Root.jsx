import { Outlet } from "react-router-dom";
import Header from "../components/HomePage/Header";

const Root = () => {
    return (
        <div className=" bg-white project-font">
            <div className="shadow-sm">
                <div className="max-w-[1350px] mx-auto px-2">
                    <Header></Header>
                </div>
            </div>
            <div className="max-w-[1350px] mx-auto px-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;