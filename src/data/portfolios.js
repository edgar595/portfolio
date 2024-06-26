import css2 from '../img/portImages/hotel.PNG';
import react1 from '../img/portImages/react_styled.png';
import img3 from '../img/portImages/dolla.PNG';
import pl from '../img/portImages/pl.png';
import avatar from '../img/portImages/avatar.jpg';
import ufc from '../img/portImages/ufc.jpg';
import police from '../img/portImages/police.jpg';
import maize from '../img/portImages/maize.jpg';
import health from '../img/portImages/health.jpg';
import download from '../img/portImages/download.jpg';
import excel1 from '../img/portImages/excel1.png';
import terrorism from '../img/portImages/terrorism.jpg';
import airline from '../img/portImages/airline.jpg';
import ball from '../img/portImages/ball.jpg';
import sec from '../img/portImages/sec.jpg';

const portfolios = [
    {
        id: 1,
        category: 'Data Analysis',
        image: avatar,
        link1: 'https://edgarmugambi.shinyapps.io/avatar/?_ga=2.27141758.2102410902.1683657952-51971680.1682322687',
        title: 'Reactive Shiny dashboard',
        text: 'Created with R to predict the speaker of the message and personality'
    },
    {
        id: 2,
        category: 'Data Analysis',
        image: terrorism,
        link1: 'http://edgarmugambi.pythonanywhere.com/',
        title: 'Crime Analysis Python',
        text: 'Crime Exploratory Anlaysis'
    },
    {
        id: 3,
        category: 'Data Analysis',
        image: airline,
        link1: 'https://edd.pythonanywhere.com/',
        title: 'Airline Analysis',
        text: 'Airline Visualization and Sentiments based on tweets'
    },
    {
        id: 4,
        category: 'Data Analysis',
        image: pl,
        link1: 'https://edgarmugambi.shinyapps.io/eplGame/?_ga=2.180402531.531471333.1683550421-51971680.1682322687',
        title: 'EPL visualization and prediction',
        text: 'It contains data of the premier league between 1992 - 2022'
    },    {
        id: 5,
        category: 'Data Analysis',
        image: ball,
        link1: 'http://memzy.pythonanywhere.com/',
        title: 'Football Predictions Using Machine Learning',
        text: 'Predicting Goals scored and Outcomes of a game'
    },
    {
        id: 6,
        category: 'React',
        image: react1,
        link1: 'https://eddgarmugambi.netlify.app/',
        title: 'Responsive Portfolio Website',
        text: 'This is a portfolio website'
    },
    {
        id: 7,
        category: 'React',
        image: css2,
        link1: 'https://edgarestaurant.netlify.app/',
        title: 'Restaurant Website',
        text: 'Created via  React'
    },
    {
        id: 8,
        category: 'Data Analysis',
        image: ufc,
        link1: 'https://edgarmugambi.shinyapps.io/ufcfight/',
        title: 'Data Analysis on UFC',
        text: 'Created with R and contains UFC info'
    },
    {
        id: 9,
        category: 'Data Analysis',
        image: police,
        link1: 'https://edgarmugambi.shinyapps.io/arrest/',
        title: 'Data Analysis on arrest in USA',
        text: 'It gives a brief summary of the arrests '
    },
    {
        id: 10,
        category: 'Data Analysis',
        image: maize,
        link1: 'https://edgarmugambi.shinyapps.io/Maize/?_ga=2.120686410.398939380.1684150047-101558797.1684150047',
        title: 'Maize production between 2012-2018',
        text: 'It gives a brief summary of the arrests '
    },
    {
        id: 11,
        category: 'Data Analysis',
        image: health,
        link1: 'https://eddygitonga.shinyapps.io/health/',
        title: 'WHO Data Health ',
        text: 'Health data analysis from WHO'
    },
    {
        id: 12,
        category: 'Data Analysis',
        image: download,
        link1: 'https://eddygitonga.shinyapps.io/loan/',
        title: 'loan prediction  ',
        text: 'credit data analysis'
    },
    {
        id: 13,
        category: 'Data Analysis',
        image: excel1,
        link1: 'https://docs.google.com/spreadsheets/d/1Nwu8BdtLfphhjxI37RTzuCRvDIWToywx/edit?usp=sharing&ouid=104732726743410552243&rtpof=true&sd=true',
        title: 'Sales using excel ',
        text: 'the link is to a spreadsheet download the excel file'
    },
    {
        id: 14,
        category: 'Data Analysis',
        image: download,
        link1: 'https://eddygitonga.shinyapps.io/sales/',
        title: 'Company sales ',
        text: 'Company statistics'
    },
        {
        id: 15,
        category: 'Data Analysis',
        image: excel1,
        link1: 'https://docs.google.com/spreadsheets/d/1LR-V8UZ8WquaIKwhgPwwzgrNwUg938z4/edit?usp=drive_link&ouid=104732726743410552243&rtpof=true&sd=true',
        title: 'Financial Data ',
        text: 'Financial data of companies- download it for best viewing' 
    },
    {
        id: 16,
        category: 'Data Analysis',
        image: sec,
        link1: 'https://edgarmuga.shinyapps.io/authent/',
        title: 'Authenticate R users with firebase',
        text: 'Authentication and Visualization'
    },
       {
        id: 17,
        category: 'React',
        image: img3,
        link1: 'https://app.netlify.com/sites/dollarbank/overview',
        title: 'Dollar bank',
        text: 'Web Application'
    }
]

export default portfolios;
