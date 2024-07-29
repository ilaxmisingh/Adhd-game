import React, {useState, useEffect } from 'react';
import './App.css';
import {p3questions} from './p3questions';
import { p4questions } from './p4questions';
import {p5questions} from './p5questions';
import { p6questions } from './p6questions';
import rabbit from '../src/rabbit.png';
import wolf from "../src/wolf.png";
import adhd from "../src/ADHDpic.png";
import crown from "../src/crown3.png";
import adhd2 from "../src/ADHD picture.png"
import { useCountdown } from './useCountdown';
import DateTimeDisplay from './DateTimeDisplay';


let newArray = p4questions.sort((a,b) => 0.5 - Math.random())
let p3newArray = p3questions.sort((a,b) => 0.5 - Math.random())
let p5newArray = p5questions.sort((a,b) => 0.5 - Math.random())
let p6newArray = p6questions.sort((a,b) => 0.5 - Math.random())
function App() {
  
  
  const [showfinalResults, setfinalResults] = useState(false)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [gameStage, setgameStage] =useState(0)
  const [gameDisplay, setGameDisplay] = useState()
  const [gameOver, setGameOver] = useState(false)

  
  const [mainPage, setMainPage] =useState(true)
  const [mainPageDisplay, setMainPageDisplay] = useState()

  const [rabbitGamep3, setrabbitGamep3] = useState(false)
  const [rabbitGamep3Display, setrabbitGamep3Display] =useState()

  const [rabbitGamep5, setrabbitGamep5] = useState(false)
  const [rabbitGamep5Display, setrabbitGamep5Display] =useState()

  const [rabbitGamep6, setrabbitGamep6] = useState(false)
  const [rabbitGamep6Display, setrabbitGamep6Display] =useState()


  const [rabbitGamep4, setrabbitGamep4] = useState(false)
  const [rabbitGamep4Display, setrabbitGamep4Display] =useState()



  const [rabbitHome, setrabbitHome] = useState(false)
  const [rabbitHomeDisplay, setrabbitHomeDisplay] = useState()

  function scrollHome() {
    window.scrollTo(0, 0);
  }
  
  function scrollAbout() {
    window.scrollTo(0, 920);
  }

  function scrollGame() {
    window.scrollTo(0, 2300);
  }

  function scrollContact() {
    window.scrollTo(0, 30000);
  }
  
  useEffect(() => {
      if (mainPage) {
        setMainPageDisplay (
    
            <div>
              
            <div className='bg-gray-800 h-auto w-full fixed flex flex-row gap-60 z-10'>
            <button className=' m-8 text-4xl font-bold text-white   '  onClick={scrollHome}>ADHD Mind Games</button>
            
            <ul className=' m-8 flex flex-row text-4xl gap-16 text-white font-medium'>
                <button className='hover:bg-sky-500 rounded-lg w-32 ' onClick={scrollHome}>Home</button>
                <button className='hover:bg-sky-500 rounded-lg w-32 ' onClick={scrollAbout}>About</button>
                <button className='hover:bg-sky-500 rounded-lg w-32 ' onClick={scrollGame}>Games</button>
                <button className='hover:bg-sky-500 rounded-lg w-32 ' onClick={scrollContact}>Contact</button>
            </ul>
          
            </div>
            
            
        
            
          <div className=' absolute bg-gradient-to-r from-cyan-700 to-blue-700 h-max w-full z-0 flex  flex-col'>
            <div>hi</div>
            <div className='flex flex-col justify-center items-center my-96 '>
              
            <h1 className='text-7xl text-white uppercase font-bold'> Welcome to the ADHD Mind Works </h1>
            <h2 className='text-4xl text-white my-5 uppercase font-semibold'>Time to Study Hard and Play Hard</h2>
            
            </div>

            
            <div className='flex justify-center items-center mt-36 mb-10'>
            
              <div className='w-1/2 h-auto'>
                <h1 className='text-5xl text-white font-semibold'>About Us:</h1>
              <h2 className='text-3xl text-white'>We are a group of Temasek Polytechnic students in our Year 3 studying in Business Process and Systems Engineering. Our mission and goal in creating a game website is to help ADHD students to study better by engaging the user and improving their attention span by using gamification. The team plans to create a website that features interactive games that will motivate and engage ADHD students while making them competitive to boost their focus and improving their social skills.</h2>
              
              </div>
              <img className='w-1/5 px-10 h-96 rounded-lg' src={adhd}></img>
            </div>

            <div className='flex justify-center items-center mb-36 mt-10'>
            
              <div className='w-1/2 h-auto'>
                <h1 className='text-5xl text-white font-semibold'>Objectives:</h1>
              <h2 className='text-3xl text-white'>Our team plans to provide another alternative for parents having children with ADHD. It is known that medication is one of the best methods of help for a student with ADHD. However, medication could be expensive and have many side effects. Therefore, our gamification method is free and effective in improving ADHD students’ attention span and motivation to learn.</h2>
              
              </div>
              <img className='w-1/5 px-10 h-96 rounded-lg' src={adhd2}></img>
            </div>
            
            <div className='flex justify-center items-center mt-10 mb-36'>
              <h1 className='text-5xl text-white font-bold'>"What you stay focused on will grow" -Roy T. Bennett</h1>
            </div>

            <div className='flex  justify-center items-center mt-40 '>
          <div className='border border-black w-max border-2'>
            <div className='flex flex-col justify-center items-center gap-20 '>
          <div className='mt-10'>
          <h1 className='text-5xl text-white'>Click the icons to play!</h1>
          </div>
          
          <div className='flex flex-row gap-20 mx-20 mb-20'>
          <div className=''>
          
          <button className='border border-black rounded-lg shadow-2xl bg-red-600 px-9 py-3 text-center my-3 text-white w-44 h-48 ml-28 ' onClick={clickrabbitHome}><img src={rabbit}   /></button>
          <div>
          <div className='bg-slate-700 w-full h-full p-10'>
            
          <h1 className='text-3xl text-white pb-2'> Game 1: </h1>
          <h1 className='text-2xl text-white'>🥕Save Sergeant Carrots🐇</h1>
          </div>
          </div>
          </div>

          <div className=''>
          <button className='border border-black rounded-lg shadow-2xl bg-red-600 px-1 py-1 text-center my-3 text-white w-44 h-48 ml-16' onClick={click2}> <img src={crown}    /></button>
          <div className=''>
          <div className='bg-slate-700 w-full h-full p-10 '>
          
          <h1 className='text-3xl text-white pb-2'> Game 2:</h1>
          <h1 className='text-2xl text-white'>👑 MindMap King 👑</h1>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          
          <div className=' flex flex-col justify-center items-center my-96 gap-3'>
            <h1 className='text-7xl text-white font-semibold'>Contact Us</h1>
            <h2 className='text-2xl text-white'>Tel no.: +65 91370372</h2>
            <h2 className='text-2xl text-white'>Email Us : ADHDMindWorks@gmail.com</h2>
            
            <h2 className='text-white'> For any enquires please contact us. Thank you!!!😊</h2>
          </div>

          </div>

          </div>
    
        )
      }
      else {
        setMainPageDisplay(null)
      }
  }, [mainPage])
  

  function clickrabbitHome() {
    setMainPage(false)
    setrabbitHome(true)
  }

  function clickrabbitGame() {
    setrabbitHome(false)
    setrabbitGamep4(true)
  }

  function clickrabbitGamep3() {
    setrabbitHome(false)
    setrabbitGamep3(true)
  }

  function clickrabbitGamep5() {
    setrabbitHome(false)
    setrabbitGamep5(true)
  }

  function clickrabbitGamep6() {
    setrabbitHome(false)
    setrabbitGamep6(true)
  }

  function clickMainPage1() {
    setMainPage(true)
    setrabbitHome(false)
  }

  useEffect(() => {
    if (rabbitHome) {
      setrabbitHomeDisplay (
        <div className="antialised bg-gradient-to-r from-purple-400 to-blue-500 h-full">
          <div className='flex justify-center items-center gap-8'>
          <button className='bg-fuchsia-600 mt-5 border border-violet-700 rounded-lg shadow-lg text-5xl text-white px-9 py-3 text-center' onClick={clickrabbitGamep3} > Primary 3</button>
          <button className='bg-fuchsia-600 mt-5 border border-violet-700 rounded-lg shadow-lg text-5xl text-white px-9 py-3 text-center' onClick={clickrabbitGame} > Primary 4</button>
          <button className='bg-fuchsia-600 mt-5 border border-violet-700 rounded-lg shadow-lg text-5xl text-white px-9 py-3 text-center' onClick={clickrabbitGamep5}> Primary 5</button>
          <button className='bg-fuchsia-600 mt-5 border border-violet-700 rounded-lg shadow-lg text-5xl text-white px-9 py-3 text-center' onClick={clickrabbitGamep6}> Primary 6</button>
          </div>
          <div className='flex flex-col h-3/4 justify-center items-center gap-5'>
          <h1 className='text-9xl text-white mt-36'> 🥕Save Sergant Carrots💀 </h1>
          <div className="flex flex-row gap-96 mt-36" >
                    <img className="w-40" src={rabbit} alt="rabbit" />
                    
                    <img className="w-40" src={wolf} alt="wolf" />
          
                    
          </div>
          </div>
          <div className='flex justify-center items-center'>
          <button className='border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 mb-32 mt-9 text-center text-neutral-100 text-5xl' onClick={clickMainPage1} > 🏠 </button>
          </div>
          
          
        </div>
      ) 
    } else {
      setrabbitHomeDisplay(null)
    }
  }, [rabbitHome])




  function click2() {
    setMainPage(false)
    setStage1(true)
  }

  useEffect(() => {
    console.log(gameStage)
    if (gameStage===0) {  setGameDisplay(
      <div className=" flex flex-row items-center m-4 ">
                  <div className="m-4" >
                    <img className="w-16 mr-4" src={wolf} alt="wolf" />
                  </div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300" />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div>
                    <img className="w-16" src={rabbit} alt="rabbit" />
                  </div>
                </div>
    )
    }
    if (gameStage===1) { setGameDisplay(
      <div className=" flex flex-row items-center m-4 ">
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="m-4" >
                    <img className="w-16 mr-4" src={wolf} alt="wolf" />
                  </div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div>
                    <img className="w-16" src={rabbit} alt="rabbit" />
                  </div>
                </div>
    )
    }
    if (gameStage===2) { setGameDisplay(
      <div className=" flex flex-row items-center m-4 ">
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="m-4" >
                    <img className="w-16 mr-4" src={wolf} alt="wolf" />
                  </div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div>
                    <img className="w-16" src={rabbit} alt="rabbit" />
                  </div>
                </div>
    )
    }
    if (gameStage===3) { setGameDisplay(
      <div className=" flex flex-row items-center m-4 ">
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="m-4" >
                    <img className="w-16 mr-4" src={wolf} alt="wolf" />
                  </div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div>
                    <img className="w-16" src={rabbit} alt="rabbit" />
                  </div>
                </div>
    )
    }
    if (gameStage===4) { setGameDisplay(
      <div className=" flex flex-row items-center m-4 ">
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="m-4" >
                    <img className="w-16 mr-4" src={wolf} alt="wolf" />
                  </div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div>
                    <img className="w-16" src={rabbit} alt="rabbit" />
                  </div>
                </div>
    )
    }
    if (gameStage===5) { setGameDisplay(
      <div className=" flex flex-row items-center m-4 ">
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                  <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                  <div className="m-4" >
                    <img className="w-16 mr-4" src={wolf} alt="wolf" />
                  </div>
                </div>
    )
    }  
    
  

}, [gameStage]) 




function restartGame() {
  setScore(0);
  setCurrentQuestion(1);
  setfinalResults(false);
  setGameOver(false)
  setgameStage(0)
  newArray.sort((a,b) => 0.5 - Math.random())
  p3newArray.sort((a,b) => 0.5 - Math.random())
  p5newArray.sort((a,b) => 0.5 - Math.random())
  p6newArray.sort((a,b) => 0.5 - Math.random())
}

const optionClicked = (isCorrect) => {
  if (isCorrect) {
    setScore(score +1);
    
  }
  
  if (!isCorrect) {
    setgameStage(gameStage+1);
    
    
  }
  
  if (currentQuestion +1 <=10 ) {
    setCurrentQuestion(currentQuestion +1);
  }
  
  else {
    setfinalResults(true);
    
  }
  if (gameStage>3) {
    setfinalResults(true);
    setGameOver(true);
  }
}

useEffect(() => {
  if(rabbitGamep3) {
    setrabbitGamep3Display(
      <div className="antialised bg-gradient-to-r from-purple-400 to-blue-500 h-full">
          <div className='flex w-full h-full justify-center items-center'>
              <div className='w-full max-w-3xl'>
              <p className="text-5xl font-bold mt-8 text-center">
                Save Sergeant Whiskers from the BIG BAD WOLF!
              </p>
              {gameDisplay}

              

                {showfinalResults ? (
                <div className='bg-fuchsia-600 border border-black mt-4 rounded-lg shadow-lg'>
                  {gameOver ? (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have failed to save Sergant Carrots
                  </h1>
                  ): (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have saved Sergant Carrots🎉🎉🎉
                    </h1>
                  )}
                <h2 className='text-center text-white text-3xl font-mediums'>
                {score} out of 10 correct - ({(score/10)*100}%)
                </h2>
                <div className='flex w-full h-full justify-center items-center'>
                <button className='border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-white' onClick={() => restartGame()}>Restart Game</button>
                </div>
                </div>
               ) : (
              <div className= ' bg-purple-600 p-12 rounded-lg shadow-lg w-full h-4/5 mt-5 '>
              <div className='items-center '>
                <p className='text-center text-slate-200 font-medium text-4xl'>Question {currentQuestion} out of 10 </p>
                  <h3 className='text-center text-gray-800 font-medium text-2xl '> {p3newArray[currentQuestion].text} </h3>

                  <ul >
                    {p3newArray[currentQuestion].options.map((option) => {
                    return (
                      <li className='bg-fuchsia-600 mt-3 border border-violet-700 rounded-lg shadow-lg text-lg text-white px-9 py-3 text-center'  onClick={() => optionClicked(option.isCorrect)} key={option.id}> {option.text}</li>
                      );
                    })}
                  </ul>
              </div>
              </div>
              
              
               )}
               <div>
               <button className='flex justify-center ml-80 border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center mt-9 mb-20 text-neutral-100 text-3xl' onClick={RabbitHomePagep3}> Home </button>
               </div>
               
              </div>
               
          
              </div>
              </div>  
      
    ) 
  } else {
    setrabbitGamep3Display(null) }


})

function RabbitHomePagep3() {
  setrabbitGamep3(false)
  setrabbitHome(true)
}
     
useEffect(() => {
  if(rabbitGamep5) {
    setrabbitGamep5Display(
      <div className="antialised bg-gradient-to-r from-purple-400 to-blue-500 h-screen">
          <div className='flex w-full h-screen justify-center items-center'>
              <div className='w-full max-w-3xl'>
              <p className="text-5xl font-bold mt-8 text-center">
                Save Sergeant Whiskers from the BIG BAD WOLF!
              </p>
              {gameDisplay}

              

                {showfinalResults ? (
                <div className='bg-fuchsia-600 border border-black mt-4 rounded-lg shadow-lg'>
                  {gameOver ? (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have failed to save Sergant Carrots
                  </h1>
                  ): (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have saved Sergant Carrots🎉🎉🎉
                    </h1>
                  )}
                <h2 className='text-center text-white text-3xl font-mediums'>
                {score} out of 10 correct - ({(score/10)*100}%)
                </h2>
                <div className='flex w-full h-full justify-center items-center'>
                <button className='border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-white' onClick={() => restartGame()}>Restart Game</button>
                </div>
                </div>
               ) : (
              <div className= ' bg-purple-600 p-12 rounded-lg shadow-lg w-full h-4/5 mt-5 '>
              <div className='items-center '>
                <p className='text-center text-slate-200 font-medium text-4xl'>Question {currentQuestion} out of 10 </p>
                  <h3 className='text-center text-gray-800 font-medium text-2xl '> {p5newArray[currentQuestion].text} </h3>

                  <ul >
                    {p5newArray[currentQuestion].options.map((option) => {
                    return (
                      <li className='bg-fuchsia-600 mt-3 border border-violet-700 rounded-lg shadow-lg text-lg text-white px-9 py-3 text-center'  onClick={() => optionClicked(option.isCorrect)} key={option.id}> {option.text}</li>
                      );
                    })}
                  </ul>
              </div>
              </div>
              
              
               )}
               <div>
               <button className='flex justify-center ml-80 border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-neutral-100 text-3xl' onClick={RabbitHomePagep5}> Home </button>
               </div>
               
              </div>
               
          
              </div>
              </div>  
      
    ) 
  } else {
    setrabbitGamep5Display(null) }


}) 

function RabbitHomePagep5() {
  setrabbitGamep5(false)
  setrabbitHome(true)
}

useEffect(() => {
  if(rabbitGamep6) {
    setrabbitGamep6Display(
      <div className="antialised bg-gradient-to-r from-purple-400 to-blue-500 h-screen">
          <div className='flex w-full h-screen justify-center items-center'>
              <div className='w-full max-w-3xl'>
              <p className="text-5xl font-bold mt-8 text-center">
                Save Sergeant Whiskers from the BIG BAD WOLF!
              </p>
              {gameDisplay}

              

                {showfinalResults ? (
                <div className='bg-fuchsia-600 border border-black mt-4 rounded-lg shadow-lg'>
                  {gameOver ? (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have failed to save Sergant Carrots
                  </h1>
                  ): (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have saved Sergant Carrots🎉🎉🎉
                    </h1>
                  )}
                <h2 className='text-center text-white text-3xl font-mediums'>
                {score} out of 10 correct - ({(score/10)*100}%)
                </h2>
                <div className='flex w-full h-full justify-center items-center'>
                <button className='border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-white' onClick={() => restartGame()}>Restart Game</button>
                </div>
                </div>
               ) : (
              <div className= ' bg-purple-600 p-12 rounded-lg shadow-lg w-full h-4/5 mt-5 '>
              <div className='items-center '>
                <p className='text-center text-slate-200 font-medium text-4xl'>Question {currentQuestion} out of 10 </p>
                  <h3 className='text-center text-gray-800 font-medium text-2xl '> {p6newArray[currentQuestion].text} </h3>

                  <ul >
                    {p6newArray[currentQuestion].options.map((option) => {
                    return (
                      <li className='bg-fuchsia-600 mt-3 border border-violet-700 rounded-lg shadow-lg text-lg text-white px-9 py-3 text-center'  onClick={() => optionClicked(option.isCorrect)} key={option.id}> {option.text}</li>
                      );
                    })}
                  </ul>
              </div>
              </div>
              
              
               )}
               <div>
               <button className='flex justify-center ml-80 border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-neutral-100 text-3xl' onClick={RabbitHomePagep6}> Home </button>
               </div>
               
              </div>
               
          
              </div>
              </div>  
      
    ) 
  } else {
    setrabbitGamep6Display(null) }


})

function RabbitHomePagep6() {
  setrabbitGamep6(false)
  setrabbitHome(true)
}

  useEffect(() => {
      if(rabbitGamep4) {
        setrabbitGamep4Display (

          <div className="antialised bg-gradient-to-r from-purple-400 to-blue-500 h-screen">
          <div className='flex w-full h-screen justify-center items-center'>
              <div className='w-full max-w-3xl'>
              <p className="text-5xl font-bold mt-8 text-center">
                Save Sergeant Whiskers from the BIG BAD WOLF!
              </p>
              {gameDisplay}

              

                {showfinalResults ? (
                <div className='bg-fuchsia-600 border border-black mt-4 rounded-lg shadow-lg'>
                  {gameOver ? (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have failed to save Sergant Carrots
                  </h1>
                  ): (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have saved Sergant Carrots🎉🎉🎉
                    </h1>
                  )}
                <h2 className='text-center text-white text-3xl font-mediums'>
                {score} out of 10 correct - ({(score/10)*100}%)
                </h2>
                <div className='flex w-full h-full justify-center items-center'>
                <button className='border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-white' onClick={() => restartGame()}>Restart Game</button>
                </div>
                </div>
               ) : (
              <div className= ' bg-purple-600 p-12 rounded-lg shadow-lg w-full h-4/5 mt-5 '>
              <div className='items-center '>
                <p className='text-center text-slate-200 font-medium text-4xl'>Question {currentQuestion} out of 10 </p>
                  <h3 className='text-center text-gray-800 font-medium text-2xl '> {newArray[currentQuestion].text} </h3>

                  <ul >
                    {newArray[currentQuestion].options.map((option) => {
                    return (
                      <li className='bg-fuchsia-600 mt-3 border border-violet-700 rounded-lg shadow-lg text-lg text-white px-9 py-3 text-center'  onClick={() => optionClicked(option.isCorrect)} key={option.id}> {option.text}</li>
                      );
                    })}
                  </ul>
              </div>
              </div>
              
              
               )}
               <div>
               <button className='flex justify-center ml-80 border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-neutral-100 text-3xl' onClick={RabbitHomePage}> Home </button>
               </div>
               
              </div>
               
          
              </div>
              </div>
              
  
                  
        )
      }
      else {
        setrabbitGamep4Display(null) }
  })

  function RabbitHomePage() {
    setrabbitGamep4(false)
    setrabbitHome(true)
  }


  const THREE_DAYS_IN_MS = 10 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const [player1, setPlayer1] = useState('')
const [player2, setPlayer2] = useState('')
const [player3, setPlayer3] = useState('')
const [player4, setPlayer4] = useState('')
const [player5, setPlayer5] = useState('')
const [secret1, setSecret1] = useState('')
const [secret2, setSecret2] = useState('')
const [secret3, setSecret3] = useState('')
const [secret4, setSecret4] = useState('')
const [secret5, setSecret5] = useState('')
const [score1, setScore1] = useState(0)
const [score2, setScore2] = useState(0)
const [score3, setScore3] = useState(0)
const [score4, setScore4] = useState(0)
const [score5, setScore5] = useState(0)
const [stage1, setStage1] = useState(false)
const [stage2, setStage2] =useState(false)
const [stage3, setStage3] =useState(false)
const [stage4, setStage4] =useState(false)
const [stage5, setStage5] =useState(false)
const [stage6, setStage6] =useState(false)
const [stage7, setStage7] =useState(false)
const [stage8, setStage8] =useState(false)
const [stage9, setStage9] =useState(false)
const [stagex1, setStagex1] =useState(false)
const [stagex2, setStagex2] =useState(false)
const [stagex3, setStagex3] =useState(false)
const [stagex4, setStagex4] =useState(false)
const [stagex5, setStagex5] =useState(false)
const [Stage1Display, setStage1Display] = useState()
const [stage2Display, setStage2Display] = useState()
const [stage3Display, setStage3Display] = useState()
const [stage4Display, setStage4Display] = useState()
const [stage5Display, setStage5Display] = useState()
const [stage6Display, setStage6Display] = useState()
const [stage7Display, setStage7Display] = useState()
const [stage8Display, setStage8Display] = useState()
const [stage9Display, setStage9Display] = useState()
const [stagex1Display, setStagex1Display] =useState()
const [stagex2Display, setStagex2Display] =useState()
const [stagex3Display, setStagex3Display] =useState()
const [stagex4Display, setStagex4Display] =useState()
const [stagex5Display, setStagex5Display] =useState()

function restartMind() {
  setStage1(true);
  setStage9(false);
  setScore1(0)
  setScore2(0)
  setScore3(0)
  setScore4(0)
  setScore5(0)
  setPlayer1("")
  setPlayer2("")
  setPlayer3("")
  setPlayer4("")
  setPlayer5("")
}

function click() {
  setStage1(false);
  setStagex1(true);
  
}

function home() {
  setMainPage(true)
  setStage1(false)
}
useEffect(() => {
  if (stage1) {
    setStage1Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
      <div>
        <h1 className="antialiased text-gray-100 text-7xl font-semibold text-center pt-5 uppercase">Welcome to the MindMap Challenge!!!</h1>
        <h1 className='antialiased text-gray-100 text-7xl font-semibold text-center pt-5 uppercase'>Who will be the MindMap Genius 😎</h1>
        
        <div className='flex gap-10 justify-center items-center mt-10'>
          <div className='m-10'>
          <h2 className='text-3xl font-medium'>Challenger 1:</h2>
          <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' placeholder='Enter Player Name here' onChange={p1}></input>
          </div>

          <div className='m-10'>
          <h2 className='text-3xl font-medium'>Challenger 2:</h2>
          <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' placeholder='Enter Player Name here' onChange={p2} ></input>
          </div>

          <div className='m-10'>
          <h2 className='text-3xl font-medium'>Challenger 3:</h2>
          <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' placeholder='Enter Player Name here' onChange={p3} ></input>
          </div>

          <div className='m-10'>
          <h2 className='text-3xl font-medium'>Challenger 4:</h2>
          <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' placeholder='Enter Player Name here' onChange={p4} ></input>
          </div>
          
          <div className='m-10'>
          <h2 className='text-3xl font-medium'>Challenger 5:</h2>
          <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' placeholder='Enter Player Name here' onChange={p5} ></input>
          </div>

        </div>
          <div className='flex justify-center items-center my-5'>
            <h1 className='text-9xl'> 👑  👑  👑  👑  👑</h1>
          </div>
          
          <div className='flex justify-center items-center mt-10'>
            <div className=''>
          <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 mr-3' onClick={click}>
            Start
          </button>
          <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 ml-3' onClick={home}>
            Home
          </button>

          </div>

          </div>
        </div>
        </div>
        </div>
    )
  }
  else {
    setStage1Display(null)
  }
  
}, [stage1])



