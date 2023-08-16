import React from "react";
import ReviewCard from "../../components/card/reviewCard";
import { ReviewCardData } from "../../config";

const HomeSectionEight = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0  my-5 py-5">
        <div className="col-10 col-md-8 col-lg-6 py-4 d-flex justify-content-center align-items-center flex-column m-0 text-center ">
          <h1 className="py-4 heading1_Font1">WHAT THEY'VE SAID</h1>
          <div className="Horizental_Line row my-4"></div>
          <p className="py-3 Secondery_paragraph">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious pulvinar metus
            molestie sed Semikoli.
          </p>
        </div>
        <div className="col-12 py-4">
          <div className="row justify-content-evenly align-items-center">
            {ReviewCardData.map((card_items) => {
              return <ReviewCard data={card_items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionEight;
