import React from "react";
import PriceCard from "../../components/card/priceCard";
import AppButton from "../../components/button";
// import ServiceCard from '../../components/card/serviceCard'
// import { serviceCardData } from '../../config';

const HomeSectionEleven = () => {
  return (
    <>
      <div className="row d-flex justify-content-center  m-0 p-0 my-5 py-5">
        <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 text-center">
          <h1 className="py-4 heading1_Font1">GET IN TOUCH</h1>
          <div className="Horizental_Line row my-4"></div>
          <p className="py-3 Secondery_paragraph">
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with faucibus sapien odio
            measurable results.
          </p>
        </div>
        <div className="row justify-content-center  py-3">
          <div className="col-10 col-lg-3 d-flex justify-content-start align-items-center flex-column">
            <div className="row d-flex justify-content-center align-items-center">
              <div>
                <h5 className="Dark_text3">Office Address 1:</h5>
                <p className="Secondery_paragraph">
                  4461 Cedar Street Moro, AR 72368
                </p>
              </div>
              <div>
                <h5 className="Dark_text3">Office Address 2:</h5>
                <p className="Secondery_paragraph">2467 Swick Hill Street</p>
                <p className="Secondery_paragraph">New Orleans, LA 70171</p>
              </div>
              <div>
                <h5 className="Dark_text3">Working Hours:</h5>
                <p className="Secondery_paragraph">Working Hours:</p>
              </div>
            </div>
          </div>
          <div className="col-10 col-lg-7">
            <form>
              <div className="row">
                <div className="col-6 my-2">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Your name*"
                  />
                </div>
                <div className="col-6  my-2">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="email*"
                  />
                </div>
                <div className="col-12 my-2">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Your Subject*"
                  />
                </div>
                <div className="col-12 my-2">
                  <textarea
                    className="form-control form-control-lg "
                    id="exampleFormControlTextarea1"
                    placeholder="Your message..."
                    rows="4"
                  ></textarea>
                </div>
                <div className="col-12 my-2 text-end">
                  <AppButton
                    title="Send Message"
                    backgroundColor={"#fb3e3e"}
                    color={"#ffffff"}
                    height={"7vh"}
                    marginLeft={"5px"}
                    width={"230px"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionEleven;
