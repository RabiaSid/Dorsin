import React from "react";
import { bgPattern } from "../../assets";
import {BsPlayCircle} from "react-icons/bs"

const HomeSectionOne = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0 HomeSectionOneImg z-0 position-relative ">
        <div className="row justify-content-center align-items-center   m-0 OverlayImage ">
          <div className=" col-12 col-sm-8 col-md-6 text-center justify-content-center align-items-center ">
            <h1
              className="text-white Light_fontHeading"
            >
              We help startups launch their products
            </h1>
            <text
              className="text-white "
              style={{
                fontSize: "calc(6px + 6 * ((100vw - 320px) / 680))",
              }}
            >
              Etiam sed.Interdum consequat proin vestibulum class at.
            </text>
            <BsPlayCircle size={'80px'} color="#fb3e3e"/>
          </div>
        </div>
      </div>
      <div className="z-1 position-relative d-none d-lg-block">
        <img src={bgPattern} className="HomeSectionTwoImg" />
      </div>
    </>
  );
};

export default HomeSectionOne;
