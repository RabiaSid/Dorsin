import React from "react";
import { BsTelephone, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGooglePlusG, FaXbox } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Payment } from "../../assets";

const AppFooter = () => {
  return (
    <div className="border border-danger container-fluid">
      {/* top section */}
      <div
        className="row d-flex justify-content-evenly align-items-center py-4"
        style={{ background: "#f8f9fa" }}
      >
        <div className="col-11  col-lg-6 py-4">
          <span className="social_icon_div">
            <BsFacebook size={"25px"} className="social_icon" />
          </span>
          <span className="social_icon_div">
            <BsTwitter size={"25px"} className="social_icon" />
          </span>
          <span className="social_icon_div">
            <BsLinkedin size={"22px"} className="social_icon" />
          </span>
          <span className="social_icon_div">
            <FaGooglePlusG size={"25px"} className="social_icon" />
          </span>
          <span className="social_icon_div">
            <FaXbox size={"25px"} className="social_icon" />
          </span>
        </div>
        <div className="col-10  col-lg-3 py-1 py-lg-4">
          <text className="row d-flex align-items-center justify-content-evenly my-0 my-lg-2">
            <span className="col-1 col-lg-2 col-xl-1">
              <BsTelephone size={"25px"} />
            </span>
            <span className="DarkGrey_text col-11 col-lg-10 col-xl-11">
              +91 123 4556 789
            </span>
          </text>
        </div>
        <div className="col-10  col-lg-3 py-1 py-lg-4">
          <text className="row d-flex align-items-center justify-content-evenly my-0 my-lg-2">
            <span className="col-1 col-lg-2 col-xl-1">
              <HiOutlineMailOpen size={"30px"} />
            </span>
            <span className="DarkGrey_text col-11 col-lg-10 col-xl-11">
              Support@info.com
            </span>
          </text>
        </div>
      </div>
      {/* middle section */}
      <div className="row d-flex justify-content-evenly align-items-start">
        <div className="col-11 col-lg-3 text-start border border-primary">
          <h4 className="">
            Quick Link
          </h4>
          <div className="footer_div text-start">
                <text className="">Email</text>
                <text className="">Email</text>
                <text className="">Email</text>
                <text className="">Email</text>
          </div>
        </div>
        <div className="col-11 col-lg-3 text-start border border-primary">
        <h4 className="">
            Quick Link
          </h4>
          <div className="footer_div text-start">
                <text className="">Email</text>
                <text className="">Email</text>
                <text className="">Email</text>
                <text className="">Email</text>
          </div>
        </div>
        <div className="col-11 col-lg-3 text-start border border-primary">
        <h4 className="">
            Quick Link
          </h4>
          <div className="footer_div text-start">
                <text className="">Email</text>
                <text className="">Email</text>
                <text className="">Email</text>
                <text className="">Email</text>
          </div>
        </div>
        <div className="col-11 col-lg-3 text-start border border-primary">
        <h4 className="">
            Quick Link
          </h4>
          <div className="footer_div text-start">
                <text className="">Email</text>
                <input />
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div
        className="row d-flex justify-content-between align-items-center py-2"
        style={{ background: "#2e313a" }}
      >
        <div className="col-12 col-md-8 col-lg-6 ">
          <text className="Secondery_paragraph">
            2019 - 2023 © Dorsin - Themesbrand payment
          </text>
        </div>
        <div className="col-12 col-md-4 col-lg-6 text-md-end text-start">
          <img src={Payment} style={{ width: "220px" }} />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
