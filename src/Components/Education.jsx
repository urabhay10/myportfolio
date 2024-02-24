import React, { Component } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default class Education extends Component {
    render() {
        return (
            <div>
                <div style={{
                    top: 0,
                    left: 0,
                    transform: 'translateX(-100vw)',
                    position: 'absolute',
                    backgroundColor: 'black',
                    width: '100vw',
                    height: '100vh',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '10px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    transition: 'transform 0.5s ease',
                    zIndex: 10
                }}
                    id='education'
                >
                    <div style={{
                        color: '#52E8E2',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '2em',
                            fontWeight: 'bold'
                        }} className='border-only-text2'>Education</div>
                        <div style={{
                            fontSize: '1.5em',
                            fontWeight: 'bold'
                        }}>{this.props.title}</div>
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
                                    if (this.props.title === 'Veermata Jijabai Technological Institute') {
                                        this.props.changeDesc('college');
                                    } else if (this.props.title === 'Ramnivas Ruia Junior College') {
                                        this.props.changeDesc('school');
                                    } else {
                                        this.props.changeDesc('university');
                                    }
                                }}
                            >
                                <FaChevronLeft color='#52e8e2' /></div>
                            <img src={this.props.img} alt='' style={{
                                width: '50vh',
                                height: '50vh',
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
                                if (this.props.title === 'Veermata Jijabai Technological Institute') {
                                    this.props.changeDesc('school');
                                } else if (this.props.title === 'Ramnivas Ruia Junior College') {
                                    this.props.changeDesc('university');
                                } else {
                                    this.props.changeDesc('college');
                                }
                            }}>
                                <FaChevronRight color='#52e8e2' />
                            </div>
                        </div>
                        <div>
                            {this.props.desc}
                        </div>
                    </div>
                    <div onClick={() => {
                        document.getElementById('education').style.transform = 'translateX(-100%)';
                    }} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid #52e8e2',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        height: '100%',
                        width: '16px'
                    }}>
                        <FaChevronRight color='#52e8e2' />
                    </div>
                </div>
            </div>
        )
    }
}
