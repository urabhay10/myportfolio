import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'black',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                zIndex: 1,
                height: '5vh',
                boxShadow: '0px 0px 10px 0px black',
                flexDirection: 'row',
                left: 0,
                borderBottom: '1px solid #52e8e2'
            }}>
                <a href="#skills" style={{ fontWeight: 'bold', color: '#52e8e2' }}>Skills</a>
                <a href="#education" style={{ fontWeight: 'bold', color: '#52e8e2' }}>Education</a>
                <a href="#projects" style={{ fontWeight: 'bold', color: '#52e8e2' }}>Projects</a>
                <a href="#about" style={{ fontWeight: 'bold', color: '#52e8e2' }}>About</a>
            </div>
        )
    }
}
