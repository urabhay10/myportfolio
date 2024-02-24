import React, { Component } from 'react'
import { FaChevronUp } from "react-icons/fa";
import './css/Footer.css'
import githubLogo from '../images/github-logo.svg'
import ccLogo from '../images/cc-logo.svg'
import gmailLogo from '../images/gmail-logo.svg'
import cfLogo from '../images/codeforces-logo.png'

export default class AboutMe extends Component {
  render() {
    return (
      <div style={{
        top: 0,
        left: 0,
        transform: 'translateY(100%)',
        position: 'absolute',
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        color: 'white',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <div onClick={() => {
          window.scrollBy({
            top: -window.scrollY,
            behavior: 'smooth'
          });
        }} style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #52e8e2',
          borderRadius: '10px',
          cursor: 'pointer',
        }}>
          <FaChevronUp color='#52e8e2' />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#52E8E2',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '2em',
            fontWeight: 'bold'
          }} className='border-only-text2'>About Me</div>
          <div>
            I am currently a First Year student pursuing a B.Tech in Information Technology. Alongside my studies, I actively engage in full-stack development, working on various projects both independently and as part of a team. I enjoy tackling new problem statements and constantly challenging myself to learn and grow. As a competitive programmer, I have participated in numerous contests on platforms like <a href='https://codechef.com/users/urabhay10' style={{ textDecoration: 'none', fontWeight: 'bold', color: '#29B270' }}>CodeChef</a>, <a href='https://codeforces.com/profile/hewhocodes' style={{ textDecoration: 'none', fontWeight: 'bold', color: '#29B270' }}>Codeforces</a>, and <a href='https://leetcode.com/urabhay10/' style={{ textDecoration: 'none', fontWeight: 'bold', color: '#29B270' }}>LeetCode</a>. This not only sharpens my problem-solving skills but also allows me to stay updated with the latest trends in algorithms and data structures. I am passionate about collaboration and enjoy working with others to tackle challenges and learn new things. I am very competitive and always strive to be the best in whatever I do. I am also a quick learner and can adapt to new technologies and tools with ease. I try to maintain a balance between my academic and extracurricular activities. My hobbies are playing chess and writing new stories especially science fiction.
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          bottom: '20px',
          position: 'absolute',
        }}>
          <ul className='social'>
            <li>
              <a href="https://codechef.com/users/urabhay10">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><img src={ccLogo} alt='' /></span>
              </a>
            </li>
            <li>
              <a href="https://codeforces.com/profile/hewhocodes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><img src={cfLogo} alt='' style={{
                  maxHeight: '90%',
                  maxWidth: '90%'
                }} /></span>
              </a>
            </li>
            <li>
              <a href="https://github.com/urabhay10">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><img src={githubLogo} alt='' style={{
                  maxHeight: '90%',
                  maxWidth: '90%'
                }} /></span>
              </a>
            </li>
            <li>
              <a href="mailto:hewhocodes247@gmail.com">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><img src={gmailLogo} alt='' style={{
                  maxHeight: '90%',
                  maxWidth: '90%'
                }} /></span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhay-upadhyay-7a7597292/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
          <div style={{
            marginRight: '20px',
            color: '#52E8E2',
            fontWeight: 'bold',
          }}> 
          <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Made by <a href='' style={{
            color: '#29B270'
          }}>Abhay Upadhyay</a></div>
        </div>
      </div>
    )
  }
}
