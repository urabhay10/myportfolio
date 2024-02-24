import React, { Component } from 'react'

export default class AboutSection extends Component {
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
                padding: '10px',
            }}
            data-aos="flip-left"
data-aos-duration='1000'>
                <div style={{
                    fontWeight: 600,
                    fontSize: '2rem',
                    webkitTextStroke: '1px #e8e252',
                    textStroke: '1px #e8e252',
                    color: 'black'
                }} id='about'>
                    About Me
                </div>
                <div style={{
                    color: '#e8e252',
                }}>
                    <div>
                        As a first-year B.Tech student in Information Technology, I actively pursue full-stack development, both independently and collaboratively. Participating in competitive programming contests on platforms like CodeChef and Codeforces sharpens my problem-solving skills and keeps me updated with the latest trends in algorithms. Passionate about collaboration, I strive for excellence and adapt quickly to new technologies. Maintaining a balance between academics and extracurriculars, I enjoy playing chess and writing science fiction stories.
                    </div>
                </div>
            </div >
        )
    }
}
