import React from "react";
import ServiceCard from "../../components/card/serviceCard";
import { serviceCardData } from "../../config";

const HomeSectionTwo = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0 my-5 py-5">
        <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 text-center">
          <h1 className="py-4 heading1_Font1">Our Services</h1>
          <div className="Horizental_Line row  my-3"></div>
          <p className="py-3 Secondery_paragraph">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients.
          </p>
        </div>
        <div className="col-11 ">
          <div className="row justify-content-center align-items-center">
            {serviceCardData.map((card_items) => {
              return <ServiceCard data={card_items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionTwo;
