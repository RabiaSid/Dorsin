import React from 'react'
import AppButton from '../../button'
import { BsArrowRight } from "react-icons/bs";

const BlogCard = ({data}) => {
  return (
    <div className="col-12 col-md-4    my-5" key={data?.id} style={{height:'70vh', minheight:'auto'}}>
    <div className="card card_Ytransform">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={data?.image} className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{backgroundColor: `rgba(251, 251, 251, 0.15);`}}></div>
        </a>
      </div>
      <div className="card-body text-left row d-flex justify-content-left">
      <text className="card-text Secondery_paragraph" >
        {data?.category}
        </text>
      <h3 className='heading1_Fonthover'>
        {data?.title}
        </h3>
        <text className="card-text Secondery_paragraph" >
        {data?.Desc}
        </text>
        <div className=''>
        <AppButton
              title="learn more"
              height={"7vh"}
              backgroundColor={'#ffffff'}
              color={"#fb3e3e"}
              fontWeight={"500"}
              width={"140px"}
            >
              <BsArrowRight size={"1.5rem"} className='ps-2'/>
        </AppButton>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogCard