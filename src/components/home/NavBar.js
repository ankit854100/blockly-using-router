import React, {useState} from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function NavBar(props) {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 20) {
          setNavBar(true);
        } else {
          setNavBar(false);
        }
      };
    
    window.addEventListener("scroll", changeBackground);

    return (
        <div>
            {props.version === true ? 
                <Navbar className={!navBar? "home-navbar": "active"} collapseOnSelect expand="lg" variant="light" fixed="top">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto navbar-navLinks">
                                <Nav.Link className="navLinks-link" href="#features">create</Nav.Link>
                                <Nav.Link className="navLinks-link" href="#pricing">sign in</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>: 
                <Navbar className="active" collapseOnSelect expand="lg" variant="light" fixed="top">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto navbar-navLinks">
                                <Nav.Link className="navLinks-link" href="#features">create</Nav.Link>
                                <Nav.Link className="navLinks-link" href="#pricing">sign in</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            }
            <style jsx>{`
                .home-navbar{
                        background-color: transparent !important;
                        transition:all 0.25s ease-in;
                        {/* color: #8097A0  */}
                    }

                    .active{
                        background-color: #A3D2CA !important;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    }

                    .navbar-navLinks{
                        padding: 0.5rem;
                    }

                    .navLinks-link{
                        margin-right: 1rem;
                        color: #000 !important;
                        border: 1px solid #000;
                        border-radius: 0.2rem;  
                        padding-right: 1rem !important;
                        padding-left: 1rem !important;
                    }

                    .home-navbar .navLinks-link:hover{
                        border: 1px solid #8097A0; 
                        color: #8097A0 !important
                    }

                    .active .navLinks-link:hover{
                        border: 1px solid #fff; 
                        color: #fff !important
                    }
            `}</style>
        </div>
    )
}

export default NavBar
