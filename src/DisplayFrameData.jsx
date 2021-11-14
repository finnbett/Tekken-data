import React from "react";
import App from "./App";


const DisplayFrameData = (props) => {
    const characterNames= Object.keys(props.frameData)
    const characterMoves= Object.values(props.frameData)
    console.log(characterMoves[1]['moves'][1].Command)
    return(
        <>
            <div>
                {characterNames.map((name)=>{
                    return <li>{name}</li>
                })}
            </div>
            {/* <div>
                {characterMoves.ma}
            </div> */}



        </>
    )
}

export default DisplayFrameData