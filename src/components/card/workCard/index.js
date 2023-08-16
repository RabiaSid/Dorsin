import React from 'react'

const WorkCard = ({data}) => {
    const IconComponent = data?.icon;
  return (
    <div
      className="col-11  p-2 my-2"
      key={data?.id}
    >
      <div className="row d-flex justify-content-center  align-items-center text-center p-1">
        <IconComponent  className="card_icon2" />
        <h1 className="heading1_Font2 py-3">{data?.title}</h1>
        <text className="Secondery_paragraph py-1">{data?.desc}</text>
      </div>
    </div>
  )
}

export default WorkCard