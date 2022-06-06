import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is sri</h2>
        <div className='prompt'>
          <p>I code beautifully simple things, and I love what I do.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>

        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, GraphQL, HTML, CSS, NPM, BootStrap, Yarn, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MYSQL, PHP(CodeIgniter)
            </span>
          </li>
          <li className='item'>
            <h2>Dev Tools</h2>
            <span>
            Github, Gitlab, JIRA
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home