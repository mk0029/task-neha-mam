import React, { useState } from "react";
import CustomNav from "./CustomNav";

const FilterData = () => {
  const myarr = [
    {
      name: "Mohit",
      id: "10",
      work: "Front-End",
    },
    {
      name: "Manoj",
      id: "11",
      work: "Web-Flow",
    },
    {
      name: "Manoj",
      id: "12",
      work: "Web-Flow",
    },
    {
      name: "Manish",
      id: "15",
      work: "Word-press",
    },
    {
      name: "Mukesh",
      id: "19",
      work: "Back-End",
    },
    {
      name: "Pankaj",
      id: "21",
      work: "Back-End",
    },
    {
      name: "Parmish",
      id: "20",
      work: "Word-Press",
    },
    {
      name: "Pihu",
      id: "25",
      work: "Front-End",
    },
    {
      name: "Punam",
      id: "29",
      work: "Web-Flow",
    },
    {
      name: "Suraninder",
      id: "1",
      work: "Web-Flow",
    },
    {
      name: "Shubham",
      id: "09",
      work: "Back-End",
    },
    {
      name: "Sukha",
      id: "01",
      work: "web-D",
    },
    {
      name: "Sunder",
      id: "02",
      work: "web-D",
    },
  ];

  const [countSearch, setcountSearch] = useState(false);
  const [filterarr, setfilterarr] = useState(myarr);
  const [dataSearch, setDataSearch] = useState("");
  const [printfilterarr, setprintfilterarr] = useState([]);

  const runHide = (i) => {
    setfilterarr(filterarr.filter((data, index) => index !== i));
  };

  const userOutput = filterarr.filter(
    (user) =>
      (!printfilterarr.some((e) => e.id !== user.id) &&
        user.id.toLowerCase().includes(dataSearch.toLowerCase())) ||
      user.name.toLowerCase().includes(dataSearch.toLowerCase()) ||
      user.work.toLowerCase().includes(dataSearch.toLowerCase())
  );

  const runShow = (data) => {
    setprintfilterarr((prevuserslect) => [...prevuserslect, data]);
  };
  var dataCount = 0;
  var dataCountTotal = 0;
  var dataCountslected = 0;
  for (let i = 0; i < myarr.length; i++) {
    dataCountTotal++;
  }
  for (let i = 0; i < userOutput.length; i++) {
    dataCount++;
  }

  for (let i = 0; i < printfilterarr.length; i++) {
    dataCountslected++;
  }

  return (
    <>
      {" "}
      <CustomNav />{" "}
      <section>
        <div className=" container">
          <input
            id="UserSlect"
            type="search"
            value={dataSearch}
            onChange={(e) => setDataSearch(e.target.value)}
            className="inputmain"
            placeholder="Name/Id/Work"
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h6>total Persons</h6>
              <h3 className="ps-1"> {`${dataCountTotal}`}</h3>
            </div>
            <div className="d-flex align-items-center">
              <h6>in Search Result</h6>
              <h3 className="ps-1">
                {" "}
                {dataSearch !== "" ? `${dataCount}` : "0"}
              </h3>
            </div>
            <div className="d-flex align-items-center">
              <h6>Slected</h6>
              <h3 className="ps-1"> {`${dataCountslected}`}</h3>
            </div>
          </div>

          <div className="row overflow-auto mb-5" style={{ height: "170px" }}>
            {userOutput.map((data, i) => (
              <>
                <div
                  key={i}
                  className="col-4 my-3 px-1"
                  onClick={() => {
                    runHide(i);
                    runShow(data);
                  }}>
                  {console.log(i, "index")}
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
    </>
  );
};

export default FilterData;
