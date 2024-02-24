import React, { Component } from 'react'

export default class SwitchToDesktop extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90vw',
                height: 'fit-content',
                borderRadius: '10px',
                border: '1px solid #e8e252',
                margin: '10px',
                textAlign: 'center'
            }}
            data-aos="flip-left"
data-aos-duration='1000'>
                <div style={{
                    fontWeight: 600,
                    color: '#e8e252',
                }}>
                    To get the best experience
                </div>
                <div style={{
                    fontWeight: 600,
                    fontSize: '2rem',
                    webkitTextStroke: '1px #e8e252',
                    textStroke: '1px #e8e252',
                    color: 'black'
                }}>
                    Open this site on a laptop or desktop
                </div>
            </div>
        )
    }
}
