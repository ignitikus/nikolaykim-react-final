import React from 'react'

export default function Card(props) {
   const { image_url, name, description, brewers_tips, food_pairing} = props.data
   return (
      <div style={{display:'flex'}}>
         <div style={{minWidth: 400, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={image_url} alt={name} style={{maxWidth: 200, maxHeight: 200}}/>
         </div>
         <div>
            <h1 className='IMFellEnglishFont'>{name}</h1>
            <p><b className='IMFellEnglishFont'>Description: </b>{description}</p>
            <p><b className='IMFellEnglishFont'>Tips: </b>{brewers_tips}</p>
            <p><b className='IMFellEnglishFont'>Pair With:</b></p>
            <ul>
               {food_pairing.map((entry,i)=>{
                  return <li key={entry+i}>{entry}</li>
               })}
            </ul>
         </div>
      </div>
   )
}
