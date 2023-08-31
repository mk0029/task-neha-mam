import React, { useState } from "react";

const MapFilterV2 = () => {
  const [users, setUsers] = useState([
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

  const [userslect, setUserslect] = useState([]);
  const [dataSearch, setDataSearch] = useState("");

  const handleUserClick = (data) => {
    setUserslect((prevuserslect) => [...prevuserslect, data]);
    setDataSearch("");
  };

  const hideTable = (Myind) => {
    setUserslect(userslect.filter((myvalue, i) => i !== Myind));
  };

  const userOutput = users.filter(
    (el, i) =>
      !userslect.some((e) => e.id === el.id) && el.name.includes(dataSearch)
  );

  return (
    <section>
      <div className=" container">
        {" "}
        <div className=" position-relative z-3">
          <input
            id="UserSlect"
            className="d-flex align-items-center mt-3 timerbox py-2 bg-light border-1 px-2 rounded-3 w-100"
            type="search"
            value={dataSearch}
            onChange={(e) => setDataSearch(e.target.value)}
            placeholder="Content@example.com"
            style={{ outline: "none" }}
          />
          <div className="row">
            {userOutput.map((data, i) => (
              <div
                key={i}
                className="col-4 my-3 px-1"
                onClick={() => {
                  handleUserClick(data);
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
            ))}
          </div>
        </div>
        <div className="row">
          {userslect.map((data, i) => (
            <>
              <div
                key={i}
                className="col-4 my-3 px-1"
                onClick={() => {
                  hideTable(i);
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
      </div>
    </section>
  );
};

export default MapFilterV2;
