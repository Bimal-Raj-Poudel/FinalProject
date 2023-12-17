import React from 'react'

export default function Rating({stars}) {
   

    const ratingStar = Array.from({length:5},(elem,index) => {
        let number = index + 0.5;

        return(
            <span key={index}>
              {stars >= index+1 ?(
              <i className="bi bi-star-fill text-warning"></i>
              ) : (stars >= number) ? (
              <i className="bi bi-star-half text-warning"></i>
              ) : (<i className="bi bi-star text-warning"></i>)}
            </span>
        )
    })

  return (
    <div className='d-flex justify-content-center align-items-center gap-1'>
      {ratingStar}  
      <p className='text-warning align-self-end'>{stars}</p>
     
    </div>
  )
}
