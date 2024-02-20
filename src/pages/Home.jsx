import React from 'react'
import image from '../assets/ernbanawa.jpg'
//import resume from '../assets/CV_Ernesto BanawaJr.doc'

function Home() {
  return (
    <div className='flex flex-col bg-black text-white w-full h-full pt-16 font-serif'>
        <div className='flex flex-1 flex-col lg:flex-row justify-evenly' >
            <div className='mt-10'>
                <h1 className='lg:text-5xl mb-2 font-serif'>Hi I&apos;m Ern</h1>    
                <h1 className='ml-4 lg:text-3xl font-serif'>Software and Game Developer</h1>
            </div>
            <img src={image} className='object-cover mt-10'/>
        </div>
        <div id="about" className='justify-center flex flex-col items-center mt-12'>
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
                    <img src={image}/>
                </div>
                <div className='ml-7 mr-7'>
                    <img src={image}/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className='ml-7 mr-7'>
                    <img src={image}/>
                </div>
                <div className='ml-7 mr-7'>
                    <img src={image}/>
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