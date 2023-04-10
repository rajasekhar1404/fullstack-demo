const Movie = (props) => {

    const {title, imageURL} = props.content;

    return (
        <>
            <div className="movie">
                <img width={165} height={220} src={imageURL} alt="movie"/>
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default Movie;