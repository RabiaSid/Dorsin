import React from 'react'
import { PersonOne } from '../../../assets'

const TeamCard = ({data}) => {
  return (
    <div className="col-10 col-sm-6 col-lg-3 my-2" key={data?.id}>
    <div className="card card_Ytransform">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={data?.image} className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{backgroundColor: `rgba(251, 251, 251, 0.15);`}}></div>
        </a>
      </div>
      <div className="card-body text-center">
      <h3 className='heading1_Font3'>
        {data?.title}
        </h3>
        <p className="card-text Secondery_paragraph" >
        {data?.Designation}
        </p>
      </div>
    </div>
  </div>
  )
}

export default TeamCard