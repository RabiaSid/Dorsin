import React from "react";
import { LiaPenAltSolid } from "react-icons/lia";
import { AiFillRightCircle } from "react-icons/ai";
import { BsPersonVcard, BsArrowRightShort } from "react-icons/bs";
import { RxTarget } from "react-icons/rx";
import { WorkCardData } from "../../config";
import WorkCard from "../../components/card/workCard";
import AppButton from "../../components/button";

const HomeSectionSeven = () => {
  return (
    <>
      <div
        className="row d-flex justify-content-center  m-0 p-0  my-5 py-5"
        style={{ background: "#f8f9fa" }}
      >
        <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 text-center ">
          <h1 className="py-4 heading1_Font1">WORK PROCESS</h1>
          <div className="Horizental_Line row my-4"></div>
          <p className="py-3 Secondery_paragraph">
            In an ideal world this website wouldn’t exist, a client would
            acknowledge the importance of having web copy before the Proin vitae
            ipsum vel ex finibus semper design starts.
          </p>
        </div>
        {/* show in large Screen */}
        <div className="col-lg-11 d-lg-block d-none my-4 py-4 ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-2 text-center">
              <LiaPenAltSolid className="card_icon2" />
            </div>
            <div className="col-2 dotted_Border position-relative">
              <AiFillRightCircle className="card_icon3 position-absolute top-0 start-50 translate-middle" />
            </div>
            <div className="col-2 text-center">
              <BsPersonVcard className="card_icon2" />
            </div>
            <div className="col-2 dotted_Border position-relative">
              <AiFillRightCircle className="card_icon3 position-absolute top-0 start-50 translate-middle" />
            </div>
            <div className="col-2 text-center">
              <RxTarget className="card_icon2" />
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center py-2">
            <div className="col-4">
              <div className="row d-flex justify-content-center  align-items-center text-center p-1">
                <h1 className="heading1_Font2 py-3">Tell us what you need</h1>
                <text className="Secondery_paragraph py-1">
                  The Big Oxmox advised her not to do so.
                </text>
              </div>
            </div>
            <div className="col-4">
              <div className="row d-flex justify-content-center  align-items-center text-center p-1">
                <h1 className="heading1_Font2 py-3">Get free quotes</h1>
                <text className="Secondery_paragraph py-1">
                  Little Blind Text didn’t listen.
                </text>
              </div>
            </div>
            <div className="col-4">
              <div className="row d-flex justify-content-center  align-items-center text-center p-1">
                <h1 className="heading1_Font2 py-3">
                  Deliver high quality product
                </h1>
                <text className="Secondery_paragraph py-1">
                  When she reached the first hills.
                </text>
              </div>
            </div>
          </div>
        </div>
        {/* show in medium Screen */}
        <div className="col-md-11 d-lg-none d-block ">
          <div className="row justify-content-center align-items-center">
            {WorkCardData.map((card_items) => {
              return <WorkCard data={card_items} />;
            })}
          </div>
        </div>
        <div className="col-11 my-4 d-flex justify-content-center align-items-center flex-colum">
          <AppButton
            title="Get Started"
            height={"7vh"}
            marginLeft={"5px"}
            width={"230px"}
            backgroundColor={"#fb3e3e"}
            color={"#ffffff"}
          >
            <BsArrowRightShort size={"1.5rem"} />
          </AppButton>
        </div>
      </div>
    </>
  );
};

export default HomeSectionSeven;
