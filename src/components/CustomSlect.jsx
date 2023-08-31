import React, { useState } from "react";

const CustomSlect = (props) => {
  //   const dataprov1 = ["option1", "option2", "option3", "option4"];
  const [dataprov, setdataprov] = useState(0);
  const [customColor, setcustomColor] = useState("white");
  const [customSize, setcustomSize] = useState("14px");

  return (
    <section className="  bg-info-subtle custom_sl">
      <div className=" container">
        <div className=" d-flex flex-column justify-content-center py-4 ">
          <div className="text-center">
            <h3
              onClick={() => {
                setdataprov(1);
              }}
              className=" bg-black px-4 py-2 text-white rounded rounded-3 transition400 d-inline ">
              {customColor}
            </h3>{" "}
          </div>
          <ul className=" list-unstyled p-0 m-0 d-flex flex-column gap-3 mt-4">
            <span>Set color </span>
            {dataprov === 1 && (
              <>
                {props.colorDrop.map((data, i) => (
                  <div className="text-center">
                    <li
                      onClick={() => {
                        setcustomColor(data);
                        setdataprov(0);
                      }}
                      key={i}
                      className=" d-inline bg-black px-4 py-2 text-white rounded rounded-3 transition400 ">
                      {data}
                    </li>
                  </div>
                ))}
              </>
            )}
          </ul>

          <div
            className=" text-center
          ">
            {" "}
            <h3
              onClick={() => {
                setdataprov(2);
              }}
              className=" bg-black px-4 py-2 text-white rounded rounded-3 transition400 d-inline ">
              {customSize}
            </h3>{" "}
          </div>

          <ul className=" list-unstyled p-0 m-0 d-flex flex-column gap-3 mt-4">
            <span>Set size </span>

            {dataprov === 2 && (
              <>
                {props.sizsDrope.map((data, i) => (
                  <div className="text-center">
                    <li
                      onClick={() => {
                        setcustomSize(data);
                        setdataprov(0);
                      }}
                      key={i}
                      className=" d-inline bg-black px-4 py-2 text-white rounded rounded-3 transition400 ">
                      {data}
                    </li>
                  </div>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
      <div
        className=" py-4 bg-black px-3 "
        style={{ color: `${customColor}`, fontSize: `${customSize}` }}>
        Hello world
      </div>
    </section>
  );
};

export default CustomSlect;
