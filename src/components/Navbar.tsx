function Navbar() {
  return (
   <nav className="navbar"> 
   <div className="navbar-container"> 

    <a href="/" className="logo">
     YourLogo
      </a>
      
       <div className="nav-links">
         <a href="/">Home</a> 
         <a href="/about">About</a> 
         <a href="/services">Services</a> 
         <a href="/contact">Contact</a> 
       </div>

       <button className="nav-button">
         Get Started
          </button>
          
           </div>
            </nav>
             );
             } 
             
             export default Navbar;