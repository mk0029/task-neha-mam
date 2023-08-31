import React, { useEffect, useState } from "react";

const FilterData = () => {
  const [myarr, setfirst] = useState([
    {
      name: "abc",
      id: 12,
      work: "assdscew",
    },
    {
      name: "jkl",
      id: 12,
      work: "assdscew",
    },
    {
      name: "fed",
      id: 12,
      work: "assdscew",
    },
    {
      name: "XYZ",
      id: 12,
      work: "assdscew",
    },
  ]);

  const [filterarr, setfilterarr] = useState(myarr);
  const [dataSearch, setDataSearch] = useState("");
  const [printfilterarr, setprintfilterarr] = useState([]);

  const runHide = (i) => {
    setfilterarr(filterarr.filter((data, index) => index !== i));
  };

  const userOutput = filterarr.filter(
    (user) =>
      !printfilterarr.some((e) => e.id !== user.id) &&
      user.name.toLowerCase().includes(dataSearch.toLowerCase())
  );

  const runShow = (data) => {
    setprintfilterarr((prevuserslect) => [...prevuserslect, data]);
  };

  return (
    <section>
      {" "}
      <div className=" container">
        <input
          id="UserSlect"
          type="search"
          value={dataSearch}
          onChange={(e) => setDataSearch(e.target.value)}
          className="inputmain"
        />
        <div className="row">
          {userOutput.map((data, i) => (
            <>
              <div
                key={i}
                className="col-4 my-3 px-1"
                onClick={() => {
                  runHide(i);
                  runShow(data);
                }}>
                <div className="box_user p-3">
                  {" "}
                  <h2 className="username">
                    <b>User Name :-</b> {data.name}
                  </h2>
                  <h4 className="userid"> User Id :- {data.id}</h4>
                  <h6 className="userwork">Work :- {data.work}</h6>
                </div>
              </div>
            </>
          ))}
        </div>
        <h2>Slected</h2>
        <div className="row">
          {printfilterarr.map((data, i) => (
            <>
              <div className="col-4 my-3 px-1">
                <div className="box_user p-3">
                  {" "}
                  <h2 className="username">
                    <b>User Name :-</b> {data.name}
                  </h2>
                  <h4 className="userid"> User Id :- {data.id}</h4>
                  <h6 className="userwork">Work :- {data.work}</h6>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterData;
