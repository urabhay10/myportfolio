import React, { Component } from 'react'
import gmailLogo from '../images/gmail-logo.svg'
import githubLogo from '../images/github-logo.svg'


export default class FooterSection extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                marginTop: '20px',
                bottom: '20px',
                left: 0,
                zIndex: 999,
                background: '#000000',
                borderRadius: '50px',
                padding: '10px'
            }}
                id='about'
            >

                <a target='_blank' rel='noreferrer' href="https://codechef.com/users/urabhay10" style={{
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: '#000000'
                }}>
                    <img src={'https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg'} alt='' style={{
                        height: '50px',
                        borderRadius: '50%'
                    }} />
                </a>

                <a target='_blank' rel='noreferrer' href="https://codeforces.com/profile/hewhocodes" style={{
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: '#000000'
                }}>
                    <img src={'https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3629285-3031869.png'} alt='' style={{
                        height: '50px'
                    }} />
                </a>

                <a target='_blank' rel='noreferrer' href="https://github.com/urabhay10" style={{
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: '#000000'
                }}>
                    <img src={githubLogo} alt='' style={{
                        height: '50px'
                    }} />
                </a>

                <a target='_blank' rel='noreferrer' href="mailto:hewhocodes247@gmail.com" style={{
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: '#000000'
                }}>
                    <img src={gmailLogo} alt='' style={{
                        height: '50px'
                    }} />
                </a>

                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/abhay-upadhyay-7a7597292/" style={{
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: '#000000'
                }}>
                    <span className="fab fa-linkedin" style={{
                        fontSize: '50px',
                        color: '#0077b5'
                    }} />
                </a>

            </div>

        )
    }
}
