const Register = ()=>{
    return(
        <>
<div className="form-container">
    <div className="form-wrapper">
        <span className="logo">My Chat</span>
        <span className="register">Register</span>
     <form>
        <input type="text" placeholder="Enter Name"/>
        <input type="email" placeholder="Enter Email"/>
        <input type="password" placeholder="Enter Password"/>
        <input style={{display:"none"}} type="file" id="file" />
        <label for="file">
            <img src="/plus.png" alt="Upload" />
            <span>Add Avatar</span>
        </label>
        <button>Sign Up</button>
        <p>If You have Account, Then Login</p>
     </form>
    </div>
</div>
        </>
    )
}
export default Register