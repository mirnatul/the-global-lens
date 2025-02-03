import { Outlet } from "react-router-dom";
import Header from "../components/HomePage/Header";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div className=" bg-white project-font flex flex-col min-h-screen">
            <div className="shadow-sm">
                <div className="max-w-[1350px] mx-auto px-2">
                    <Header></Header>
                </div>
            </div>
            <div className="max-w-[1350px] mx-auto px-2">
                <Outlet></Outlet>
            </div>
            <div className="bg-black text-white mt-auto">
                <div className="max-w-[1350px] mx-auto px-2">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Root;