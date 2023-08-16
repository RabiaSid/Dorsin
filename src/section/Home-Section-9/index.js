import React from "react";
import { bgPattern } from "../../assets";
import AppButton from "../../components/button";
import { BsArrowRightShort } from "react-icons/bs";

const HomeSectionNine = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0 HomeSectionNineImg z-0 position-relative ">
        <div className="row justify-content-center align-items-center   m-0 OverlayImageFont ">
          <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 text-center z-2">
            <h1 className="py-4 heading1_FontLight">Let's Get Started</h1>
            <div className="Horizental_Line row my-4"></div>
            <p className="py-3 Light_paragraph">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <AppButton
              title="Get Started"
              height={"7vh"}
              marginLeft={"5px"}
              width={"230px"}
            >
              <BsArrowRightShort size={"1.5rem"} />
            </AppButton>
          </div>
        </div>
      </div>
      <div className="z-1 position-relative d-none d-lg-block">
        <img src={bgPattern} className="HomeSectionTwoImg" />
      </div>
    </>
  );
};

export default HomeSectionNine;
