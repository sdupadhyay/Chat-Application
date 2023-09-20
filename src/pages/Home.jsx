import ChatRoom from "../components/ChatRoom";
import SideBar from "../components/SideBar";

const Home = () => {
    return(
        <>
        <div className="home">
            <div className="container">
                <SideBar/>
                <ChatRoom/>
            </div>
        </div>
        </>
    )
};
export default Home;