useEffect(() =>{
  if (stagex1) {
    setStagex1Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
  <div>
  <h1 className='text-3xl font-semibold '>{player1} Enter your hidden secret down below 😉</h1>
  <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg' placeholder='Enter here' onChange={s1} ></input>
  <div className='flex justify-center items-center'>
  <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-auto' onClick={x1}>Next</button>
  </div>
  </div>
  </div>
  </div>
    )
  }
  else {
    setStagex1Display(null)
  }
})

function x1() {
  setStagex1(false)
  setStagex2(true)
}

useEffect(() =>{
  if (stagex2) {
    setStagex2Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
  <div>
  <h1 className='text-3xl font-semibold '>{player2} Enter your hidden secret down below 😉</h1>
  <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg' placeholder='Enter here' onChange={s2} ></input>
  <div className='flex justify-center items-center'>
  <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-auto' onClick={x2}>Next</button>
  </div>
  </div>
  </div>
  </div>
    )
  }
  else {
    setStagex2Display(null)
  }
})

function x2() {
  setStagex2(false)
  setStagex3(true)
}

useEffect(() =>{
  if (stagex3) {
    setStagex3Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
  <div>
  <h1 className='text-3xl font-semibold '>{player3} Enter your hidden secret down below 😉</h1>
  <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg' placeholder='Enter here' onChange={s3} ></input>
  <div className='flex justify-center items-center'>
  <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-auto' onClick={x3}>Next</button>
  </div>
  </div>
  </div>
  </div>
    )
  }
  else {
    setStagex3Display(null)
  }
})

