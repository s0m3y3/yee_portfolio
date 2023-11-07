function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          
  <a className="navbar-brand ml-4 mr-5" href="#">Yee Yang</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active mr-4 ">
      <a
            href="#Home"
            onClick={() => handlePageChange('Home')}
            classNameName={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
      </li>

      <li className="nav-item active mr-4">
      <a
            href="#about"
            onClick={() => handlePageChange('About')}
            classNameName={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
      </li>
      <li className="nav-item mr-4">
      <a
            href="#Projects"
            onClick={() => handlePageChange('Projects')}
            classNameName={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
      </li>
      <li className="nav-item mr-4">
      <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            classNameName={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
      </li>
    </ul>

  </div>
</nav>

    );
  }
  
  export default NavTabs;
  