import React from 'react'

import image from '../assets/ern_profile.png'
//import resume from '../assets/CV_Ernesto BanawaJr.doc'
import revup from '../assets/FrontRevUp.png'
import mindboost from '../assets/mindboost.png'
import quotes from '../assets/quotes.png'

const externalLinks = {
    mindboost : "https://play.google.com/store/apps/details?id=com.mindboosterapp&hl=en-PH",
    revup : "https://play.google.com/store/apps/details?id=com.u92GamesStudio.RevUp&hl=en-PH",
    quotes: "https://play.google.com/store/apps/details?id=com.u92gamesstudio.dailyquotesapp&hl=en-PH"
}

function Home() {

    const handleClick = (event) =>{
        const id = event.currentTarget.id
        const externalLink = externalLinks[id];
        
        if(externalLink)
        {
            window.open(externalLink, '_blank')
        } else{
            console.error('No external link provided')
        }
    }

    return (
    <div id="home" className='flex flex-col custom-bg-color text-white w-full h-full pt-16'>
        {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-full h-80 bg-blue-800 rounded-full opacity-70"></div>
            </div> */}
        <div className='flex flex-row justify-end'>
            <nav >
                <ul className='flex flex-row lg:mr-64 lg:mt-2 -mt-6'>
                    <li className='text-lg mr-6'><a href="#home">Home</a></li>
                    <li className='text-lg mr-6'><a href="#about">About</a></li>
                    <li className='text-lg mr-6'><a href="#works">Works</a></li>
                </ul>
            </nav>
        </div>
        <div className='flex flex-1 flex-col lg:flex-row justify-evenly mt-12' >
            <div className='flex mt-10 items-center justify-center flex-col'>
                <h1 className='text-5xl mb-2 font-serif '>Hi, I&apos;m Ern</h1>    
                <h1 className='text-2xl ml-2 lg:ml-4 lg:text-3xl'>Software and Game Developer</h1>
            </div>
            <div className='flex items-center justify-center'>
                <img src={image} className='mt-10 rounded-full w-48 h-48 sm:w-64 sm:h-64'/>

            </div>
        </div>
        <div id="about" className='justify-center flex flex-col items-center mt-12 lg:mt-24  '>
            <div id="about" className='flex flex-col custom-bg-color2 w-full lg:w-[65%] rounded-b-3xl lg:rounded-t-none rounded-t-3xl'>
                <div>
                    <h1 className='text-3xl  justify-center font-serif flex flex-col items-center mt-5'>About Me</h1>
                </div>
                <div className='flex flex-col content-center justify-center mt-4'>
                    <p className='ml-4 mr-3 lg:mr-12 lg:ml-12 pb-3'>I&apos;m a passionate software and game developer with years of experience creating and maintaining software, web and game apps. It has always been my mantra to continue learning and technology has always supplied the reasons for it. Lastly, my mission in engaging in tech industry is to provide the best software apps to the limits of my skills and creativity.</p>
                    {/* <div className='flex content-center justify-center text-blue-400 mt-5'>
                        <a href="../assets/CV_ErnestoBanawaJr.doc" download="ErnBanawaResume.doc">
                        Download Resume
                        </a>
                    </div> */}
                </div>
            </div>
            <div>

            </div>


        </div>
        <div id="skills" className='items-center flex justify-center  flex-col lg:flex-row mt-12'>
            <h1 className='mr-3 font-serif text-2xl'>Skills:  </h1>
            <p className='flex items-center justify-center ml-5'>Javascript, React JS, React Native, C#, Unity, Unreal Engine, Git, Plastic SCM, Node, Express, MongoDB</p>
        </div>
        <div id='works' className='justify-center flex flex-col items-center mt-2 mb-12'>
            <h1 className='text-3xl font-serif mb-5 mt-12'>Works and Projects</h1>
            <div className='flex flex-col lg:flex-row mb-12 lg:items-center mt-4 mr-2 lg:mr-48'>
                <div className='w-full lg:w-[50%]'>
                    <div className='ml-2 lg:ml-48'>
                        <img src={mindboost} className='border-solid border-yellow-400 border-4 mx-auto transform transform-transition hover:scale-110'/>

                    </div>
                </div>
                <div className='w-full lg:w-[50%] ml-8 mr-12 pr-12'>
                    {/* <p className='text-lg mt-8 lg:-mt-24 '>An app made in React Native. It is a collection of self-help written materials that can help the user bounce back and gain mental fortitude in facing his/her challenges. </p> */}
                    <h1 className='text-2xl mt-6 lg:-mt-20 ml-6 mb-4'>MindBooster</h1>
                    <p className='text-lg ml-6'>An app made in React Native. It is a collection of self-help written materials that can help the user bounce back and gain mental fortitude in facing his/her challenges.</p>
                    <div className='flex content-center justify-start ml-8 mt-4'>
                        <button id="mindboost"  onClick={handleClick} className='bg-orange-600  rounded-2xl px-2  py-1'>Google Store</button>
                    </div>
                </div>

               
            </div>
            <div className='flex flex-col-reverse lg:flex-row lg:items-center mb-10 mr-12'>
                <div className='w-full lg:w-[50%] mt-4 lg:-mt-0 lg:ml-48 pl-12'>
                    <h1 className='text-2xl mt-6 lg:-mt-20 ml-2 lg:ml-6 mb-4'>Daily Quotes</h1>
                    <p className='text-lg ml-2 lg:ml-6'>An app also made in React Native. It is a collection of helpful quotes to inspire and make the user be positive in his/her actions to achieve goals and aspirations. </p>
                    <div className='flex content-center justify-start ml-8 mt-4'>
                        <button id="quotes"  onClick={handleClick} className='bg-orange-600  rounded-2xl px-2  py-1'>Google Store</button>
                    </div>
                    {/* <p className='text-lg ml-2'>An app made in React Native. It is a collection of self-help written materials that can help the user bounce back and gain mental fortitude in facing his/her challenges. </p> */}
                </div>
                <div className='w-full lg:w-[50%] lg:pr-32'>
                    <div className='lg:mr-68 ml-8'>
                        <img src={quotes} className='border-solid border-yellow-400 border-4 mx-auto transform transform-transition hover:scale-110'/>
                    </div>
                </div>
               
            </div>
            <div  className='flex lg:flex-row flex-col mb-12 items-center ml-3 mt-4 lg:mr-48'>
                
                <div className='w-full lg:w-[50%] lg:ml-7 lg:pl-32 mx-auto'>
                    <img src={revup} className='object-cover border-solid border-yellow-400 border-4 lg:mx-auto transform transform-transition hover:scale-110' />
                </div>
                <div className='w-full lg:w-[50%] ml-8 mr-12 lg:pr-12 mt-16'>
                    <h1 className='text-2xl lg:-mt-20 ml-8 mb-4'>Rev Up: Car Racing Game</h1>
                    <p className='text-lg ml-8'>Rev Up is free mobile game made in Unity. This game presents 12 low-poly collectible cars and 12 creative race tracks for the delight of the players.</p>
                    {/* <p className='text-lg mt-6 lg:-mt-20 ml-6'>An app made in React Native. It is a collection of self-help written materials that can help the user bounce back and gain mental fortitude in facing his/her challenges. </p> */}
                    <div className='flex content-center justify-start ml-8 mt-4'>
                        <button id="revup" onClick={handleClick} className='bg-orange-600  rounded-2xl px-2  py-1 '>Google Store</button>
                    </div>
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