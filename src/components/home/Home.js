import React from 'react'
import TeamCard from "./TeamCard"
import NavBar from "./NavBar"
import Footer from "./Footer"
import {Link} from "react-router-dom"

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
                            <h3 className="descContainer-heading">A new and easy way to learn <span style={{color: "#4C97FF"}}>coding</span></h3>
                            <Link to="/activity" target="_blank" rel="noopener noreferrer" >
                                <strong className="heading-gettingStarted">Getting started</strong>
                            </Link>
                            {/* <Link to="/activity">
                                <strong className="heading-gettingStarted">Getting started</strong>
                            </Link> */}
                       </div>
                    </div>
                </div>
                <div className="home-reason">
                    <div class="site-heading text-center">
                    <h4 className="reason-title">Why <span style={{color: "#4C97FF"}}>coding</span> for kids</h4>
                    </div>
                    
                    <div className="reason-container">
                        <div className="container-points">
                            <ul className="points-container">
                                <li>Logic building</li>
                                <li>Programming with worrying about syntax.</li>
                                <li>Will learn all the procedural programming concepts.</li>
                                <li>Will easily be able to switch in text-based programming.</li>
                                <li>Will be able to keep-up with the fast groing technology.</li>
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
                <div class="site-heading text-center">
                    <h4 className="reason-title">Benefits of <span style={{color: "#4C97FF"}}>joining</span> us</h4>
                    </div>
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
                <Footer />
            </div>
            <style jsx>{`
                .heading-gettingStarted{
                    border: 1px solid #000;
                    color: #000;
                    border-radius: 0.25rem;
                    padding: 1rem;
                    margin-top: 0.5rem;
                }

                .heading-gettingStarted:hover{
                    border-color: #4C97FF !important;
                    color: #4C97FF !important;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) !important;
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

            `}</style>
        </div>
    )
}

export default Home
