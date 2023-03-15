import React from 'react'
import Name from './components/Name'

function NameList() {
    const  nameList =[
        {
            ID:1,
            eng_name:"ALLAH",
            alab: "الله",
            audio:"../audios/1.mp3",
            disc:"this name helps you to remember Allah"
        },
        {
            ID:2,
            eng_name:"Ar rahman",
            alab: "الله",
            audio:"../audios/3.mp3",
            disc:"this name helps you to remember Allah"
        },
        {
            ID:3,
            eng_name:"Arahim",
            alab: "الله",
            audio:"../audios/2.mp3",
            disc:"this name helps you to remember Allah"
        }
    ]
    const Lists = nameList.map(item=><Name key={item.ID} listNames ={item}/>)
    console.log(Lists);
  return (
    [Lists]
  )
}

export default NameList