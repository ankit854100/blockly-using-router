import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            <div className="home-footer">
                    <i class="fas fa-code fa-5x footer-topIcon"></i>
                    <h3>Made with <span>❤</span> in <span style={{color: "#4C97FF"}}>India</span></h3>
                    <p className="footer-description">At early coding, our mission is to teach concepts pf programming to those who have no coding background and help them build awesome apps and games.</p>
                    <div class="social">
                        <ul>
                            <li class="twitter">
                                <a href="https://twitter.com/CodingEarly"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li class="pinterest">
                                <a href="https://www.youtube.com/channel/UCglg8y2ECIrcf2MZOpd3BIg"><i class="fab fa-youtube"></i></a>
                            </li>
                            <li class="instagram">
                                <a href="https://www.instagram.com/early_coding/"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li class="vimeo">
                                <a href="https://www.linkedin.com/in/ankit-anand-087254177/"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            <style jsx>{`
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
                
                .social ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
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

export default Footer
