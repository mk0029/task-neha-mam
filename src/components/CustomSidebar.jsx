import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomNav from "./CustomNav";

const CustomSidebar = () => {
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
      linkName: "StudentTodo",
      linkURL: "/StudentTodo",
      rounded: "",
      linkId: "null",
    },
    {
      linkName: "CustomDrop",
      linkURL: "/CustomDrop",
      rounded: "",
      linkId: "null",
    },
    {
      linkName: "CustomTab",
      linkURL: "/CustomTab",
      rounded: "",
      linkId: "null",
    },
    {
      linkName: "CustomSidebar",
      linkURL: "/CustomSidebar",
      rounded: "",
      linkId: "null",
    },
  ];
  const [sideBarShow, setSideBarShow] = useState(false);
  return (
    <>
      <section className="vh-100 overflow-hidden">
        <div className=" container-fluid vh-100 overflow-hidden lg-p-0 d-flex flex-column flex-lg-row position-relative">
          <div
            className={`sidebar bg-dark-subtle d-flex justify-content-center align-items-center Sidebar_mobile ${
              sideBarShow ? "ShowSidebar" : ""
            }`}>
            <nav className="d-flex justify-content-between align-items-center position-relative">
              <ul className=" m-0 p-0 d-flex flex-column gap-3 align-items-center ">
                {navArr.map((data, i) => (
                  <>
                    <li className="list-unstyled ">
                      <Link
                        to={`${data.linkURL}`}
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
            </nav>{" "}
            <span
              onClick={() => setSideBarShow(!sideBarShow)}
              className="d-lg-none position-absolute top-0 end-0 d-inline-block p-3">
              Close
            </span>
          </div>
          <div className="h-100 sideContent px-3 bg-dark overflow-auto">
            <div
              onClick={() => setSideBarShow(!sideBarShow)}
              className=" bg-black p-3 text-white d-lg-none">
              open Sidebar{" "}
            </div>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              possimus cupiditate unde recusandae similique eum nostrum libero
              placeat, et mollitia porro totam magnam eaque at exercitationem
              sunt quia consectetur! Beatae?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomSidebar;
