import React from 'react'
import TeamCard from "./TeamCard"
import NavBar from "./NavBar"

function Home() {
    return (
        <div>
            <div>
                <NavBar version={true} />
                <div className="home-intro">
                    <div className="into-imageContainer">
                        <img className="intro-image" 
                            // src="https://image.freepik.com/free-vector/concept-computer-technology-education-business_29937-7593.jpg"
                            src="https://www.tynker.com/image/content/coding-for-kids-the-why-and-how/coding-made-easy.png"
                            alt="intro image" 
                        />
                    </div>
                    <div className="intro-descContainer">
                       <div>
                            <h3 className="descContainer-heading">A new and easy way to learn coding.</h3>
                            <strong>Getting Started</strong>
                       </div>
                    </div>
                </div>
                <div className="home-reason">
                    <h3 className="reason-title">Why coding for kids</h3>
                    <div className="reason-container">
                        <div className="container-points">
                            <ul className="points-container">
                                <li>Logic building</li>
                                <li>Programming with worrying about syntax.</li>
                                <li>Will learn all the procedural programming concepts.</li>
                                <li>Will learn all the procedural programming concepts.</li>
                                <li>Will learn all the procedural programming concepts.</li>
                            </ul>
                        </div>
                        <div className="container-imgContainer">
                            <img className="intro-image" 
                                src="https://image.shutterstock.com/image-vector/child-jumping-children-jump-school-260nw-1911505405.jpg" 
                                alt="intro image" 
                            />
                        </div>
                    </div>
                </div>
                <div className="home-benefits">
                    <h3 className="reason-title">Benefits of joining us.</h3>
                    <div className="reason-container">
                        <div className="container-imgContainer">
                            <img className="intro-image" 
                                src="https://media.giphy.com/media/4GaHBQh3f4jBEpbQvP/giphy.gif" 
                                alt="intro image" 
                            />
                        </div>
                        <div className="container-points">
                            <ul className="points-container">
                                <li>Logic building</li>
                                <li>Programming with worrying about syntax.</li>
                                <li>Will learn all the procedural programming concepts.</li>
                                <li>Will learn all the procedural programming concepts.</li>
                                <li>Will learn all the procedural programming concepts.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="home-team">
                    <TeamCard />
                </div>
                <div className="home-footer">
                    <i class="fas fa-code fa-5x footer-topIcon"></i>
                    {/* <h1 className="footer-topIcon">hello</h1> */}
                    <h3>Made with <span>❤</span> in India</h3>
                    <p className="footer-description">At early coding, our mission is to teach concepts pf programming to those who have no coding background and help them build awesome apps and games.</p>
                </div>
            </div>
            <style jsx>{`
                strong{
                    border: 1px solid #000;
                    border-radius: 0.25rem;
                    padding: 1rem;
                    margin-top: 0.5rem;
                }

                strong:hover{
                    border-color: #4C97FF !important;
                    color: #4C97FF !important;
                }

                .home-intro{
                    display: flex;
                    {/* background-image: url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'); */}
                    background-color: #fff;
                    height: 100%;
                    width: 100%;
                    padding-top: 10rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 4rem;
                }

                .into-imageContainer{
                    width: 50%;
                    text-align: center;
                }

                .intro-image{
                    border-radius: 50%;
                }

                .intro-descContainer{
                    width: 50%;
                    width: 50%;
                    display: flex;
                    text-align: center;
                    align-items: center;
                }

                .descContainer-heading{
                    font-size: 4rem !important;
                    margin-bottom: 2rem;
                }
                
                .home-reason{
                    padding-top: 4rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 4rem;
                    text-align: center;
                    background-color: #FAFAFA;
                }

                .reason-container{
                    display: flex;
                    padding-top: 1.5rem;
                }

                .container-points{
                    width: 50%;
                }

                .reason-title{
                    font-size: 4rem;
                }

                .points-container{
                    max-width: 35rem;
                    text-align: left;
                    font-size: 1.5rem;
                    padding-top: 1rem;
                }

                .container-imgContainer{
                    width: 50%;
                }

                .home-benefits{
                    padding-top: 4rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 4rem;
                    text-align: center;
                    background-color: #fff;
                }

                .home-team{
                    padding-top: 4rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    {/* padding-bottom: 4rem; */}
                    text-align: center;
                    background-color: #FAFAFA;
                }

                .team-cards{
                    display: flex;
                    flex-wrap: wrap;
                }

                .home-footer{
                    position: relative;
                    text-align: center;
                    padding-top: 4rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 4rem;
                    background-color: #a3d2ca;
                }

                .footer-topIcon{
                    position: absolute;
                    top: -2.5rem;
                    left: 39rem;
                    right: auto;
                }

                .footer-description{
                    font-size: 1.5rem;
                    max-width: 60rem;
                    margin-left: auto;
                    margin-right: auto;
                }

            `}</style>
        </div>
    )
}

export default Home
