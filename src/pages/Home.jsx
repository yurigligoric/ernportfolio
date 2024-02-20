import React from 'react'
import image from '../assets/ernbanawa.jpg'
//import resume from '../assets/CV_Ernesto BanawaJr.doc'

function Home() {
  return (
    <div className='flex flex-col custom-bg-color text-white w-full h-full pt-16 font-serif'>
        <div className='flex flex-1 flex-col lg:flex-row justify-evenly' >
            <div className='flex mt-10 items-center justify-center flex-col'>
                <h1 className='text-5xl mb-2 font-serif'>Hi I&apos;m Ern</h1>    
                <h1 className='text-2xl ml-4 lg:text-3xl font-serif'>Software and Game Developer</h1>
            </div>
            <div className='flex items-center justify-center'>
                <img src={image} className='mt-10 rounded-full w-48 h-48 sm:w-64 sm:h-64'/>

            </div>
        </div>
        <div id="about" className='justify-center flex flex-col items-center mt-12 custom-bg-color2'>
            <div>
                <h1 className='text-3xl font-serif'>About Me</h1>

            </div>
            <div>
                <p>I&apos;m a passionate software and game developer</p>

            </div>
        </div>
        <div id="skills" className='items-center justify-center flex flex-row mt-12'>
            <h1 className='mr-3'>Skills:  </h1>
            <p>Javascript, React JS, React Native, C#, Unity, Unreal Engine, Git, Plastic SCM, Node, Express, MongoDB</p>
        </div>
        <div id='works' className='justify-center flex flex-col items-center mt-11'>
            <h1>Works and Projects</h1>
            <div className='flex flex-col lg:flex-row justify-evenly mb-10'>
                <div className='ml-7 mr-7'>
                    <img src={image} className='border-solid border-yellow-400 border-4'/>
                </div>
                <div className='ml-7 mr-7'>
                    <img src={image} className='border-solid border-yellow-400 border-4'/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className='ml-7 mr-7'>
                    <img src={image} className='border-solid border-yellow-400 border-4'/>
                </div>
                <div className='ml-7 mr-7'>
                    <img src={image} className='border-solid border-yellow-400 border-4'/>
                </div>
            </div>
        </div>

        <a href="../assets/CV_Ernesto BanawaJr.doc" download="ErnBanawaResume.doc">
        Download Resume
      </a>
    </div>
 
 
     )
}

export default Home