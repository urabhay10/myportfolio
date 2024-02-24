import React, { Component } from 'react'
import githubLogo from '../images/github-logo.png'
import nodeLogo from '../images/node-logo.png'
import mongodbLogo from '../images/mongodb-logo.png'
import expressLogo from '../images/express-logo.png'
import htmlLogo from '../images/html-logo.png'
import cssLogo from '../images/css-logo.png'
import bootstrapLogo from '../images/bootstrap-logo.png'
import reactLogo from '../images/react-logo.png'
import kotlinLogo from '../images/kotlin-logo.png'
import cppLogo from '../images/cpp-logo.png'
import jsLogo from '../images/js-logo.svg'
import pythonLogo from '../images/python-logo.png'

export default class SkillsSection extends Component {
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
      }}>
        <div style={{
            fontWeight: 600,
            fontSize: '2rem',
            webkitTextStroke: '1px #e8e252',
            textStroke: '1px #e8e252',
            color: 'black'
          }} id='skills'>
            Skills
          </div>
          <div style={{
            fontWeight: 600,
            color: '#e8e252',
          }}>
            Backend and DevOps
          </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <img src={githubLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px' 
                    }}/>
                <img src={nodeLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
                <img src={mongodbLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
                <img src={expressLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
            </div>
          <div style={{
            fontWeight: 600,
            color: '#e8e252',
          }}>
            FrontEnd
          </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <img src={htmlLogo} alt='' style={{
                    height: '5vh' ,
                    marginRight: '10px'
                    }}/>
                <img src={cssLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
                <img src={bootstrapLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
                <img src={reactLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
            </div>
          <div style={{
            fontWeight: 600,
            color: '#e8e252',
          }}>
            Programming Languages
          </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <img src={kotlinLogo} alt='' style={{
                    height: '5vh',
                    transform: 'scale(0.9)',
                    marginRight: '10px'
                    }}/>
                <img src={cppLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
                <img src={jsLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
                <img src={pythonLogo} alt='' style={{
                    height: '5vh',
                    marginRight: '10px'
                    }}/>
            </div>
      </div>
    )
  }
}
