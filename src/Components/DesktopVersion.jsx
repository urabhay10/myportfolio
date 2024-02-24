import React, { Component } from 'react'
import MainDesign from './MainDesign'
import school from '../images/school.jpg'
import college from '../images/college.jpeg'
import university from '../images/university.webp'
import AboutMe from './AboutMe'
import Education from './Education'
import Projects from './Projects'
import PNH from '../images/favicon.svg'
import Spear from '../images/spear.webp'
import technoLogo from '../images/techno-logo.png'
import '../App.css'

export default class DesktopVersion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showr: false,
          showl: false,
          title: 'Veermata Jijabai Technological Institute',
          desc: "I am currently studing in Veermata Jijabai Technological Institute, Mumbai. Here, I participated in multiple clubs, and took part in many competitions like hackathons. I am pursuing in Bachelor Of Technology in Information Technology. I will graduate in the year 2027. ",
          img: university,
          projects: [
            {
              title: 'Spear - Your AI powered novel writer',
              desc: 'Made the entire backend and frontend of the application. I used React Js for frontend, Express Js and Node Js for backend and MongoDB for database. I also used the Gemini Ultra API to assist the user to get ideas for continuation of story or get a review of their story. I also used animations for loading pages. This website is responsive with different screen sizes.',
              github: 'https://github.com/urabhay10/spear',
              link: 'https://spear-frontend-c11f196e0a40.herokuapp.com/',
              img: Spear
            }, {
              title: 'PassNotesHub',
              desc: 'This application helps any user to store or even share their notes with others. I used Bootstrap for css, React Js for frontend, Express Js and Node Js for backend and MongoDB for database. I added password hashing for storing passwords of users securely.',
              link: 'https://pnh-da91bb20eaaa.herokuapp.com/',
              github: 'https://github.com/urabhay10/pnh',
              img: PNH
            },
            {
              title: 'Technovanza - Events Page',
              desc: "Worked with Technovanza Vjti, one of Asia's largest Techno-Managerial fest, to create the events page for their website. I worked with a team to design this page. Here, I used React Js and along with framer to write design the page for smooth animations. I also used the react-router-dom to navigate between different pages. ",
              link: 'https://technovanza.org/events',
              github: 'https://github.com/',
              img: technoLogo
            }
          ],
          currIndex: 0
        };
      }
      componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      updateDimensions = () => {
        this.forceUpdate();
      }
    
      changeDesc = (text) => {
        if (text === 'school') {
          this.setState({ desc: "I studied at Sir JJ Princess Street Primary School and Sir JJ Fort Boys High School in Mumbai before attending Ramnivas Ruia Autonomous College for my HSC. At Sir JJ Princess Street Primary School, I received a strong foundation in various subjects, laying the groundwork for my future academic pursuits. My years at Sir JJ Fort Boys High School were marked by rigorous education and a supportive learning environment, where I developed essential skills and knowledge. These formative years instilled in me a passion for learning and a dedication to academic excellence. I scored 94% in my 10th grade along with 99% in Maths. My teachers guided me to the right path ahead every time.", img: school, title: 'Sir JJ Fort Boys High School' });
        }
        else if (text === 'college') {
          this.setState({ desc: "I studied at Ramnivas Ruia Autonomous College for my HSC in Mumbai From here, I completed my 11th and 12th grade from 2021 to 2023. I did my HSC from Maharashtra State Board. I studied the subjects English, Maths, Physics, Chemistry and Electronics. During my time at Ramnivas Ruia Junior College, I actively participated in various extracurricular activities. My experiences at Ramnivas Ruia have been instrumental in shaping my academic pursuits and preparing me for future endeavors. During this time, I also prepared for MHT-CET in which I got 99.87%ile.", img: college, title: 'Ramnivas Ruia Junior College' });
        }
        else if (text === 'university') {
          this.setState({ desc: "I am currently studing in Veermata Jijabai Technological Institute, Mumbai. Here, I participated in multiple clubs, and took part in many competitions like hackathons. The college provided a vibrant academic environment conducive to holistic development, where I not only excelled in academics but also honed my leadership and teamwork skills. I am pursuing in Bachelor Of Technology in Information Technology. I will graduate in the year 2027. ", img: university, title: 'Veermata Jijabai Technological Institute' });
        }
      }
    
      showrl = (text) => {
        if (text === 'right') {
          this.setState({ showr: true, showl: false });
        } else if (text === 'left') {
          this.setState({ showl: true, showr: false });
        } else if (text === 'close') {
          this.setState({ showr: false, showl: false });
        }
      }
      changeProject = (index) => {
        this.setState({ currIndex: index });
      }
      render() {
        return (
          <div className="App" style={{
            backgroundColor: 'black',
            width: '100vw',
            height: '100vh',
          }}>
            {<MainDesign dims={window.innerHeight < window.innerWidth ? window.innerHeight / 925 : window.innerWidth / 925} right={'Projects'} left={'Education'} top={'Skills'} bottom={'About me'} mid={'Abhay Upadhyay'} midSub={"Hi I'm"} showrl={this.showrl} />}
            {<Education img={this.state.img} desc={this.state.desc} showrl={this.showrl} changeDesc={this.changeDesc} title={this.state.title} />}
            {<Projects project={this.state.projects[this.state.currIndex]} changeProject={this.changeProject} showrl={this.showrl} />}
            {<AboutMe />}
            {}
          </div>
        );
      }
}
