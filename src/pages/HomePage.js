import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Edgar Mugambi</span></h1>
                <p>An information technology expert with a degree in computer sciencece and skills in networking, programming, user support
                         and data science.I enjoy learning the latest trends in computers as I believe technology is the future of the world.</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/edgar-mugambi-27932b177/"
                     target="_blank"
                     rel="noreferrer"
                    className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="/" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a 
                    href="https://www.youtube.com/channel/UCK3A36SHOr8qL3hi9R990QQ"
                    target="_blank"
                    rel="noreferrer"
                    className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
