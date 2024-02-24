import React, { Component } from 'react'

export default class IntroText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    async componentDidMount() {
        let i = 0;
        const name = 'Abhay Upadhyay';
        while(i < name.length) {
            await new Promise(r => setTimeout(r, 100));
            this.setState({ name: name.substring(0, i + 1) });
            i++;
        }
    }
    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90vw',
                    height: 'fit-content',
                    borderRadius: '10px',
                    border: '1px solid #e8e252',
                }}>
                    <div style={{
                        fontWeight: 600,
                        color: '#e8e252',
                    }}>
                        Hi I'm
                    </div>
                    <div style={{
                        fontWeight: 600,
                        fontSize: '2rem',
                        webkitTextStroke: '1px #e8e252',
                        textStroke: '1px #e8e252',
                        color: 'black'
                    }}>
                        {this.state.name}
                    </div>
                </div>
            </div>
        )
    }
}
