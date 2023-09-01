import React, { useState } from "react";
import CustomNav from "./CustomNav";

const CustomTab = () => {
  const [tabControler, settabControler] = useState(0);

  return (
    <>
      <CustomNav />{" "}
      <section className="py-5">
        <div className=" container">
          <div className="row">
            <div className="col-md-6 p-3">
              <div className=" bg-danger-subtle text-center m-2 p-3 h-100">
                <h2>here is Tab Buttons</h2>

                <div className="d-flex justify-content-center align-content-center flex-column gap-3">
                  <h4
                    onClick={() => settabControler(0)}
                    className={`text-center py-2 px-3 ${
                      tabControler === 0 ? "text-danger" : "text-black"
                    }`}>
                    tab 1
                  </h4>
                  <h4
                    onClick={() => settabControler(1)}
                    className={`text-center py-2 px-3 ${
                      tabControler === 1 ? "text-danger" : "text-black"
                    }`}>
                    tab 2
                  </h4>
                  <h4
                    onClick={() => settabControler(2)}
                    className={`text-center py-2 px-3 ${
                      tabControler === 2 ? "text-danger" : "text-black"
                    }`}>
                    tab 3
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3 ">
              <div className=" bg-danger-subtle text-center m-2 p-3 h-100">
                {" "}
                <h3>here is Tab Content</h3>
                <div className="d-flex justify-content-center align-items-center h-100">
                  {" "}
                  {tabControler == 0 && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quam tenetur esse animi dolorem
                    </p>
                  )}
                  {tabControler == 1 && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quam tenetur esse animi dolorem Lorem ipsum dolor sit,
                      amet consectetur adipisicing elit. Veritatis, quo.
                    </p>
                  )}
                  {tabControler == 2 && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quam tenetur esse animi dolorem Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. At incidunt ullam
                      excepturi, temporibus nostrum nam perspiciatis cupiditate
                      magni! Recusandae necessitatibus optio itaque nostrum
                      voluptatem tenetur maiores nemo tempore aperiam.
                      Perferendis!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomTab;
