import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { FaGithub } from 'react-icons/fa'
import { HiDesktopComputer } from 'react-icons/hi'

const url = 'https://react-portfolio-api.herokuapp.com/projects'


const Projects = () => {

    const [ projects, setProjects ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const fetchProject = async() => {
        const res = await fetch(url)
        const data = await res.json()

        setIsLoading(false)
        setProjects(data)
    }    

    useEffect(() => {
        fetchProject()
    }, [])

    return (
        isLoading 
        ? <Loading />
        : (
            <section className="section projects">
                <h2 className="section-title">Projects</h2>
                <div className="projects-center">
                    {
                        projects.map(({ id, image, url, github, title, tags}) => {
                            return <article key={id} className="project-tile">
                                <div className="img-container">
                                    <img src={image} alt={title}/>
                                </div>
                                <div className="project-footer">
                                    <h4>{title}</h4>
                                    {
                                        tags.map( tag => ( 
                                            <p>{tag}</p>
                                        ))
                                    }
                                    <div className="project-links">
                                        <a href={url} target='_blank' rel='noreferrer'>
                                            <HiDesktopComputer />
                                        </a>
                                        <a href={github} target='_blank' rel='noreferrer'>
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        })
                    }
                </div>
            </section>
        )
    )
}

export default Projects
