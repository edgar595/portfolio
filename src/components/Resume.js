import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import SmallTitle from '../components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'January 2020 - May 2020'} 
                        title={'ICT support intern'}
                        subTitle={'Commission on revenue allocation'}
                        text={'I got to learn and gain a lot of experience from my role as the ICT intern.My work at the commission on revenue allocation had multiple roles and duties in the Information Technology Department. My duties included: Liaising with ICT staff and helping in establishing ICT user support, Repair and maintain ICT equipment and associated peripherals, Maintaining data integrity, security and access-monitoring user access developing and maintaining system security in line with standards and ensuring compliance to all standards. Assisting in Networking , Backing up of Servers,  '} 
                    />
                    <ResumeItem 
                        year={'January 2019 - April 2020'} 
                        title={'ICT attachee'}
                        subTitle={'Kijabe Hospital'}
                        text={'My introduction to the massive world of information technology started as an attachee in Kijabe hospital where I worked under the information technology department. My roles included: update and maintain the Authority’s website, Crimping of LAN cables and fixing faulty ports, Occasional maintenance of Company computers and Staff Management System – Microsoft Office.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                     <ResumeItem 
                        year={'August 2021 - present'} 
                        title={'LInux server managment and security'}
                        subTitle={'University of collarado'}
                        text={'Learning about Linux operating system, configuring linux in the enterprise, user authentication and authorization in a linux enviromnent, securing linux in an enterprise and practical linux administration'} 
                    />
                    <ResumeItem 
                        year={'June 2021 - July 2021'} 
                        title={'Web development'}
                        subTitle={'John Hopkins University'}
                        text={'I got to study introduction to html5, introduction to CSS, coding a static website, introduction to javascript and application of javascript in building applications and web Application '} 
                    />
                     <ResumeItem 
                        year={'April 2021 - June 2021'} 
                        title={'Digital Marketing'}
                        subTitle={'GOOGLE'}
                        text={'Studied a two month course on digital marketing'} 
                    />
                     <ResumeItem 
                        year={'February 2021 - March 2021'} 
                        title={'CISCO CCNA 1'}
                        subTitle={'Kabarak university'}
                        text={'I got to learn and understand networking deeply '} 
                    />
                     <ResumeItem 
                        year={'May 2017 - December 2021'} 
                        title={'Computer Science Degree'}
                        subTitle={'Kabarak University'}
                        text={'Attended my computer science degree in computer science and got to learn and specialize in the coursework'} 
                    />
                    <ResumeItem 
                        year={'January 2017 - May 2017'} 
                        title={'ICT competence'}
                        subTitle={'Daystar university'}
                        text={'I got to learn the basics of computer science, packages and microsoft officr '} 
                    />
                    <ResumeItem 
                        year={'2013 - 2016'} 
                        title={'High School Graduation'}
                        subTitle={'Chuka School'}
                        text={'I attained a mean grade of B in my Kenya certificate of secondary certification '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
