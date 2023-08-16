import React from "react";
import AppButton from "../../button";

const PriceCard = ({ data }) => {
  return (
    <div className="col-10 col-md-5 col-lg-4 col-xl-3 my-3 " key={data?.id}>
      <div className="card shadow-lg card_Ytransform px-5 pt-5 ">
        <div className="card-body row justify-content-center align-items-center ">
          <div className="text-center">
            <h5 className="card-title Dark_text">{data?.category}</h5>
            <br />
            <h1 className="">{data?.price}</h1>
            <br />
            <p className="Secondery_paragraph2">BILLING PER MONTH</p>
          </div>
          <div
            className="row justify-content-center align-items-center text-center py-3"
            style={{
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              borderColor: "#ebeeef",
            }}
          >
            <text className="py-3 px-2">
              <span className="Dark_text2 pe-2">Bandwidth:</span>
              <span className="ultar_text">{data?.bandwidth}</span>
            </text>
            <text className="py-3 px-2">
              <span className="Dark_text2 pe-2">Onlinespace:</span>
              <span className="ultar_text">{data?.onlineSpace}</span>
            </text>
            <text className="py-3 px-2">
              <span className="Dark_text2 pe-2">Support:</span>
              <span className="ultar_text">{data?.support}</span>
            </text>
            <text className="py-3 px-2">
              <span className="ultar_text pe-2">{data?.domain}</span>
              <span className="Dark_text2">Domain</span>
            </text>
            <text className="py-3 px-2">
              <span className="ultar_text pe-2">{data?.hiddenFees}</span>
              <span className="Dark_text2"> Hidden Fees</span>
            </text>
            <AppButton
              title="Join Now"
              backgroundColor={"#fb3e3e"}
              color={"#ffffff"}
              height={"7vh"}
              marginLeft={"5px"}
              width={"180px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
