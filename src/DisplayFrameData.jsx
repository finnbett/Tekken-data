import React, { useEffect, useState } from 'react';
import { getFrameData } from './api';


const DisplayFrameData = () => {
    const [frameData, setFrameData] = useState([])
    const [characterMoves, setCharacterMoves] = useState([])
    const [characterNames, setCharacterNames] = useState([])

    //console.log(Object.values(frameData))
  
    useEffect(() => {
      getFrameData()
      .then((res) => {
          console.log(res)
        setFrameData(res)
        setCharacterNames(Object.keys(res)) 
        setCharacterMoves(Object.values(res))
        console.log(characterMoves)
        //console.log([...characterMoves])
        return null
      })
    //   .catch(err => {
    //     console.log(err.message)
    //   })
    },[])


   
    
    // const characterMoves= Object.values(props.frameData)
    // console.log(characterMoves[4].moves[2].Block)
    // console.log(characterMoves[4].moves[2].Command)
    
    return(
        <>
            {/* <div>{characterMoves.map(({Command}) => {
                <li>Command: {Command}</li> */}
                
       
            
            <div>
                {characterNames.map((name)=>{
                    return <li>{name}</li>
                })}
            </div>
        




        </>
    )
}

export default DisplayFrameData