const Search = ()=>{
    return(
        <>
        <div className="search">
        <div className="search-form">
        <input
          type="text"
          placeholder="Find a user"
        />
      </div>
      <div className="user-chat" >
          <img src="https://images.pexels.com/photos/18305119/pexels-photo-18305119/free-photo-of-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="user" />
          <div className="user-chat-info">
            <span>Name</span>
            <p>Status</p>
          </div>
        </div>
        <div className="user-chat" >
          <img src="https://images.pexels.com/photos/18305119/pexels-photo-18305119/free-photo-of-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="user" />
          <div className="user-chat-info">
            <span>Name</span>
            <p>Status</p>
          </div>
        </div>
        <div className="user-chat" >
          <img src="https://images.pexels.com/photos/18305119/pexels-photo-18305119/free-photo-of-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="user" />
          <div className="user-chat-info">
            <span>Name</span>
            <p>Status</p>
          </div>
        </div>
        </div>
        
        </>
    )
}
export default Search;