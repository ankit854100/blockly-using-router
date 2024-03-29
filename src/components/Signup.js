import React, {useEffect, useRef, useState} from 'react'
import {Card, Form, Button, Alert} from "react-bootstrap"
import {Link, useHistory} from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import NavBar from "./home/NavBar"

function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if(currentUser){
            history.push("/")
        }
    })

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
      
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }
      
        setLoading(false)
    }

    return (
        <div className="signup-top">
            <NavBar version={true} />
            <div className="signup-wrapper">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required placeholder="In alpha-numeric format"/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required placeholder="In alpha-numeric format"/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">
                            Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">login</Link>
                </div>
            </div>
            <style jsx>{`
                .signup-top{
                    {/* text-align: center; */}
                }
                .signup-wrapper{
                    padding: 5rem 25rem;
                }
            `}</style>
        </div>
    )
}

export default Signup