function x3() {
  setStagex3(false)
  setStagex4(true)
}

useEffect(() =>{
  if (stagex4) {
    setStagex4Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
  <div>
  <h1 className='text-3xl font-semibold '>{player4} Enter your hidden secret down below 😉</h1>
  <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg ' placeholder='Enter here' onChange={s4} ></input>
  <div className='flex justify-center items-center'>
  <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-auto' onClick={x4}>Next</button>
  </div>
  </div>
  </div>
  </div>
    )
  }
  else {
    setStagex4Display(null)
  }
})

function x4() {
  setStagex4(false)
  setStagex5(true)
}

useEffect(() =>{
  if (stagex5) {
    setStagex5Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
  <div>
  <h1 className='text-3xl font-semibold '>{player5} Enter your hidden secret down below 😉</h1>
  <input className='mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg' placeholder='Enter here' onChange={s5} ></input>
  <div className='flex justify-center items-center'>
  <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={x5}>MindMap Time</button>
  </div>
  </div>
  </div>
  </div>
    )
  }
  else {
    setStagex5Display(null)
  }
})

function x5() {
  setStagex5(false)
  setStage2(true)
}

function s1(event) {
  setSecret1(event.target.value)
}

function s2(event) {
  setSecret2(event.target.value)
}

function s3(event) {
  setSecret3(event.target.value)
}

