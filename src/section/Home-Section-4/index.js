import React from "react";
import { bgPattern } from "../../assets";
import AppButton from "../../components/button";

const HomeSectionFour = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0 HomeSectionFourImg z-0 position-relative ">
        <div className="row justify-content-center align-items-center   m-0 OverlayImage ">
          <div className=" col-11 col-md-8 text-center justify-content-center align-items-center ">
            <h1
              className="text-white fs-3 fw-bolder"
              
            >
              Build your dream website today
            </h1>
            <text
              className="text-white "
              style={{
                
                fontSize: "calc(14px + 6 * ((100vw - 320px) / 680))",
              }}
            >
              But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.
            </text>
            <AppButton
              title="View Plan & pricing"
              height={"7vh"}
              marginLeft={"5px"}
              width={"230px"}
              fontSize={"8px"}
            />
          </div>
        </div>
      </div>
      <div className="z-1 position-relative d-none d-lg-block">
        <img src={bgPattern} className="HomeSectionTwoImg  " />
      </div>
    </>
  );
};

export default HomeSectionFour;
