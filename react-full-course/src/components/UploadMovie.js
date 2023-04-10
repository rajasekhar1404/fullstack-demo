import { useState } from "react"

const UploadMovie = () => {

    const [movie, setMovie] = useState({
        title: '',
        imageURL: ''
    })

    const sendMovie = () => {
        fetch("http://localhost:8080/v1/api/movie/", {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type":"application/json"
            }
        })
    }

    return (
        <div className="upload-movie">
            <form onSubmit={sendMovie}>
                <input type="text" placeholder="Enter movie title" required onChange={e => setMovie({...movie, title: e.target.value})}/>
                <input type="text" placeholder="Enter url" required onChange={e => setMovie({...movie, imageURL: e.target.value})}/>
                <button type="submit" value={"Upload"} >Upload</button>
            </form>
        </div>
    )
}

export default UploadMovie;