function s4(event) {
  setSecret4(event.target.value)
}

function s5(event) {
  setSecret5(event.target.value)
}

useEffect(() => {
  if (stage2) {
    setStage2Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
      <div className='flex flex-col'>
      <div className=''>
    <h1 className='text-center text-9xl text-gray-200 font-semibold'>Countdown Timer</h1>
    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>

    <div>
      <h1 className='text-center text-5xl text-gray-200 font-medium'>
        You have 10 minutes
      </h1>
      <h1 className='uppercase text-center text-7xl text-gray-200 font-medium mt-4'>
        Begin the MindMap Challenge!!!
      </h1>
    </div>
    </div>
    </div>
    </div>
    )
  }
  else {
    setStage2Display(null)
  }
}, [stage2])

useEffect(() => {
  if (stage3) {
    setStage3Display(
      <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
      <div>
        <h1 className='text-gray-200 text-center text-5xl font-medium uppercase '>Put your Pens down</h1>
        <h1 className='text-gray-200 text-center text-7xl font-medium uppercase mb-5'>It is Presentation time!!!</h1>
        <h1 className='text-gray-200 text-center text-5xl font-normal uppercase'>Once everyone presented their mindmaps click on the red button below</h1>
        <div className='flex justify-center items-center'>
        <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 text-medium' onClick={ready}>
            Finish
        </button>
        </div>
      </div>
      </div>
      </div>
    )
    setStage2(false)
  }
  else {
    setStage3Display(null)
  }
}, [stage3])



