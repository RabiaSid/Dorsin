import React from "react";

const ServiceCard = ({ data }) => {
  const IconComponent = data?.icon;
  return (
    <div
      className="col-11 col-md-5 col-lg-4  p-2 card_Ytransform my-2"
      key={data?.id}
    >
      <div className="row d-flex justify-content-center  align-items-center text-center p-1">
        <div className="col-2 card_icon_div ">
        <IconComponent  className="card_icon" />
        </div>
        <h1 className="heading1_Font2 py-3">{data?.title}</h1>
        <text className="Secondery_paragraph py-1">{data?.desc}</text>
      </div>
    </div>
  );
};

export default ServiceCard;
