import React, { Component } from 'react'
import university from '../images/university.webp'
import school from '../images/school.jpg'
import college from '../images/college.jpeg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default class EducationSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            img: '',
        }
    }
    componentDidMount() {
        this.setState({
            title: 'Veermata Jijabai Technological Institute',
            desc: 'I am currently studing in Veermata Jijabai Technological Institute, Mumbai. Here, I participated in multiple clubs, and took part in many competitions like hackathons. I am pursuing in Bachelor Of Technology in Information Technology. I will graduate in the year 2027. ',
            img: university
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
                textAlign: 'center'
            }}>
                <div style={{
                    fontWeight: 600,
                    fontSize: '2rem',
                    webkitTextStroke: '1px #e8e252',
                    textStroke: '1px #e8e252',
                    color: 'black'
                }} id='education'>
                    Education
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
                        if (this.state.title === 'Veermata Jijabai Technological Institute') {
                            this.setState({
                                title: 'Ramnivas Ruia Junior College',
                                desc: 'I studied at Ramnivas Ruia Autonomous College for my HSC in Mumbai From here, I completed my 11th and 12th grade from 2021 to 2023. During my time at Ramnivas Ruia Junior College, I actively participated in various extracurricular activities. My experiences at Ramnivas Ruia have been instrumental in shaping my academic pursuits and preparing me for future endeavors. During this time, I also prepared for MHT-CET in which I got 99.87%ile.',
                                img: college
                            });
                        } else if (this.state.title === 'Ramnivas Ruia Junior College') {
                            this.setState({
                                title: 'Sir JJ Fort Boys High School',
                                desc: "I completed my 10th grade from Sir JJ Fort Boys High School. I received a strong foundation in various subjects with laid my foundation. I scored 94% in my 10th grade along with 99% in Maths. My teachers guided me to the right path ahead every time.",
                                img: school
                            });
                        } else {
                            this.setState({
                                title: 'Veermata Jijabai Technological Institute',
                                desc: 'I am currently studing in Veermata Jijabai Technological Institute, Mumbai. Here, I participated in multiple clubs, and took part in many competitions like hackathons. I am pursuing in Bachelor Of Technology in Information Technology. I will graduate in the year 2027. ',
                                img: university
                            });
                        }
                    }}><FaChevronLeft color='#52e8e2' /></div>
                    <img src={this.state.img} alt='' style={{
                        height: '20vh',
                        marginRight: '10px',
                        marginLeft: '10px'
                    }} />
                    <div onClick={() => {
                        if (this.state.title === 'Veermata Jijabai Technological Institute') {
                            this.setState({
                                title: 'Sir JJ Fort Boys High School',
                                desc: "I completed my 10th grade from Sir JJ Fort Boys High School. I received a strong foundation in various subjects with laid my foundation. I scored 94% in my 10th grade along with 99% in Maths. My teachers guided me to the right path ahead every time.",
                                img: school
                            });
                        } else if (this.state.title === 'Ramnivas Ruia Junior College') {
                            this.setState({
                                title: 'Veermata Jijabai Technological Institute',
                                desc: 'I am currently studing in Veermata Jijabai Technological Institute, Mumbai. Here, I participated in multiple clubs, and took part in many competitions like hackathons. I am pursuing in Bachelor Of Technology in Information Technology. I will graduate in the year 2027. ',
                                img: university
                            });
                        } else {
                            this.setState({
                                title: 'Ramnivas Ruia Junior College',
                                desc: 'I studied at Ramnivas Ruia Autonomous College for my HSC in Mumbai From here, I completed my 11th and 12th grade from 2021 to 2023. During my time at Ramnivas Ruia Junior College, I actively participated in various extracurricular activities. My experiences at Ramnivas Ruia have been instrumental in shaping my academic pursuits and preparing me for future endeavors. During this time, I also prepared for MHT-CET in which I got 99.87%ile.',
                                img: college
                            });
                        }
                    }}><FaChevronRight color='#52e8e2' /></div>
                </div>
                <div style={{
                    color: '#e8e252',
                }}>
                    {this.state.desc}
                </div>
            </div >
        )
    }
}
