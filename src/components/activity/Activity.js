import React, { useEffect } from 'react'
import Footer from '../home/Footer'
import NavBar from "../home/NavBar"
import ActivityCard from "./ActivityCard"
import {useAuth} from "../../context/AuthContext"
import {useHistory} from "react-router-dom"

const links = [{name: "Running Bird", link:"/dinosaur", description : "description"}, {name: "Scrat", link: "/scrat", description: "description"}, {name: "Sketch", link: "/sketch", description: "description"}, {name: "P5", link: "/p5", description: "description"}, {name: "Editor", link: "/editor", description: "description"}]
const games = [{name: "Snake", link: "/snake", description: "description"}, {name: "Bricks Breaker", link: "/bricksbreaker", description: "description"}, {name: "Memory", link: "/memory", description: "description"}, {name: "Mole", link: "/mole", description: "description"}, {name: "Flappy Bird", link: "/flappybird", description: "description"}]

function Activity() {
    const {currentUser} = useAuth()
    const history = useHistory()

    useEffect(()=> {
        if(!currentUser){
            history.push("/signup")
        }
    },[])
    return (
        <React.Fragment>
            <div className="activity">
                <NavBar version={false} />
                <div className="activity-coding">
                    <h3 className="coding-title">Coding activities</h3>
                    <div className="activity-coding-cardsContainer">
                        {links.map((link, index) => {
                            return <ActivityCard key={index} name={link.name} link={link.link} desc={link.description} />
                        })}
                    </div>
                </div>
                <div className="activity-games">
                    <h3 className="coding-title">Games activities</h3>
                    <div className="activity-coding-cardsContainer">
                        {games.map((link, index) => {
                            return <ActivityCard key={index} name={link.name} link={link.link} desc={link.description} />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
            <style jsx>{`
                .activity-coding{
                    padding-top: 8rem;
                    padding-left: 3rem;
                    padding-right: 3rem;
                    {/* padding-bottom: 4rem; */}
                }

                .coding-title{
                    font-size: 3rem;
                    color: #4C97FF;
                }

                .activity-coding-cardsContainer{
                    display: flex;
                    flex-wrap: wrap;
                }

                .activity-games{
                    padding-top: 3rem;
                    padding-left: 3rem;
                    padding-right: 2rem;
                    padding-bottom: 4rem;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Activity
