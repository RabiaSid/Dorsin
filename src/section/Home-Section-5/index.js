import React from "react";
import PriceCard from "../../components/card/priceCard";
import { PriceCardData } from "../../config";

const HomeSectionfive = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0 my-5 py-5">
        <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 text-center">
          <h1 className="py-4 heading1_Font1">Our Pricing</h1>
          <div className="Horizental_Line row my-3"></div>
          <p className="py-3 Secondery_paragraph">
            Call to action pricing table is really crucial to your for your
            business website. Make your bids stand-out with amazing options.
          </p>
        </div>
        <div className="col-11 col-md-12">
          <div className="row justify-content-center align-items-center">
            {PriceCardData.map((card_items) => {
              return <PriceCard data={card_items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionfive;
