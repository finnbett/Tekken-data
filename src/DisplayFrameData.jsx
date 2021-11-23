import React, { useEffect, useState } from 'react';
import { getFrameData } from './api';


const DisplayFrameData = () => {
   
    const [characters, setCharacters] = useState({"Bob":{"character":"Bob","moves":[{"Command":"Command","Level":"Hit level","Damage":"Damage","Startup":"Start up frame","Block":"Block frame","Hit":"Hit frame","CH":"Counter hit frame","Notes":"Notes"}]}})
    const [characterNames, setCharacterNames] = useState(["Bob"])
  
    useEffect(() => {
      getFrameData()
      .then((res) => {
        //   console.log(res)
        // setFrameData(res)
        setCharacters(res)
        setCharacterNames(Object.keys(res)) 
        // setCharacterMoves(Object.values(res))
        // console.log(characters)
        //console.log([...characterMoves])
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [])


   
    
    // const characterMoves= Object.values(props.frameData)
    // console.log(characterMoves[4].moves[2].Block)
    // console.log(characterMoves[4].moves[2].Command)
    
    return(
        <>
            {/* <div>{characterMoves.map(({Command}) => {
                <li>Command: {Command}</li> */}
                
                
       
            
            <div>
                {characterNames.map((name)=>{
                    console.log(characters)
                    //console.log(characters[name].character)
                    // return <li key={name}>{name}{characters[name].moves[0].Level}</li>
                    return <li key={name}>{name}</li>
                
                })}
            </div>
        




        </>
    )
}
//[name].moves[0].Level
export default DisplayFrameData