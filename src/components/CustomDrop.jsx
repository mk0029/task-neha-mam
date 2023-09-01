import React, { useState } from "react";
import CustomNav from "./CustomNav";

const CustomDrop = () => {
  const dropArr = [
    {
      DropHeading: "Drop first",
      DropPera:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidemenim magni tempora. Natus quae, cum, est perferendis asperiores doloribus officiis sint deserunt inventore nisi porro qui debitis perspiciatis pariatur repudiandae!",
    },
    {
      DropHeading: "Drop Second",
      DropPera:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidemenim magni tempora. Natus quae, cum, est perferendis asperiores doloribus officiis sint deserunt inventore nisi porro qui debitis perspiciatis pariatur repudiandae!",
    },
    {
      DropHeading: "Drop Three",
      DropPera:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidemenim magni tempora. Natus quae, cum, est perferendis asperiores doloribus officiis sint deserunt inventore nisi porro qui debitis perspiciatis pariatur repudiandae!",
    },
  ];
  const [showDropContent, setShowDropContent] = useState(-1);

  const toggleDropContent = (i) => {
    setShowDropContent(showDropContent === i ? -1 : i);
  };

  return (
    <>
      <CustomNav />
      <section className="my-5">
        <div className="container">
          {dropArr.map((data, i) => (
            <div key={i} className="p-2 bg-dark-subtle rounded-3 border mt-2">
              <h6
                onClick={() => {
                  toggleDropContent(i);
                }}
                className="mb-0">
                {data.DropHeading}
              </h6>
              {showDropContent === i && (
                <div className="ContentBox">
                  <p className="p-1 my-1 border border-dark-subtle rounded-2">
                    {data.DropPera}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomDrop;
