const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <span className="logo"> My Chat</span>
                <div className="user">
                    <img src="https://images.pexels.com/photos/18305119/pexels-photo-18305119/free-photo-of-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user" />
                    <span>Name</span>
                    <button>LogOut</button>
                </div>
            </div>
        </>
    );
};
export default NavBar;