const ExpiredNotice = () => {
  return (
   setStage3(true)
   
  );
};

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="flex flex-row justify-center items-center m-5">
      <a
        
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <div className='flex flex-row gap-4  border-4 border-blue-500 text-9xl '>
          
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'}  />
          
        </div>
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

function p1(event) {
  setPlayer1(event.target.value)
}

function p2(event) {
  setPlayer2(event.target.value)
}

function p3(event) {
  setPlayer3(event.target.value)
}

function p4(event) {
  setPlayer4(event.target.value)
}

function p5(event) {
  setPlayer5(event.target.value)
}

useEffect(() => {
  if (stage4) {
    setStage4Display (
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
    <div>
        <h1 className='text-neutral-900 text-center text-3xl font-medium uppercase'>{player1} Please vote for who you think is the mindmap genius</h1>
      <div className='flex gap-4'>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage1p2}>{player2}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage1p3}>{player3}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onclick={stage1p4}>{player4}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onclick={stage1p5}>{player5}</button>
    </div>
    </div>
    </div>
    </div>

      
      
    )
  }

  

  
  else {
    setStage4Display(null)
  }
},[stage4])


function ready() {
  setStage3(false);
  setStage4(true);
  
}

function stage1p2() {
  setStage4(false)
  setStage5(true)
  setScore2(score2 +100)
}

