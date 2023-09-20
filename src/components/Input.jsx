const Input = () => {
    return (
        <>
            <div className="input">
                <input placeholder="Type Something" type="text"/>
                <div className="send">
                 <input type="file" id="file" style={{display:"none"}}/>
                 <label htmlFor="file">
                     <img src="/attachment.png"/>
                 </label>
                 <button>Send</button>
                </div>
            </div>
        </>
    );
};
export default Input;
