import NavBar from "./Navbar";
import Search from "./Search";

const SideBar = () => {
    return (
        <>
            <div className="side-bar">
            <NavBar/>
            <Search/>
            </div>
        </>
    );
};
export default SideBar;
