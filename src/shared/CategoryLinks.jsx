import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import './CategoryLinks.css'

const CategoryLinks = () => {
    return (
        <div className="mt-2 hidden lg:block">
            <div className="flex justify-between items-center">
                <div>

                </div>
                <div className="flex justify-center items-center">
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/'>Home</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/politics'>Politics</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/business'>Business</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/technology'>Technology</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/science'>Science</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/health'>Health</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/travel'>Travel</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/entertainment'>Entertainment</NavLink>
                    <NavLink className="hover:bg-slate-200 px-5 py-3 rounded-lg" to='/fashion'>Fashion</NavLink>
                </div>
                <div>
                    <CiSearch className='text-3xl hover:scale-110 cursor-pointer'></CiSearch>
                </div>
            </div>
        </div>
    );
};

export default CategoryLinks;