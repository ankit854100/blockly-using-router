import React from 'react'
import {Link} from 'react-router-dom'

function ActivityCard(props) {
    return (
        <React.Fragment>
            <div className="activityCard">
                <div className="activityCard-top">
                    <img
                        className="activityCard-img" 
                        src="data:image/jpeg;base64,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"
                        alt=""
                    />
                </div>
                <div className="activityCard-bottom">
                    <h4 className="bottom-title">{props.name}</h4>
                    <p className="bottom-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat purus ut metus convallis cursus. Sed accumsan ac tortor vel commodo. Curabitur tempus tellus ut aliquet placerat. Curabitur est metus, tincidunt ullamcorper est vitae, vulputate faucibus justo. Donec gravida augue quis mi sodales suscipit non quis tellus. </p>
                    
                    <Link to={props.link} target="_blank" rel="noopener noreferrer">
                        <span className="bottom-tryButton">try activity</span>
                    </Link>
                    <i class="bottom-playIcon fas fa-play-circle fa-2x"></i>
                </div>
            </div>
            <style jsx>{`
                .activityCard{
                    border: 1px solid #C3CCD9;
                    width: 18rem;
                    border-radius: 0.5rem;
                    margin: 1rem;
                    margin-left: 0;
                }

                .activityCard-img{
                    width: 100%;
                    height: 8rem;
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                }

                .activityCard-bottom{
                    border-top: 1px solid #C3CCD9;
                    padding: 1rem;
                    position: relative;
                }

                .bottom-title{
                    padding: 0;
                }

                .bottom-tryButton{
                    background-color: #4C97FF;
                    border-radius: 0.5rem;
                    padding: 0.25rem 0.5rem;
                    color: #fff;
                    cursor: pointer;
                }

                .bottom-tryButton:hover{
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                }

                .bottom-playIcon{
                    float: right;
                    color: #4C97FF;
                    position: absolute;
                    right: 1rem;
                    bottom: 1rem;
                }
            `}</style>
        </React.Fragment>
    )
}

export default ActivityCard
