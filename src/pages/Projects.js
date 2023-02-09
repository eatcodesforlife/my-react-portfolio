import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import miniProjectThumbNail from '../imgs/react-mini-projects.jpg'
import { useFetch } from '../customHooks/useFetch'

const url = 'https://my-portfolio-api.up.railway.app/featureProjects'
const Projects = () => {

  const { data, isLoading } = useFetch(url)
 
  return (
    <section className="section projects" id='projects-section'>
      <h2 className="section-title">Projects</h2>
      <div className="watermark-container">
        <span className="watermark">
          <h1>projects</h1>
        </span>
      </div>
      {
        isLoading ? <Loading /> 
        : (
          <div className="projects-center"> 
            {
              data.map(({id, title, imgURL, description, githubURL, url, techs }) =>(
                <div key={id} className='projects-featured'>
                  <div className='project-img' >
                    <img src={imgURL} alt={title} />
                  </div>
                  <div className='project-text'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-techs">
                      <h4>Techs in this project:</h4>
                      <ul>
                        {
                          techs.map( tech => (
                            <div key={tech}>
                              <li>{tech}</li>
                            </div>
                          ))
                        }
                      </ul>
                    </div>
                    <div className='project-links'>
                      <a href={url} target='_blank' rel='noopener noreferrer' className='project-url'>
                        <BiLinkExternal/>DEMO</a>
                      <a href={githubURL} target='_blank' rel='noopener noreferrer'
                      className='project-url'
                      ><BiLinkExternal/> GITHUB REPO</a>  
                    </div>
                  </div>
                </div>
              ))
            } 
            <div className='projects-featured'>
              <div className='project-img mini-project-thumbnail' >
                <img src={miniProjectThumbNail} alt='project thumbnail' />
              </div>
              <div className='project-text'>
                <h3>react mini projects</h3>
                <p>Just a collection of mini react projects that helped hone my react skills.</p>
                <div className="project-techs">
                  <h4>Techs in this project:</h4>
                  <ul>
                      <li>React</li>
                      <li>nodejs</li>
                      <li>APIs</li>
                      <li>JSON</li>
                      <li>react-router</li>
                  </ul>
                </div>
                <div className='project-links'>
                  <Link to='/miniprojects' className='project-url'>
                    VIEW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      
      }      
    </section>
  )
}

export default Projects
