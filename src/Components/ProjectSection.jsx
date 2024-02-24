import React, { Component } from 'react'
import Spear from '../images/spear.webp'
import PNH from '../images/favicon.svg'
import technoLogo from '../images/techno-logo.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import githubLogo from '../images/github-logo.png'
import linkLogo from '../images/link.png'

export default class ProjectSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            link: '',
            img: '',
            github: ''
        }
    }
    componentDidMount() {
        this.setState({
            title: 'Spear - Your AI powered novel writer',
            desc: 'Made the entire backend and frontend of the application. I used React Js for frontend, Express Js and Node Js for backend and MongoDB for database. I also used the Gemini Ultra API to assist the user to get ideas for continuation of story or get a review of their story. I also used animations for loading pages. This website is responsive with different screen sizes.',
            github: 'https://github.com/urabhay10/spear',
            link: 'https://spear-frontend-c11f196e0a40.herokuapp.com/',
            img: Spear
        })
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90vw',
                height: 'fit-content',
                marginTop: '5vh',
                borderRadius: '10px',
                border: '1px solid #e8e252',
                textAlign: 'center',
                padding: '10px'
            }} id='projects'
            data-aos="flip-left"
data-aos-duration='1000'>
                <div style={{
                    fontWeight: 600,
                    fontSize: '2rem',
                    webkitTextStroke: '1px #e8e252',
                    textStroke: '1px #e8e252',
                    color: 'black'
                }} id='education'>
                    Projects
                </div>
                <div style={{
                    fontWeight: 600,
                    color: '#e8e252',
                }}>
                    {this.state.title}
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                    <div onClick={() => {
                        if (this.state.title === 'Spear - Your AI powered novel writer') {
                            this.setState({
                                title: 'Technovanza - Events Page',
                                desc: "Worked with Technovanza Vjti, one of Asia's largest Techno-Managerial fest, to create the events page for their website. I worked with a team to design this page. Here, I used React Js and along with framer to write design the page for smooth animations. I also used the react-router-dom to navigate between different pages. ",
                                link: 'https://technovanza.org/events',
                                github: 'https://github.com/',
                                img: technoLogo
                            });
                        } else if (this.state.title === 'Technovanza - Events Page') {
                            this.setState({
                                title: 'PassNotesHub',
                                desc: 'This application helps any user to store or even share their notes with others. I used Bootstrap for css, React Js for frontend, Express Js and Node Js for backend and MongoDB for database. I added password hashing for storing passwords of users securely.',
                                link: 'https://pnh-da91bb20eaaa.herokuapp.com/',
                                github: 'https://github.com/urabhay10/pnh',
                                img: PNH
                            });
                        } else {
                            this.setState({
                                title: 'Spear - Your AI powered novel writer',
                                desc: 'Made the entire backend and frontend of the application. I used React Js for frontend, Express Js and Node Js for backend and MongoDB for database. I also used the Gemini Ultra API to assist the user to get ideas for continuation of story or get a review of their story. I also used animations for loading pages. This website is responsive with different screen sizes.',
                                github: 'https://github.com/urabhay10/spear',
                                link: 'https://spear-frontend-c11f196e0a40.herokuapp.com/',
                                img: Spear
                            });
                        }
                    }}><FaChevronLeft color='#52e8e2' /></div>
                    <img src={this.state.img} alt='' style={{
                        height: '20vh',
                        marginRight: '10px',
                        marginLeft: '10px'
                    }} />
                    <div onClick={() => {
                        if (this.state.title === 'PassNotesHub') {
                            this.setState({
                                title: 'Technovanza - Events Page',
                                desc: "Worked with Technovanza Vjti, one of Asia's largest Techno-Managerial fest, to create the events page for their website. I worked with a team to design this page. Here, I used React Js and along with framer to write design the page for smooth animations. I also used the react-router-dom to navigate between different pages. ",
                                link: 'https://technovanza.org/events',
                                github: 'https://github.com/',
                                img: technoLogo
                            });
                        } else if (this.state.title === 'Spear - Your AI powered novel writer') {
                            this.setState({
                                title: 'PassNotesHub',
                                desc: 'This application helps any user to store or even share their notes with others. I used Bootstrap for css, React Js for frontend, Express Js and Node Js for backend and MongoDB for database. I added password hashing for storing passwords of users securely.',
                                link: 'https://pnh-da91bb20eaaa.herokuapp.com/',
                                github: 'https://github.com/urabhay10/pnh',
                                img: PNH
                            });
                        } else {
                            this.setState({
                                title: 'Spear - Your AI powered novel writer',
                                desc: 'Made the entire backend and frontend of the application. I used React Js for frontend, Express Js and Node Js for backend and MongoDB for database. I also used the Gemini Ultra API to assist the user to get ideas for continuation of story or get a review of their story. I also used animations for loading pages. This website is responsive with different screen sizes.',
                                github: 'https://github.com/urabhay10/spear',
                                link: 'https://spear-frontend-c11f196e0a40.herokuapp.com/',
                                img: Spear
                            });
                        }
                    }}><FaChevronRight color='#52e8e2' /></div>
                </div>
                <div style={{
                    color: '#e8e252',
                }}>
                    {this.state.desc}
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: '10px',
                    bottom: '10px',
                    width: '100%',
                    fontWeight: 'bold',
                    height: '50px',
                    padding: '5px'
                }}>
                    <a rel='noreferrer' target="_blank" href={this.state.github} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#e8e252',
                        textDecoration: 'none',
                        border: '1px solid #e8e252',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        width: '48%',
                        boxSizing: 'border-box',
                    }}>
                        <img alt='GitHub' src={githubLogo} style={{
                            height: '30px',
                            marginRight: '5px',
                        }} />
                        GitHub
                    </a>
                    <a rel='noreferrer' target="_blank" href={this.state.link} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#e8e252',
                        textDecoration: 'none',
                        border: '1px solid #e8e252',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        width: '48%',
                        boxSizing: 'border-box',
                    }}>
                        <img alt='Website' src={linkLogo} style={{
                            height: '30px',
                            marginRight: '5px',
                        }} />
                        Website
                    </a>
                </div>
            </div >
        )
    }
}
