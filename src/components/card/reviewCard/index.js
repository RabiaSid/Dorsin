import React from 'react'

const ReviewCard = ({data}) => {
  return (
    <div className='col-10 col-md-5 col-lg-3 my-5 ' key={data?.id}>
      <div className='card card_Ytransform'>
      <div className='row d-flex justify-content-center text-center reviewCard_div shadow-sm'>
      <div className='position-relative'>
      {/* img */}
     <div 
     className='position-absolute top-0 start-50 translate-middle reviewCard_img_div'
     >
      <img src={data?.image}  className='reviewCard_img'/>
     </div>
     
     </div>
     {/* body */}
     <div className='mt-5 py-3 px-4'>
      <p className='Secondery_paragraph fst-italic'>
        {data?.review}
      </p>
     </div>
     </div>
     <div className='text-center py-3'>
     <text >
        <span className='Dark_text2' >{data?.title} - </span>
        
        <span className='Secondery_paragraph' >{data?.area}</span>
      </text>
     </div>
     </div>
    </div>
  )
}

export default ReviewCard