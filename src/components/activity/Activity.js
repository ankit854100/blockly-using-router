import React, { useEffect } from 'react'
import Footer from '../home/Footer'
import NavBar from "../home/NavBar"
import ActivityCard from "./ActivityCard"
import {useAuth} from "../../context/AuthContext"
import {useHistory} from "react-router-dom"

const links = [{name: "Running Bird", link:"/dinosaur", description : "This lesson is going to teach you what loop and conditionals are and their importance."},
                 {name: "Squirrel", link: "/scrat", description: "This is lesson will help you practice your knowledge of loop and conditionals by giving you task with progressive levels."}, 
                 {name: "Sketch", link: "/sketch", description: "This lesson is a fun activity which you help you refresh your mood and let you draw different shapes."}, 
                 {name: "P5", link: "/p5", description: "This lesson will help you polish your skills of conditionals and iterators. This lesson will let you use the programming concepts at higher level of abstraction."}, 
                 {name: "Editor", link: "/editor", description: "This is drag and drop environement editor with all the concepts of functional programming with the help of this editor you are going to learn a lot of programming concepts with the real syntax like blocks."}]

const games = [{name: "Snake", link: "/snake", description: "This activity is popular sanke game which you play on your mobile phones. You are going to make a full functional snake game with your prior knowledge of conditionals, iterators and variables."}, 
                {name: "Bricks Breaker", link: "/bricksbreaker", description: "This activity is popular bricks breaker game which you play on your mobile phones. You are going to make a full functional bricks breaker game with your prior knowledge of conditionals, iterators and variables."}, 
                {name: "Memory", link: "/memory", description: "This activity is popular memory game which you play on your mobile phones. You are going to make a full functional memory game with your prior knowledge of conditionals, iterators and variables."}, 
                {name: "Mole", link: "/mole", description: "This activity is popular whack a mole which you play on your mobile phones. You are going to make a full functional whack a mole game with your prior knowledge of conditionals, iterators and variables."}, 
                {name: "Flappy Bird", link: "/flappybird", description: "This activity is popular flappy bird game which you play on your mobile phones. You are going to make a full functional flappy bird game with your prior knowledge of conditionals, iterators and variables."}
            ]

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
