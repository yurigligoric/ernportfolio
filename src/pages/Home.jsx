import React from 'react'
import image from '../assets/ernbanawa.jpg'
//import resume from '../assets/CV_Ernesto BanawaJr.doc'
import revup from '../assets/FrontRevUp.png'
import mindboost from '../assets/mindboost.png'
import quotes from '../assets/quotes.png'

function Home() {
  return (
    <div className='flex flex-col custom-bg-color text-white w-full h-full pt-16'>
        <div className='flex flex-1 flex-col lg:flex-row justify-evenly' >
            <div className='flex mt-10 items-center justify-center flex-col'>
                <h1 className='text-5xl mb-2 font-serif '>Hi, I&apos;m Ern</h1>    
                <h1 className='text-2xl ml-4 lg:text-3xl'>Software and Game Developer</h1>
            </div>
            <div className='flex items-center justify-center'>
                <img src={image} className='mt-10 rounded-full w-48 h-48 sm:w-64 sm:h-64'/>

            </div>
        </div>
        <div id="about" className='justify-center flex flex-col items-center mt-12 lg:mt-24  '>
            <div className='flex flex-col custom-bg-color2 w-full lg:w-[65%] rounded-b-3xl lg:rounded-t-none rounded-t-3xl'>
                <div>
                    <h1 className='text-3xl font-serif justify-center flex flex-col items-center mt-5'>About Me</h1>
                </div>
                <div className='flex flex-col content-center justify-center mt-4'>
                    <p className='ml-4 mr-3 lg:ml-12 lg:mr-12'>I&apos;m a passionate software and game developer with years of experience creating and maintaining software, web and game apps. Since the start of my working career I have always gravitated to software development and I want to continue it that way. </p>
                    <div className='flex justify-center content-center text-blue-400 mt-5'>
                        <a href="../assets/CV_Ernesto BanawaJr.doc" download="ErnBanawaResume.doc">
                        Download Resume
                        </a>
                    </div>
                </div>
            </div>
            <div>

            </div>


        </div>
        <div id="skills" className='items-center justify-center flex flex-col lg:flex-row mt-12'>
            <h1 className='mr-3 font-serif text-2xl'>Skills:  </h1>
            <p className='flex items-center justify-center ml-5'>Javascript, React JS, React Native, C#, Unity, Unreal Engine, Git, Plastic SCM, Node, Express, MongoDB</p>
        </div>
        <div id='works' className='justify-center flex flex-col items-center mt-11 mb-12'>
            <h1 className='text-2xl font-serif mb-5'>Works and Projects</h1>
            <div className='flex flex-col lg:flex-row mb-12 lg:items-center mt-4 mr-2 lg:mr-48'>
                <div className='w-full lg:w-[50%]'>
                    <div className='ml-2 lg:ml-48'>
                        <img src={mindboost} className='border-solid border-yellow-400 border-4 mx-auto '/>

                    </div>
                </div>
                <div className='w-full lg:w-[50%] ml-8 mr-12 pr-12'>
                    <p className='text-lg mt-8 lg:-mt-24 '>An app made in React Native. It is a collection of self-help written materials that can help the user bounce back and gain mental fortitude in facing his/her challenges. </p>
                </div>
               
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center mb-10'>
                <div className='w-full lg:w-[50%] mt-4 lg:-mt-0 lg:ml-48 pr-32 mx-auto lg:mr-12'>
                    <p className='text-lg ml-2'>An app made in React Native. It is a collection of self-help written materials that can help the user bounce back and gain mental fortitude in facing his/her challenges. </p>
                </div>
                <div className='lg:mr-24'>
                    <div className='lg:mr-68'>
                        <img src={quotes} className='border-solid border-yellow-400 border-4 mx-auto'/>
                    </div>
                </div>
               
            </div>
            <div  className='flex lg:flex-row flex-col mb-12 items-center mt-4 mr-48'>
                
                <div className='w-[50%] ml-7 pl-32'>
                    <img src={revup} className='object-cover border-solid border-yellow-400 border-4 mx-auto' />
                </div>
                <div className='w-[50%] ml-8 mr-12 pr-12'>
                    <p className='text-lg -mt-24 '>An app made in React Native. It is a collection of self-help written materials that can help the user bounce back and gain mental fortitude in facing his/her challenges. </p>
                </div>
            </div>
        </div>
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                &copy; 2024 Ern Banawa. All rights reserved.
            </div>
        </footer>
    
       
    </div>
 
 
     )
}

export default Home