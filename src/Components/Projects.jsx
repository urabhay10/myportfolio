import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import githubLogo from '../images/github-logo.png';
import linkLogo from '../images/link.png';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div style={{
                    top: 0,
                    left: 0,
                    transform: 'translateX(100%)',
                    position: 'absolute',
                    backgroundColor: 'black',
                    width: '100vw',
                    height: '100vh',
                    color: 'white',
                    padding: '10px',
                    transition: 'transform 0.5s ease',
                    zIndex: 10
                }}
                id='projects'
                >
                    <div onClick={() => {
                        document.getElementById('projects').style.transform = 'translateX(100%)';
                    }} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid #52e8e2',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        height: '100%',
                        width: '16px',
                        left: 0,
                        position: 'absolute',
                        marginRight: '10px'
                    }}>
                        <FaChevronLeft color='#52e8e2' />
                    </div>
                    <div style={{
                        color: '#52E8E2',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '2em',
                            fontWeight: 'bold'
                        }} className='border-only-text2'>Projects</div>
                        <div style={{
                            fontSize: '1.5em',
                            fontWeight: 'bold'
                        }}><a href={this.props.project.link} style={
                            {
                                color: '#52E8E2',
                            }
                        }>{this.props.project.title}</a></div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{
                                border: '1px solid #52e8e2',
                                padding: '10px',
                                borderRadius: '20%',
                                backgroundColor: 'rgb(255,255,255,0.2)',
                                marginLeft: '100px',
                                marginRight: '100px',
                                width: '50px',
                                height: '50px',
                            }}
                                onClick={() => {
                                    if (this.props.project.title === 'Spear - Your AI powered novel writer') {
                                        this.props.changeProject(2);
                                    } else if (this.props.project.title === 'PassNotesHub') {
                                        this.props.changeProject(0);
                                    }else{
                                        this.props.changeProject(1)
                                    }
                                }}
                            >
                                <FaChevronLeft color='#52e8e2' /></div>
                            <img src={this.props.project.img} alt='' style={{
                                width: '50vh',
                                height: '50vh',
                                borderRadius: '50%'
                            }} />
                            <div style={{
                                border: '1px solid #52e8e2',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px',
                                borderRadius: '20%',
                                backgroundColor: 'rgb(255,255,255,0.2)',
                                marginLeft: '100px',
                                marginRight: '100px',
                                width: '50px',
                                height: '50px',
                            }} onClick={() => {
                                if (this.props.project.title === 'Spear - Your AI powered novel writer') {
                                    this.props.changeProject(1);
                                } else if (this.props.project.title === 'PassNotesHub') {
                                    this.props.changeProject(2);
                                }else{
                                    this.props.changeProject(0)
                                }
                            }}>
                                <FaChevronRight color='#52e8e2' />
                            </div>
                        </div>
                        <div style={{
                            padding: '10px'
                        }}>
                            {this.props.project.desc}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: '10px',
                            bottom: '10px',
                            position: 'absolute',
                            width: '100%',
                            fontWeight: 'bold',
                            height: '50px',
                        }}>
                            <a rel='noreferrer' target="_blank" href={this.props.project.github} style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#52E8E2',
                                textDecoration: 'none',
                                border: '1px solid #52E8E2',
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
                            <a rel='noreferrer' target="_blank" href={this.props.project.link} style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#52E8E2',
                                textDecoration: 'none',
                                border: '1px solid #52E8E2',
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
                    </div>
                </div>
            </div>
        )
    }
}
