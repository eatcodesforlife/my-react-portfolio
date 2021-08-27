import React, { useState, useEffect } from 'react'
import Loading from './Loading'

const url = 'https://react-portfolio-api.herokuapp.com/featureProjects'
const FeaturedProjects = () => {

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
    <div>
      {
        isLoading ? <Loading /> 
        : <div className="projects-center"> 
        {
          projects.map(({id, title, imgURL, description}) =>(
            <div key={id}>
              {title}
              <img src={imgURL} alt={title} />
              <p>{description}</p>
            </div>
          ))
        } 
      </div>

      }
    </div>
  )
}

export default FeaturedProjects
