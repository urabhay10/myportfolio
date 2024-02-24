import React, { Component } from 'react'
import Navbar from './Navbar'
import IntroText from './IntroText'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'
import FooterSection from './FooterSection'

export default class MobileVersion extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100vw',
            minHeight: '100vh',
            top: '10vh',
            position: 'absolute',
            padding: '5px',
            overflowY: 'scroll',
            left: 0,
            color: '#e8e252',
        }}>
        <IntroText/>
        <SkillsSection/>
        <EducationSection/>
        <ProjectSection/>
        <AboutSection/>
        <FooterSection/>
        <div style={{
            color: '#52e8e2',
        }}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Made By Abhay Upadhyay</div>
        </div>
      </div>
    )
  }
}
