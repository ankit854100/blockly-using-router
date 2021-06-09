import React from 'react'
import NavBar from "../home/NavBar"
import ActivityCard from "./ActivityCard"

const links = [{name: "Running Bird", link:"/dinosaur", description : "description"}, {name: "Scrat", link: "/scrat", description: "description"}, {name: "Sketch", link: "/sketch", description: "description"}, {name: "Scrat", link: "/p5", description: "description"}, {name: "Editor", link: "/editor", description: "description"}, {name: "Snake", link: "/snake", description: "description"}, {name: "Bricks Breaker", link: "/bricksbreaker", description: "description"}, {name: "Memory", link: "/memory", description: "description"}, {name: "Mole", link: "/mole", description: "description"}]

function Activity() {
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
            </div>
            <style jsx>{`
                .activity-coding{
                    padding-top: 5rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 4rem;
                }

                .coding-title{
                    font-size: 3rem;
                    {/* color: #4C97FF; */}
                }

                .activity-coding-cardsContainer{
                    display: flex;
                    flex-wrap: wrap;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Activity
