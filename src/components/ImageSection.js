import React from 'react'
import styled from 'styled-components';
import about from '../img/about.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={about} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Edgar Mugambi</span></h4>
                <p className="paragraph">An information technology expert with a degree in computer sciencece and skills in networking, programming, user support
                         and data science.I enjoy learning the latest trends in computers as I believe technology is the future of the world.</p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Edgar Mugambi</p>
                        <p>: Kenyan </p>
                        <p>: English & Kiswahili</p>
                        <p>: Nairobi</p>
                        <p>: Information technology expert</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