function stage1p3() {
  setStage4(false)
  setStage5(true)
  setScore3(score3 +100)
}

function stage1p4() {
  setStage4(false)
  setStage5(true)
  setScore4(score4 +100)
}

function stage1p5() {
  setStage4(false)
  setStage5(true)
  setScore5(score5 +100)
}

useEffect(() => {
  if (stage5) {
    setStage5Display (
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
      <div>
      <h1 className='text-neutral-900 text-center text-3xl font-medium uppercase'>{player2} Please vote for who you think is the mindmap genius</h1>
      <div className='flex gap-4'>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage2p1}>{player1}</button>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage2p3}>{player3}</button>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage2p4}>{player4}</button>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage2p5}>{player5}</button>
      </div> 
    </div>
    </div> 
    </div>
      
      
    )
  }
  else {
    setStage5Display(null)
  }
},[stage5])

function stage2p1() {
  setStage5(false)
  setStage6(true)
  setScore1(score1 +100)
}

function stage2p3() {
  setStage5(false)
  setStage6(true)
  setScore3(score3 +100)
}

function stage2p4() {
  setStage5(false)
  setStage6(true)
  setScore4(score4 +100)
}

function stage2p5() {
  setStage5(false)
  setStage6(true)
  setScore5(score5 +100)
}

