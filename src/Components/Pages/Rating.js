import React from 'react'

export default function Rating() {
    const stars = 4.5;

    const ratingStar = Array.from({length:5},(elem,index) => {
        let number = index + 0.5;

        return(
            <span key={index}>
              {stars >= index+1 ?(
              <i className="bi bi-star-fill bg-warning"></i>
              ) : (stars >= number) ? (
              <i className="bi bi-star-half bg-warning"></i>
              ) : (<i className="bi bi-star bg-warning"></i>)}
            </span>
        )
    })

  return (
    <div className='d-flex justify-content-center align-items-center gap-1'>
      {ratingStar}  
      <p className='text-dark'>{stars}</p>
     
    </div>
  )
}
