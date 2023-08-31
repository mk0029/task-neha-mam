import React, { useState } from "react";
import { colPrint } from "./helper";
import { colBtnFirst } from "./helper";

const NestedMap = () => {
  const [colBtn1, setColBtn1] = useState("");
  const [colBtn2, setColBtn2] = useState({
    btn: "",
    text: "",
    textlist: "",
    textStyle: "",
  });
  // const classRound = navArr[indexGet].rounded;

  return (
    <section className="py-5 bg-dark-subtle">
      <div className=" container">
        {" "}
        <div className="d-flex justify-content-between ">
          {" "}
          <div>
            <h2>Button for upperbox</h2>
            <ul className=" p-0 m-0 d-flex gap-3 align-items-center">
              {colBtnFirst.map((dataBtn, i) => (
                <>
                  <li>
                    <button
                      onClick={() => setColBtn1(dataBtn)}
                      className="btn btn-primary">
                      {dataBtn.btn}
                    </button>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div>
            <h2>Button for innerbox with slice( )</h2>
            <ul className=" p-0 m-0 d-flex gap-3 align-items-center">
              {colBtnFirst.slice(2, 4).map((dataBtn2, i) => (
                <>
                  <li>
                    <button
                      onClick={() => setColBtn2({ btn: dataBtn2.btn })}
                      className="btn btn-primary">
                      {dataBtn2.btn}
                    </button>
                  </li>
                </>
              ))}
            </ul>
            <h2>Text-ul-heading</h2>
            <ul className=" p-0 m-0 d-flex gap-3 align-items-center">
              {colBtnFirst.map((dataBtn2, i) => (
                <>
                  <li>
                    <button
                      onClick={() => setColBtn2({ text: dataBtn2.textValue })}
                      className="btn btn-primary">
                      {dataBtn2.text}
                    </button>
                  </li>
                </>
              ))}
            </ul>
            <h2>Text-list-item</h2>
            <ul className=" p-0 m-0 d-flex gap-3 align-items-center">
              {colBtnFirst.map((dataBtn2, i) => (
                <>
                  <li>
                    <button
                      onClick={() =>
                        setColBtn2({ textlist: dataBtn2.textValue })
                      }
                      className="btn btn-primary">
                      {dataBtn2.text}
                    </button>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="row py-5">
          {colPrint.map((data, i) => (
            <>
              <div className={`col-3 ${colBtn1.btn} my-3`}>
                <div className="py-1 px-2 border border-danger">
                  <h2>{data.head}</h2>
                  <p>{data.Pera}</p>
                  <div className=" d-flex flex-wrap">
                    {data.innerBox &&
                      data.innerBox.map((data2, i) => (
                        <>
                          <div className={`col-6 ${colBtn2.btn} my-3`}>
                            <div className="mx-1 px-2 py-1 border border-danger">
                              <h3
                                style={{
                                  fontSize: ` ${colBtn2.text}`,
                                }}
                                className={`text_def`}>
                                {data2.ulHeading}
                              </h3>
                              <ul>
                                {data2.listitems &&
                                  data2.listitems.map((data3, i) => (
                                    <>
                                      <li
                                        style={{
                                          fontSize: ` ${colBtn2.textlist}`,
                                        }}
                                        className={`text_def`}>
                                        {data3}
                                      </li>
                                    </>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NestedMap;
