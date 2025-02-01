import CategoryLinks from "../../shared/CategoryLinks";
import NavBar from "../../shared/NavBar";

const Header = () => {
    return (
        <div className="pb-2">
            <NavBar></NavBar>
            <CategoryLinks></CategoryLinks>
        </div>
    );
};

export default Header;