import React from 'react'

const Star = ({rating = 4}) => {
    const stars = Array.from({length:5}, (_,index)=>{
        
    })
    // console.log(stars)
  return (
    <div>
        {stars}
    </div>
  )
}

export default Star