useEffect(() => {
  if (stage6) {
    setStage6Display (
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
     <div>
      <h1 className='text-neutral-900 text-center text-3xl font-medium uppercase'>{player3} Please vote for who you think is the mindmap genius</h1>
      <div className='flex gap-4'>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage3p1}>{player1}</button>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage3p2}>{player2}</button>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage3p4}>{player4}</button>
      <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage3p5}>{player5}</button>
      </div> 
    </div>
    </div> 
    </div>
      
      
    )
  }
  else {
    setStage6Display(null)
  }
},[stage6])

function stage3p1() {
  setStage6(false)
  setStage7(true)
  setScore1(score1 +100)
}

function stage3p2() {
  setStage6(false)
  setStage7(true)
  setScore2(score2 +100)
}

function stage3p4() {
  setStage6(false)
  setStage7(true)
  setScore4(score4 +100)
}

function stage3p5() {
  setStage6(false)
  setStage7(true)
  setScore5(score5 +100)
}

useEffect(() => {
  if (stage7) {
    setStage7Display (
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
      <div>
        <h1 className='text-neutral-900 text-center text-3xl font-medium uppercase'>{player4} Please vote for who you think is the mindmap genius</h1>
      <div className='flex gap-4'>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage4p1}>{player1}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage4p2}>{player2}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage4p3}>{player3}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage4p5}>{player5}</button>
    </div>
      </div>
      </div>
      </div>
      
      
    )
  }
  else {
    setStage7Display(null)
  }
},[stage7])

function stage4p1() {
  setStage7(false)
  setStage8(true)
  setScore1(score1 +100)
}

function stage4p2() {
  setStage7(false)
  setStage8(true)
  setScore2(score2 +100)
}

function stage4p3() {
  setStage7(false)
  setStage8(true)
  setScore3(score3 +100)
}

function stage4p5() {
  setStage7(false)
  setStage8(true)
  setScore5(score5 +100)
}

useEffect(() => {
  if (stage8) {
    setStage8Display (
      <div className=' bg-gradient-to-r from-amber-700 to-pink-600 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
      <div>
        <h1 className='text-neutral-900 text-center text-3xl font-medium uppercase'>{player5} Please vote for who you think is the mindmap genius</h1>
      <div className='flex gap-4'>
      
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage5p1}>{player1}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage5p2}>{player2}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage5p3}>{player3}</button>
    <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60' onClick={stage5p4}>{player4}</button>
    </div>
    </div>
   </div>
      </div>

      
      
    )
  }
  else {
    setStage8Display(null)  
  }
},[stage8])

function stage5p1() {
  setStage8(false)
  setStage9(true)
  setScore1(score1 +100)
}

function stage5p2() {
  setStage8(false)
  setStage9(true)
  setScore2(score2 +100)
}

function stage5p3() {
  setStage8(false)
  setStage9(true)
  setScore3(score3 +100)
}

function stage5p4() {
  setStage8(false)
  setStage9(true)
  setScore4(score4 +100)
}

