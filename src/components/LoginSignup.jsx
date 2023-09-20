const LoginSignup = ({
    heading,
    name,
    email,
    password,
    avtar,
    buttonTitle,
    lastHeading,
}) => {
    return (
        <>
            <div className="form-container">
                <div className="form-wrapper">
                    <span className="logo">My Chat</span>
                    <span className="register">{heading}</span>
                    <form>
                        {name && <input type="text" placeholder="Enter Name" />}
                        { email && <input type="email" placeholder="Enter Email" />}
                        {password && <input type="password" placeholder="Enter Password" />}
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                        />
                       { avtar && <label for="file">
                            <img src="/plus.png" alt="Upload" />
                            <span>Add Avatar</span>
                        </label>}
                        <button>{buttonTitle}</button>
                        <p>{lastHeading}</p>
                    </form>
                </div>
            </div>
        </>
    );
};
export default LoginSignup;
