import React from "react";
import TeamCard from "../../components/card/TeamCard";
import { TeamCardData } from "../../config";

const HomeSectionSix = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0  my-5 py-5">
        <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 text-center ">
          <h1 className="py-4 heading1_Font1">BEHIND THE PEOPLE</h1>
          <div className="Horizental_Line row my-3"></div>
          <p className="py-3 Secondery_paragraph">
            It is a long established fact that create category leading brand
            experiences a reader will be distracted by the readable content of a
            page when looking at its layout.
          </p>
        </div>
        <div className="col-10 ">
          <div className="row justify-content-center align-items-center">
            {TeamCardData.map((card_items) => {
              return <TeamCard data={card_items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionSix;
