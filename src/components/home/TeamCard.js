import React from 'react'
import ankit from "../../images/ankit.jpeg"
import amar from "../../images/amar.jpeg"
import mohinder from "../../images/mohinder.jpeg"

function TeamCard(porps) {
    return (
        <React.Fragment>
            <section id="team" class="team-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="site-heading text-center">
                        <h2 style={{fontSize: "4rem"}}>Our <span>Team</span></h2>
                        <h4>Meet our awesome and expert team members</h4>
                    </div>
                </div>
            </div>
                <div class="row team-items">
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src={ankit} alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Ankit Anand</h4>
                                    <p>
                                        Computer science engineer and softaware developer.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            {/* <li class="twitter">
                                                <a href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
                                            </li> */}
                                            {/* <li class="pinterest">
                                                <a href="#"><i class="fab fa-pinterest"></i></a>
                                            </li> */}
                                            {/* <li class="instagram">
                                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                            </li> */}
                                            <li class="vimeo">
                                                <a href="https://www.linkedin.com/in/ankit-anand-087254177/"><i class="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="mailto:ankit854100@email.com"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Ankit Anand</h4>
                                <span>Software Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src={amar} alt="Thumb" />
                                <div class="overlay">
                                    <h4>Amartya Kashyap</h4>
                                    <p>
                                        Computer science engineer and app developer.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            {/* <li class="twitter">
                                                <a href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
                                            </li> */}
                                            {/* <li class="pinterest">
                                                <a href="#"><i class="fab fa-pinterest"></i></a>
                                            </li> */}
                                            {/* <li class="instagram">
                                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                            </li> */}
                                            <li class="vimeo">
                                                <a href="https://www.linkedin.com/in/amartya-kashyap-2262881b2/"><i class="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="mailto:amartya1998kashyap@email.com"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Amartya Kashyap</h4>
                                <span>App Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" 
                                    src={mohinder}
                                    // src="https://i.ibb.co/JC4skS0/team-animate.jpg" 
                                    alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Mohinder Sharma</h4>
                                    <p>
                                        Computer science engineer and web designer.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            {/* <li class="twitter">
                                                <a href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
                                            </li> */}
                                            {/* <li class="pinterest">
                                                <a href="#"><i class="fab fa-pinterest"></i></a>
                                            </li> */}
                                            {/* <li class="instagram">
                                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                            </li> */}
                                            <li class="vimeo">
                                                <a href="https://www.linkedin.com/in/mscodi/"><i class="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="mailto:mohindersharma075@gmail.com"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Mohinder Sharma</h4>
                                <span>Web designer</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
            <style jsx>{`
                section {
                    padding: 60px 0;
                }
                a, a:hover, a:focus, a:active {
                    text-decoration: none;
                    outline: none;
                }

                .img-fluid{
                    width: 100%;
                    height: 399px;
                }
                .social ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .site-heading h2 {
                display: block;
                font-weight: 700;
                margin-bottom: 10px;
                text-transform: uppercase;
                }

                .site-heading h2 span {
                    color: #4C97FF;
                }

                .site-heading h4 {
                display: inline-block;
                padding-bottom: 20px;
                position: relative;
                text-transform: capitalize;
                z-index: 1;
                }

                .site-heading h4::before {
                background: #4C97FF none repeat scroll 0 0;
                bottom: 0;
                content: "";
                height: 2px;
                left: 50%;
                margin-left: -25px;
                position: absolute;
                width: 100px;
                }

                .site-heading h2 span {
                color: #4C97FF;
                }

                .site-heading {
                margin-bottom: 60px;
                overflow: hidden;
                margin-top: -5px;
                }

                .team-area .single-item {
                margin-bottom: 30px;
                }

                .team-area .item .thumb {
                position: relative;
                overflow: hidden;
                z-index: 1;
                }

                .team-area .item .thumb::after {
                background: #232323 none repeat scroll 0 0;
                content: "";
                height: 100%;
                left: 0;
                opacity: 0;
                position: absolute;
                top: 0;
                transition: all 0.35s ease-in-out;
                -webkit-transition: all 0.35s ease-in-out;
                -moz-transition: all 0.35s ease-in-out;
                -ms-transition: all 0.35s ease-in-out;
                -o-transition: all 0.35s ease-in-out;
                width: 100%;
                }

                .team-area .team-items .item:hover .thumb::after {
                opacity: 0.7;
                }

                .team-area .item .thumb .overlay {
                top: -100%;
                left: 0;
                padding: 20px;
                position: absolute;
                text-align: center;
                -webkit-transition: all 0.35s ease-in-out;
                -moz-transition: all 0.35s ease-in-out;
                -ms-transition: all 0.35s ease-in-out;
                -o-transition: all 0.35s ease-in-out;
                transition: all 0.35s ease-in-out;
                width: 100%;
                z-index: 1;
                }

                .team-area .item:hover .thumb .overlay {
                top: 50%;
                transform: translate(-50%, -50%);
                left: 50%;
                }

                .team-area .item .thumb .overlay p {
                color: #ffffff;
                }

                .team-area .item .thumb .overlay h4 {
                color: #ffffff;
                display: inline-block;
                position: relative;
                text-transform: uppercase;
                }

                .team-area .item .thumb img {
                -webkit-transition: all 0.35s ease-in-out;
                -moz-transition: all 0.35s ease-in-out;
                -ms-transition: all 0.35s ease-in-out;
                -o-transition: all 0.35s ease-in-out;
                transition: all 0.35s ease-in-out;
                }

                .team-area .item:hover .thumb img {
                opacity: .6;
                }

                .social li {
                display: inline-block;
                }

                .social li a {
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                color: #ffffff;
                display: inline-block;
                height: 40px;
                line-height: 40px;
                margin: 0 2px;
                text-align: center;
                width: 40px;
                }

                .team-area .info {
                background: #ffffff none repeat scroll 0 0;
                -moz-box-shadow: 0 0 10px #cccccc;
                -webkit-box-shadow: 0 0 10px #cccccc;
                -o-box-shadow: 0 0 10px #cccccc;
                box-shadow: 0 0 10px #cccccc;
                padding: 40px 20px 20px;
                position: relative;
                text-align: center;
                z-index: 9;
                }

                .team-area .info .message {
                height: 50px;
                line-height: 40px;
                margin-left: -25px;
                margin-top: -25px;
                position: absolute;
                text-align: center;
                top: 0;
                width: 50px;
                }

                .team-area .info .message a {
                background: #fff none repeat scroll 0 0;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                -moz-box-shadow: 0 0 10px #cccccc;
                -webkit-box-shadow: 0 0 10px #cccccc;
                -o-box-shadow: 0 0 10px #cccccc;
                box-shadow: 0 0 10px #cccccc;
                box-sizing: border-box;
                color: #4C97FF;
                display: inline-block;
                font-size: 20px;
                height: 50px;
                line-height: 50px;
                width: 50px;
                }

                .team-area .info .message a i {
                font-weight: 500;
                }

                .team-area .info h4 {
                font-weight: 600;
                margin-bottom: 5px;
                text-transform: capitalize;
                }

                .team-area .info span {
                color: #4C97FF;
                font-family: "Poppins",sans-serif;
                font-weight: 600;
                text-transform: uppercase;
                }

                .social li.twitter a {
                background-color: #00b6f1;
                }

                .social li.pinterest a {
                background-color: #bd081c;
                }

                .social li.facebook a {
                background-color: #3b5998;
                }

                .social li.google-plus a {
                background-color: #df4a32;
                }

                .social li.vimeo a {
                background-color: #1ab7ea;
                }

                .social li.instagram a {
                background-color: #cd486b;
                }
            `}</style>
        </React.Fragment>
    )
}

export default TeamCard


{/* <div>
            <div class="team">
                <div className="team-imageContainer">
                    <img
                        className="imageContainer-image"
                        src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg" 
                        alt="" 
                    />
                </div>
                <div className="team-description">
                    <h3 className="description-title">Ankit Anand</h3>
                    <p className="description-desc">description</p>
                </div>
            </div>
            <style jsx>{`
                .team{
                    display: flex;
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                }

                .team-imageContainer{
                    padding-right: 3rem;
                }

                .imageContainer-image{
                    border-radius: 50%;
                    width: 15rem;
                    height: 15rem;
                }

                .team-description{
                    text-align: left;
                }

                .description-title{
                    font-size: 2.5rem;
                }

                .description-desc{
                    font-size: 1.5rem;
                }
            `}</style>
        </div> */}