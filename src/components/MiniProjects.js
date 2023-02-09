import React from 'react'
import Loading from './Loading'
import { FaGithub } from 'react-icons/fa'
import { HiDesktopComputer } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'
import { useFetch } from '../customHooks/useFetch'

const url = 'https://my-portfolio-api.up.railway.app/projects'


const MiniProjects = () => {

    const { data, isLoading } = useFetch(url)

    return (
        <section className="section projects">
            <h2 className="section-title">Mini Projects</h2>
            <div className="underline"></div>
            {
                isLoading 
                ? <Loading />
                : <div className="projects-center">
                    {
                        data.map(({ id, image, url, github, title, tags, bgColor}) => {
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
                                        <a href={url} target='_blank' rel='noopener noreferrer'>
                                            <HiDesktopComputer />
                                        </a>
                                        <a href={github} target='_blank' rel='noopener noreferrer'>
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                <div className="mini-project-tile-overlay" style={{backgroundColor:`${bgColor}`}}>
                                    <div className='tile-overlay-links'>
                                        <a href={url} rel='noopener noreferrer' target='_blank'>
                                            <BiLinkExternal/> demo
                                        </a>
                                        <a href={github} rel='noopener noreferrer' target='_blank'>
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
