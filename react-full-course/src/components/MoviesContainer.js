import { useEffect, useState } from "react"
import Movie from "./Movie"
import UploadMovie from "./UploadMovie"

const MoviesContainer = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState({status:false, msg: ''})

    useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = async () => {
        try {
            setLoading(true)
            setErr({status:false, msg: ''})
            const response = await fetch("http://localhost:8080/v1/api/movie/")
            const data = await response.json()
            if (response.status === 500) {
                throw new Error("Internal server error")
            }

            setMovies(data)
        } catch(er) {
            setErr({status:true, msg: er.message})
        }
       setLoading(false)
    }

    return (
        <>
            <UploadMovie />
            {err?.status && <h2>{err.msg}</h2>}
            {loading ? <h2>Loading...</h2> : movies.map(movie => <Movie key={movie.title} content={movie} />)}
        </>
    )
}

export default MoviesContainer;