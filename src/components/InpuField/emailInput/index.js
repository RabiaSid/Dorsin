import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

const EmailInput = () => {
  return (
    <div className="input-group rounded-2 mt-5" style={{ background: "#2e313a" }}>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Email"
        aria-label="Email"
        aria-describedby="basic-addon2"
        style={{ backgroundColor: "#2e313a", border: "none" }}
      />
      <div className="input-group-append row ">
        <span
          className="input-group-text "
          id="basic-addon2"
          style={{ backgroundColor: "#2e313a", border: "none",  }}
        >
          <IoPaperPlaneOutline size={"25px"} color="#b4b7b8" />
        </span>
      </div>
    </div>
  );
};

export default EmailInput;
