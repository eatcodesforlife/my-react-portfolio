import React from 'react'
import { FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { 
    DiHtml5, 
    DiCss3, 
    DiJsBadge, 
    DiHeroku, 
    DiSass, 
    DiMongodb, 
    DiReact,
    DiGit
} from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiVisualstudiocode } from 'react-icons/si'

export const social = [
    {
        id: 1,
        url: 'https://twitter.com/developing_Dev',
        icon: <FaTwitter />
    },
     {
        id: 2,
        url: 'https://www.linkedin.com/in/cris-acosta-114ba515b',
        icon: <FaLinkedin />
    },
     {
        id: 3,
        url: 'https://github.com/eatcodesforlife',
        icon: <FaGithub />
    }
]

export const navlinks = [
    {
        id: 1,
        url: '/',
        text: 'home'
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects'
    },
    {
        id: 2,
        url: '/about',
        text: 'about'
    },
    {
        id: 4,
        url: '/contact',
        text: 'contact'
    }    
]

export const toolIcons = [
    { 
        id: 1,
        icon: <DiJsBadge />,
        text: 'JavaScript'
    },
    { 
        id: 2,
        icon: <DiHtml5 />,
        text: 'HTML'
    },
    { 
        id: 3,
        icon: <DiCss3 />,
        text: 'CSS'
    },
    { 
        id: 4,
        icon: <DiHeroku />,
        text: 'Heroku'
    },
    { 
        id: 5,
        icon: <BsFillBootstrapFill />,
        text: 'Bootstrap'
    },
    { 
        id: 6,
        icon: <DiSass />,
        text: 'Sass'
    },
    { 
        id: 7,
        icon: <DiMongodb />,
        text: 'MongoDB'
    },
    { 
        id: 8,
        icon: <DiReact />,
        text: 'React'
    },
    { 
        id: 9,
        icon: <FaNodeJs />,
        text: 'Node JS'
    },
    { 
        id: 10,
        icon: <SiVisualstudiocode/>,
        text: 'VS Code'
    },
    { 
        id: 11,
        icon: <DiGit/>,
        text: 'Git'
    },
    { 
        id: 13,
        icon: <FaGithub/>,
        text: 'Github'
    }
]