useEffect(() => {
  if (stage9) {
    if (score1>score2 && score1>score3 && score1>score4 && score1>score5) {
      setStage9Display(
        <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
        <div>
          <h1 className='text-7xl font-medium text-neutral-900 text-center mb-10'>Congratulations <span className='text-9xl font-semibold text-slate-200'>{player1} </span></h1>
          <h1 className='text-5xl font-medium text-center text-neutral-900'>You are a MindMap Genius 🎉🎉🎉</h1>
          <h1 className='text-5xl font-medium text-center text-slate-200'> {player1} score is {score1} </h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'>
            {player2}, {player3}, {player4}, {player5}, You have lost to the MindMap Genius
          </h1>
          <div>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'> <span className='text-5xl text-slate-200'>{player2}</span> : {secret2} | The score is {score2}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'> <span className='text-5xl text-slate-200'>{player3}</span> : {secret3} | The score is {score3}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'> <span className='text-5xl text-slate-200'>{player4}</span> : {secret4} | The score is {score4}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'> <span className='text-5xl text-slate-200'>{player5}</span> : {secret5} | The score is {score5}</h1>
          <div className='flex justify-center items-center'>
          <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 ml-3' onClick={restartMind}>
            Home
          </button>
          </div>
          </div>
        </div>
        
        </div>
        </div>
      )
    }

    if (score2>score1 && score2>score3 && score2>score4 && score2>score5) {
      setStage9Display(
        <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
        <div>
          <h1 className='text-7xl font-medium text-neutral-900 text-center mb-10'>Congratulations <span className='text-9xl font-semibold text-slate-200'>{player2} </span></h1>
          <h1 className='text-5xl font-medium text-center text-neutral-900'>You are a MindMap Genius 🎉🎉🎉</h1>
          <h1 className='text-5xl font-medium text-center text-slate-200'> {player2} score is {score2} </h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'>
            {player1}, {player3}, {player4}, {player5}, You have lost to the MindMap Genius
          </h1>
          <div>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player1}</span> : {secret1} | The score is {score1}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player3}</span> : {secret3} | The score is {score3}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player4}</span> : {secret4} | The score is {score4}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player5}</span> : {secret5} | The score is {score5}</h1>
          <div className='flex justify-center items-center'>
          <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 ml-3' onClick={restartMind}>
            Home
          </button>
          </div>
          </div>
        </div>
        
        </div>
        </div>
      )
    }

    if (score3>score1 && score3>score2 && score3>score4 && score3>score5) {
      setStage9Display(
        <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
      <div className='flex w-full h-screen justify-center items-center'>
        <div>
          <h1 className='text-7xl font-medium text-neutral-900 text-center mb-10'>Congratulations <span className='text-9xl font-semibold text-slate-200'>{player3} </span></h1>
          <h1 className='text-5xl font-medium text-center text-neutral-900'>You are a MindMap Genius 🎉🎉🎉</h1>
          <h1 className='text-5xl font-medium text-center text-slate-200'> {player3} score is {score3} </h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'>
            {player1}, {player2}, {player4}, {player5}, You have lost to the MindMap Genius
          </h1>
          <div>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player1}</span> : {secret1} | The score is {score1}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player2}</span> : {secret2} | The score is {score2}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player4}</span> : {secret4} | The score is {score4}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player5}</span> : {secret5} | The score is {score5}</h1>
          <div className='flex justify-center items-center'>
          <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 ml-3' onClick={restartMind}>
            Home
          </button>
          </div>
          </div>
        </div>
        
        </div>
        </div>
      )
    }

    if (score4>score1 && score4>score3 && score4>score2 && score4>score5) {
      setStage9Display(
        <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
        <div className='flex w-full h-screen justify-center items-center'>
        <div>
          <h1 className='text-7xl font-medium text-neutral-900 text-center mb-10'>Congratulations <span className='text-9xl font-semibold text-slate-200'>{player4} </span></h1>
          <h1 className='text-5xl font-medium text-center text-neutral-900'>You are a MindMap Genius 🎉🎉🎉</h1>
          <h1 className='text-5xl font-medium text-center text-slate-200'> {player4} score is {score4} </h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'>
            {player1}, {player2}, {player3}, {player5}, You have lost to the MindMap Genius
          </h1>
          <div>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player1}</span> : {secret1} | The score is {score1}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player2}</span> : {secret2} | The score is {score2}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player3}</span> : {secret3} | The score is {score3}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player5}</span> : {secret5} | The score is {score5}</h1>
          <div className='flex justify-center items-center'>
          <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 ml-3' onClick={restartMind}>
            Home
          </button>
          </div>
          </div>
        </div>
        
        </div>
        </div>
      )
    }

    if (score5>score1 && score5>score3 && score5>score2 && score5>score4) {
      setStage9Display(
        <div className=' bg-gradient-to-r from-amber-700 to-pink-700 h-screen '>
        <div className='flex w-full h-screen justify-center items-center flex-row'>
        <div>
          <h1 className='text-7xl font-medium text-neutral-900 text-center mb-10'>Congratulations <span className='text-9xl font-semibold text-slate-200'>{player5} </span></h1>
          <h1 className='text-5xl font-medium text-center text-neutral-900'>You are a MindMap Genius 🎉🎉🎉</h1>
          <h1 className='text-5xl font-medium text-center text-slate-200'> {player5} score is {score5} </h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'>
            {player1}, {player2}, {player3}, {player4}, You have lost to the MindMap Genius
          </h1>
          <div>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player1}</span> : {secret1} | The score is {score1}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player2}</span> : {secret2} | The score is {score2}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player3}</span> : {secret3} | The score is {score3}</h1>
          <h1 className='text-3xl font-medium text-center text-neutral-900 mt-10'><span className='text-5xl text-slate-200'>{player4}</span> : {secret4} | The score is {score4}</h1>
          <div className='flex justify-center items-center'>
          <button className='border border-black rounded-lg shadow-lg bg-red-600 px-9 py-3 text-center my-9 text-white w-60 ml-3' onClick={restartMind}>
            Home
          </button>
          </div>
          </div>
        </div>
        
        </div>
        </div>
      )
    }

    
  }
  else {
    setStage9Display(null)
  }
}, [stage9])



  return (
    <div >
      {mainPageDisplay}

      {rabbitHomeDisplay}

      {rabbitGamep3Display}

      {rabbitGamep4Display}

      {rabbitGamep5Display}

      {rabbitGamep6Display}

      {Stage1Display}

      {stagex1Display}

      {stagex2Display}

      {stagex3Display}

      {stagex4Display}

      {stagex5Display}
        
      {stage2Display}

      {stage3Display}

      {stage4Display}

      {stage5Display}

      {stage6Display}

      {stage7Display}

      {stage8Display}

      {stage9Display}

    </div>
  );
}

export default App;
