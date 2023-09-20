import Chat from "./Chat";
import Input from "./Input";

const ChatRoom = () => {
    return (
        <>
            <div className="chat-room">
                <div className="chat-info">
                    <span>Name</span>
                </div>
                <Chat/>
                <Input/>
            </div>
        </>
    );
};
export default ChatRoom;
