

const Navbar = () => {


    return (

        <>
            {/* Hello world */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
                <div className="container-fluid  text-white  py-0 ms-4" >
                    <a className="navbar-brand text-light " href="#">
                        Start Bootstrap
                    </a>
                    <button
                        className="navbar-toggler  ms-auto me-3 "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon " />
                    </button>
                    <div className="collapse navbar-collapse ms-3" id="navbarNavDropdown" >
                        <ul className="navbar-nav ms-auto me-3">
                            <li className="nav-item text-ligh">
                                <a className="nav-link active text-light" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item  text-ligh">
                                <a className="nav-link text-light" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light" href="#">
                                    Services
                                </a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link text-light" href="#">
                                    Contact
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;