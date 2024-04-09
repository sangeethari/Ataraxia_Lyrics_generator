import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Axios from 'axios';
import idea from './idea.json';


function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    })
  }

  const paragraphs = [
    'Under the trees..\nWith the bunny in hand \nHe asked me a brace With the blush on face \nUnder the blanket\nWith the blankets on me\nHe texted me along songs\n With the love we wished\nOh, happy tears!\n I think u love him\nAnd come out only for him\n',
    'Roller coaster or what?!\nJust an lunch with my longtime non stranger --\nTrembling-tummy was on the way\nSaw the stranger in bike with no other sigh\nWell, moment is here thought my heart\nJumped his back with hands on him hard\nBlood rushes, yeah all those blushes\nSlipped away Along with the speed he pushes\nFelt good,oh i relied on him\nOnly With a mind of peace and heavenly hum!\n',
    'Your just a sweetest nightmare i never wished for\nAnd now ur stuck through me nd i cant move on ..\nI tried so hard nd made my scar so warm\nTo come outta the love that made a lovely torn:\nNow im well nd good with my happiness on\nBut u still prick me with ur self obsessed thorn...\nYeah i was and am obsessed with you then,\nBut that doesnt mean i ll be wanting you againn!!\n',
    'I heal,I ease!\nIn my heart with a missing piece\nTurning back ,With all i need \nAnd then i freeze, only just to seize\n Myself pretending,ur not the missing piece!\nI see ur eyes,thats not wat i craved for\n How cld u take me away like u never really loved me so far!?\n',
  ];

  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [displayParagraph, setDisplayParagraph] = useState(paragraphs[paragraphIndex]);

  const changeParagraph = () => {
    const nextIndex = (paragraphIndex + 1) % paragraphs.length;
    setParagraphIndex(nextIndex);
    setDisplayParagraph(paragraphs[nextIndex]);
  };

  return (
    <>

{/* <div
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1494665/pexels-photo-1494665.jpeg?auto=compress&cs=tinysrgb&w=600")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%', // Set the height as per your requirement
        // Add any other styles as needed
      }}
    > */}
      <div className="flex justify-center">
        <div className="mt-[50px] inline-block border  text-white font-bold py-2 px-4 rounded-full bg-opacity-25 bg-blur-md bg-black backdrop-blur-md backdrop-filter">
          <div className="relative overflow-hidden group text-white"><span className="invisible">Vanakamm</span><span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300 text-white">Heyyy All!</span><span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">Vanakamm</span></div>
        </div>
      </div>


      
      <div className="text-center text-3xl text-white font-air">
      <div className="relative ml-[400px] w-[700px] h-[700px] ">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-25 bg-blur-md bg-black backdrop-blur-md backdrop-filter p-6 rounded-md mt-[100px] mb-[200px]">
          <h1>Does music serve as the voice for your way of life??</h1>
          <h1 className="italic mt-6">I am Ataraxia:)...</h1>
          <h1 className="italic mt-6">Here to bring you the verses of your beloved song lyrics!</h1>
          <p className="text-lg text-white mt-6">
            Scroll down to Reveal Yourself with some deep poetic lyrics of your choice!!
          </p>
        </div>
      </div>
    </div>
      {/* </div> */}




      <Lottie animationData={idea} className=' mt-[400px] ml-[550px] w-[400px] h-[400px]' />

      <div className='text-center text-3xl text-white italic  font-water animate-[bounce_5s_ease-in-out_infinite] rounded-full bg-opacity-25 bg-blur-md bg-black backdrop-blur-md backdrop-filter ml-[200px] mr-[200px]'>
        <h1>Step into the realm of exploration, where poignant verses await, whispering to the depths of your heart's melody</h1>
      </div>

      <div className="mr-2 flex justify-center mt-[40px] mb-[40px]">
        <div className="App">
          <h1 className='ml-[150px] text-white  rounded-full bg-opacity-25 bg-blur-md bg-black backdrop-blur-md backdrop-filter ml-[100px] mr-[200px]'>Share your favorite artist and their symphony.</h1>
          <div className="mt-[50px] inline-block border border-white text-white font-bold py-2 px-6 rounded-full">
            <input className='bg-transparent' type="text" placeholder='Artist name' onChange={(e) => { setArtist(e.target.value) }} />
            <input className="inp bg-transparent" type="text" placeholder='Song name' onChange={(e) => { setSong(e.target.value) }} />
            <button className="btn bg-transparent text-black" onClick={() => searchLyrics()}>Search</button>
          </div>
          <pre className='text-white w-100 mt-4 mx-auto bg-[#454646] rounded-2xl px-8 py-7 shadow-lg mr-[100px]'>{lyrics}</pre>
        </div>
      </div>




      <div className='mt-[600px] mb-[600px]'>
        <p className='text-center text-4xl text-white font-water animate-[bounce_5s_ease-in-out_infinite] rounded-full bg-opacity-25 bg-blur-md bg-black backdrop-blur-md backdrop-filter ml-[200px] mr-[200px]'>
          Have the cherished lyrics caressed your soul with their melody? Are they an oasis soothing your deepest thoughts?
        </p>
      </div>

      <div className='mt-8 ml-[200px] mr-[200px]'>
        <p className='text-center text-4xl text-white font-water rounded-full bg-opacity-25 bg-blur-md bg-black backdrop-blur-md backdrop-filter ml-[100px] mr-[100px] '>
          Wander through the garden of my creation, where each word is a delicate petal, blooming into stories that echo the unspoken whispers within.
        </p>
        
      </div>

      <div className="mt-[100px] mb-100 w-96 font-air mx-auto bg-[#454646] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex flex-col items-center">
          <button className="bg-blue-300 hover:bg-white text-black font-air py-2 px-4 rounded-full mb-4" onClick={changeParagraph}>
            Allow me to reveal more
          </button>
          <div className="text-white text-lg">
            {displayParagraph.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      <footer className='mb-[-140px]'>
      <div className=" justify-center bg-opacity-25 bg-blur-md bg-black backdrop-blur-md backdrop-filter p-6 rounded-full ml-[500px] mr-[500px] mt-[100px] mb-[100px]">
        <div className='text-white text-center font-air'><h1>For more check out my profiles!!</h1>
        <p>Instagram Id: "the_commonly_uncommon"</p>
        <p>YourQuote Id: sangeethari321d</p></div>
      </div>
      </footer>

      
    </>
  );
}

export default App;
