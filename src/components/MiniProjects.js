import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { FaGithub } from 'react-icons/fa'
import { HiDesktopComputer } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'

const url = 'https://react-portfolio-api.herokuapp.com/projects'


const MiniProjects = () => {

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
        <section className="section projects">
            <h2 className="section-title">Mini Projects</h2>
            <div className="underline"></div>
            {
                isLoading 
                ? <Loading />
                : <div className="projects-center">
                    {
                        projects.map(({ id, image, url, github, title, tags, bgColor}) => {
                            return <article key={id} className="mini-project-tile">
                                <div className="img-container">
                                    <img src={image} alt={title}/>
                                </div>
                                 <div className="mini-project-footer" style={{backgroundColor:`${bgColor}`}}>
                                    <h4>{title}</h4>
                                    <ul>
                                        {
                                        tags.map( (tag, index) => ( 
                                            <li key={index}>{tag}</li>
                                        ))
                                    }
                                    </ul>
                                    <div className="mini-project-links">
                                        <a href={url} target='_blank' rel='noreferrer'>
                                            <HiDesktopComputer />
                                        </a>
                                        <a href={github} target='_blank' rel='noreferrer'>
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                <div className="mini-project-tile-overlay" style={{backgroundColor:`${bgColor}`}}>
                                    <div className='tile-overlay-links'>
                                        <a href={url} rel='noreferrer' target='_blank'>
                                            <BiLinkExternal/> demo
                                        </a>
                                        <a href={github} rel='noreferrer' target='_blank'>
                                            <BiLinkExternal/> github
                                        </a>
                                    </div>
                                </div>
                            </article>
                        })
                    }
                </div>
            }
        </section>
    )
}

export default MiniProjects
