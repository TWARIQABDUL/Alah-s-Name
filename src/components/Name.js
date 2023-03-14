import React, { useState } from 'react'

function Name() {
    const audio = new Audio("../audios/1.mp3")
        const plays =()=>{
            audio.src("../audios/1.mp3")
            audio.play()
        }
  return (
    <div>
        <h1>ALLAH <span>(الله)</span></h1>
        {/* <audio src='../audios/1.mp3' controls autoPlay></audio> */}
        <button id='play' onClick={plays}>play</button>
        <p>
            some descrption
        </p>
    </div>
  )
}

export default Name