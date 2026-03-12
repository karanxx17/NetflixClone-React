function MovieModal({ movie, onClose }) {

  if (!movie) return null;

  return (
    <div style={{
      position: "fixed",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      backgroundColor:"rgba(0,0,0,0.8)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:1000
    }}>
      <div style={{
        background:"black",
        padding:"20px",
        maxWidth:"600px",
        color:"white"
      }}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>⭐ Rating: {movie.vote_average}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default MovieModal;