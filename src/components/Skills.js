import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Programming'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'User support'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'Networking'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Machine Learning'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'Data analysis'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'ICT Security'}
                            width={'75%'}
                            text={'75%'}
                        />
                       
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
