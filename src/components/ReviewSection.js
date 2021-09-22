import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layout'
import Title from '../components/Title';
import ReviewItem from '../components/ReviewItem';

function ReviewSection() {
    return (
       
           <ReviewsStyled>
               < Title title={'Reviews'} span={'Reviews'}/>
               <InnerLayout>
                   <div className="reviews">
                        <ReviewItem text={'hes good at programming and creation of websites and applications'}/>
                        <ReviewItem text={'hes good at programming and creation of websites and applications'}/>
                   </div>
               </InnerLayout>
           </ReviewsStyled> 
       
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: flex;
    }
`;

export default ReviewSection;
