const Home = (props) => {
    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    AddMySong!
                    <div className="title-continue">
                        And Yours?
                    </div>
                </div>
                <div className="description">
                    Create and share a shared Spotify playlist
                </div>
                <div className="btns">
                    <a className="create nav-btn" href={`https://accounts.spotify.com/authorize?client_id=${props.client_id}&redirect_uri=${props.redirect_uri}&scope=${props.scopes}&response_type=token`}>Create a Shared Playlist</a>
                </div>
            </div>
        </div>
    )
}

export default Home