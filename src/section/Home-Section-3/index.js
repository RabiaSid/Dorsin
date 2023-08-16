import React from "react";
// import color from "../../../constant";
import { TbPointFilled } from "react-icons/tb";
import { OnlineWorld } from "../../assets";
import AppButton from "../../components/button";
import {BsArrowRightShort} from "react-icons/bs"

const HomeSectionThree = () => {
  return (
    <div className="row m-0 my-5 py-5 px-2 d-flex justify-content-center align-items-center">
      <div className="col-12 col-lg-7 ps-0 ps-sm-4 my-2">
        <h2
          className="heading1_Font4"
          // style={{ color: color.dark }}
        >
          A digital web design studio creating modern & engaging online
          experiences
        </h2>
        <br />
        <p
          className="Secondery_text py-4"
          // style={{ color: color.grey }}
        >
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia.
        </p>
        <ul className="p-0">
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 ">
              <TbPointFilled
              color="#fb3e3e"
                className="p-0 fs-4"
                // style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Secondery_text col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              //   style={{ color: color.grey }}
            >
              We put a lot of effort in design.
            </text>
          </li>
          <li className="py-1 row ">
            <span className="col-1 col-sm-1 col-md-1 ">
              <TbPointFilled
              color="#fb3e3e"
                className="p-0 fs-4"
                // style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Secondery_text col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              //   style={{ color: color.grey }}
            >
              The most important ingredient of successful website..
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 ">
              <TbPointFilled
              color="#fb3e3e"
                className="p-0 fs-4"
                // style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Secondery_text col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              //   style={{ color: color.grey }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit.
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 ">
              <TbPointFilled
              color="#fb3e3e"
                className="p-0 fs-4"
                // style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Secondery_text col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              //   style={{ color: color.grey }}
            >
              Submit Your Organization.
            </text>
          </li>
        </ul>
        <AppButton 
        title="Learn More" 
        backgroundColor={"#fb3e3e"}
        color={"#ffffff"}
        height={'7vh'}
        marginLeft={'5px'}
        width={'180px'}
        ><BsArrowRightShort size={'1.5rem'}/></AppButton>
      </div>

      <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column my-2">
        <img
          src={OnlineWorld}
          alt=""
          className="img-fluid"
          style={{ widh: " 100%", maxHeight: "25rem" }}
        />
      </div>
    </div>
  );
};

export default HomeSectionThree;
