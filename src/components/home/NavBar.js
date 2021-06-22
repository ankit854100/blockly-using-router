import React, {useState} from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import {Link} from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import {useHistory} from "react-router-dom"

function NavBar(props) {
    const [navBar, setNavBar] = useState(false);
    const { currentUser, logout} = useAuth();
    const history = useHistory()

    const handleLogout = () => {
        logout();
        history.push("/")
    }

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
                        <Navbar.Brand href="#home">Early-coding</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {!currentUser ? 
                                <Nav className="ml-auto navbar-navLinks">
                                    <Nav.Link className="navLinks-link" href="">
                                        <Link to="/signup" className={!navBar? "sign-up-button": "sign-up-active"}>new user</Link>
                                    </Nav.Link>
                                    <Nav.Link className="navLinks-link" href="">
                                        <Link to="/login" className={!navBar? "sign-up-button": "sign-up-active"}>login</Link>
                                    </Nav.Link>
                                </Nav> :
                                <Nav className="ml-auto navbar-navLinks">
                                <Nav.Link className="navLinks-link" href="">
                                    {currentUser.email.split("@")[0]}
                                </Nav.Link>
                                <Nav.Link className="navLinks-link" href="" onClick={logout}>
                                    logout
                                </Nav.Link>
                            </Nav>

                            }
                        </Navbar.Collapse>
                </Navbar>: 
                <Navbar className="active" collapseOnSelect expand="lg" variant="light" fixed="top">
                        <Navbar.Brand href="#home">Early-Coding</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {!currentUser ? 
                                <Nav className="ml-auto navbar-navLinks">
                                    <Nav.Link className="navLinks-link" href="">
                                        <Link to="/signup" className={!navBar? "sign-up-button": "sign-up-active"}>new user</Link>
                                    </Nav.Link>
                                    <Nav.Link className="navLinks-link" href="">
                                        <Link to="/login" className={!navBar? "sign-up-button": "sign-up-active"}>login</Link>
                                    </Nav.Link>
                                </Nav> :
                                <Nav className="ml-auto navbar-navLinks">
                                <Nav.Link className="navLinks-link" href="">
                                    {currentUser.email.split("@")[0]}
                                </Nav.Link>
                                <Nav.Link className="navLinks-link" href="" onClick={handleLogout}>
                                    logout
                                </Nav.Link>
                            </Nav>

                            }
                        </Navbar.Collapse>
                </Navbar>
            }
            <style jsx>{`
                .home-navbar{
                        background-color: transparent !important;
                        transition:all 0.25s ease-in;
                        padding-left: 4rem !important;
                        {/* color: #8097A0  */}
                    }

                    .active{
                        transition:all 0.25s ease-in;
                        padding-left: 3rem !important;
                        background-color: #A3D2CA !important;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
                        border: 1px solid #4C97FF; 
                        color: #4C97FF !important
                    }

                    .active .navLinks-link:hover{
                        border: 1px solid #fff; 
                        color: #fff !important
                    }

                    .sign-up-button{
                        color: #000;
                    }

                    .sign-up-button:hover{
                        color: #4C97FF;
                    }

                    .sign-up-active{
                        color: #000;
                    }

                    .sign-up-active:hover{
                        color: #fff;
                    }
            `}</style>
        </div>
    )
}

export default NavBar
