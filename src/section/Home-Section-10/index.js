import React from "react";
import { LiaPenAltSolid } from "react-icons/lia";
import { AiFillRightCircle } from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";
import { RxTarget } from "react-icons/rx";
import { BlogCardData, WorkCardData } from "../../config";
import WorkCard from "../../components/card/workCard";
import BlogCard from "../../components/card/blogCard";

const HomeSectionTen = () => {
  return (
    <>
      <div
        className="row d-flex justify-content-center  m-0 p-0  my-5 py-5"
        style={{ background: "#f8f9fa" }}
      >
        <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 text-center ">
          <h1 className="py-4 heading1_Font1">BLOG</h1>
          <div className="Horizental_Line row my-4"></div>
          <p className="py-3 Secondery_paragraph">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean class at a euismod mus ipsum vel
            ex finibus semper luctus quam.
          </p>
        </div>
        <div className="col-11">
          <div className="row justify-content-center align-items-center">
            {BlogCardData.map((card_items) => {
              return <BlogCard data={card_items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionTen;
