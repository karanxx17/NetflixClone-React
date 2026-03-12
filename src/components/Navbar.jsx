function Navbar() {
  return (
    <nav style={{
      position:"fixed",
      top:0,
      width:"100%",
      padding:"20px",
      display:"flex",
      justifyContent:"space-between",
      backgroundColor:"black",
      zIndex:100
    }}>
      <h1 style={{color:"red"}}>NETFLIX</h1>

      <div style={{
      display:"flex",
      gap:"15px",
      fontSize:"14px",
      flexWrap:"wrap"
    }}>
      <span>Home</span>
      <span>TV Shows</span>
      <span>Movies</span>
      <span>My List</span>
     </div>
    </nav>
  );
}

export default Navbar;
