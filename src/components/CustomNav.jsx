import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CustomNav = () => {
  const tryPathname = useLocation().pathname;
  const currentURL = useLocation().hash;
  console.log(tryPathname, "tryFunction");
  console.log(currentURL, "currentURL");

  const navArr = [
    {
      linkName: "None",
      linkURL: "/",
      rounded: "0",
      linkId: "none",
    },
    {
      linkName: "Nested-Map",
      linkURL: "/NestedMap",
      rounded: "10%",
      linkId: "null",
    },
    {
      linkName: "Emailjs",
      linkURL: "/Emailjs",
      rounded: "20%",
      linkId: "null",
    },
    {
      linkName: "CustomSlect",
      linkURL: "/CustomSlect",
      rounded: "",
      linkId: "null",
    },
    {
      linkName: "FilterData",
      linkURL: "/FilterData",
      rounded: "",
      linkId: "null",
    },
    {
      linkName: "MapFilterV2",
      linkURL: "/MapFilterV2",
      rounded: "",
      linkId: "null",
    },
  ];
  const [indexGet, setIndexGet] = useState("");

  return (
    <>
      <section
        className={` bg-dark-subtle py-3 d-flex flex-column  ${
          indexGet.linkURL === "/" ? "min-vh-100 " : ""
        }`}>
        <div className=" container">
          <nav className="d-flex justify-content-between align-items-center ">
            <ul className=" m-0 p-0 d-flex gap-3 align-items-center ">
              {navArr.map((data, i) => (
                <>
                  <li className="list-unstyled ">
                    <Link
                      to={`${data.linkURL}`}
                      onClick={() => setIndexGet(data)}
                      className={`d-inline-block px-3 py-2 bg-dark list-unstyled rounded-3  text-decoration-none fs-6
                    ${
                      currentURL === `${data.linkURL}`
                        ? "text-danger text-decoration-underline"
                        : "text-white"
                    } ${
                        tryPathname === `${data.linkURL}`
                          ? "text-danger text-decoration-underline"
                          : "text-white"
                      }
                   `}
                      href={`#${data.linkId}`}>
                      {data.linkName}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className={` d-flex flex-grow-1 justify-content-center align-items-center ${
            indexGet.linkURL === "/" ? "d-block" : "d-none"
          }`}>
          <div className=" container ">
            <div className="d-flex justify-content-center py-5">
              <div
                style={{ borderRadius: `${indexGet.rounded}` }}
                className="box"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomNav;
