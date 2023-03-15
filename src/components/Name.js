import React, { useState } from 'react'
import { Howl, Howler } from 'howler';
import msc from '../audios/1.mp3'
import { MdPlayArrow } from 'react-icons/md'
function Name({ listNames }) {
    function playback(srcx){
        const sound = new Howl({
            src:[msc]
        })
        console.log("fine",srcx);
        sound.play()
    }
    
    //sound.play()
    return (
        <div className='name-holder'>
            <div className='top'>
                <h1>{listNames.eng_name} <span>{listNames.alab}</span></h1>
                <button id='play' onClick={()=>playback(listNames.audio)}><MdPlayArrow /></button>
            </div>
            <p>
                some descrption
            </p>
        </div>
    )
}

export default Name