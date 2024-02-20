import React from 'react'
import image from '../assets/ernbanawa.jpg'
//import resume from '../assets/CV_Ernesto BanawaJr.doc'

function Home() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-evenly'>
            <div>
                <h1>Hi I&apos;m Ern</h1>    
                <h1>Software and Game Developer</h1>
            </div>
            <img src={image} />
        </div>
        <div>
            <h1>About Me</h1>
            <p>I'm a passionate software and game developer</p>
        </div>
        <div>
            <h1>Skills</h1>
            <p>javascript, React JS, React Native, C#, Unity, Unreal Engine, Git, Plastic SCM, Node, Express, MongoDB</p>
        </div>
        <div>
            <h1>Works and Projects</h1>
            

        </div>
        Home
        <a href="../assets/CV_Ernesto BanawaJr.doc" download="ErnBanawaResume.doc">
        Download Resume
      </a>
    </div>
 
 
     )
}

export default Home