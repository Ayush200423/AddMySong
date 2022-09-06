import {useState, useEffect} from 'react';
import axios from 'axios';

const Share = (props) => {
    const [userId, setUserId] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get('https://api.spotify.com/v1/me', {
            headers: {
                "Authorization": `Bearer ${props.token}`
            }
        })
        .then((res) => {
            setUserId(res.data.id)
            setName(res.data.display_name)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className="share">
            <div className="container">
                Hey {name}, now that your playlist is created, share it!
            </div>
        </div>
    )
}

export default Share