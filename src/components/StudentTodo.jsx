import React, { useState } from "react";
import CustomNav from "./CustomNav";

const StudentTodo = () => {
  const studentDataProvider = { name: "", class: "", age: "" };
  const [studentData, setStudentData] = useState(studentDataProvider);
  const [printStudentData, setPrintStudentData] = useState([]);
  const [SearchedData, setSearchedData] = useState("");

  const saveNewData = (e) => {
    e.preventDefault();
    if (
      studentData.name.trim() !== "" &&
      studentData.age.trim() !== "" &&
      studentData.class.trim() !== ""
    ) {
      setStudentData(studentDataProvider);
      setPrintStudentData([
        ...printStudentData,
        {
          newStudentName: studentData.name,
          newStudentAge: studentData.age,
          newStudentClass: studentData.class,
        },
      ]);
    }
  };
  const studentDataOutPut = printStudentData.filter(
    (studentSearch) =>
      studentSearch.newStudentName
        .toLowerCase()
        .includes(SearchedData.toLowerCase()) ||
      studentSearch.newStudentClass
        .toLowerCase()
        .includes(SearchedData.toLowerCase())
  );
  const HideStudentInfo = (i) => {
    setPrintStudentData(printStudentData.filter((data, e) => e !== i));
  };
  return (
    <>
      {" "}
      <CustomNav />{" "}
      <section>
        <div className=" container">
          <form onSubmit={saveNewData} action="" className=" my-4">
            <div className="row justify-content-center">
              <div className="my-2 px-2 col-8 mx-1">
                <input
                  className="w-100 border-2 px-3 py-2 border-black rounded-3"
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Name"
                  onChange={(e) =>
                    setStudentData({ ...studentData, name: e.target.value })
                  }
                  value={studentData.name}
                />
              </div>
              <div className="my-2 px-2 col-4">
                <input
                  className="w-100 border-2 px-3 py-2 border-black rounded-3"
                  type="number"
                  name="Age"
                  min="9"
                  max="25"
                  id="Age"
                  placeholder="Age"
                  onChange={(e) =>
                    setStudentData({ ...studentData, age: e.target.value })
                  }
                  value={studentData.age}
                />
              </div>
              <div className="my-2 px-2 col-4">
                <input
                  className="w-100 border-2 px-3 py-2 border-black rounded-3"
                  type="number"
                  name="Studentclass"
                  id="Studentclass"
                  min="5"
                  max="12"
                  placeholder="class"
                  onChange={(e) =>
                    setStudentData({ ...studentData, class: e.target.value })
                  }
                  value={studentData.class}
                />
              </div>{" "}
              <div className="text-center">
                {" "}
                <button
                  className=" btn btn-secondary px-3 py-2 mt-2"
                  type="submit">
                  Submit Data
                </button>
              </div>
              <div className="col-8 mt-5">
                {" "}
                <input
                  type="text"
                  className="w-100 border-2 px-3 py-2 border-black rounded-3"
                  value={SearchedData}
                  placeholder="Search Student By Name/Class"
                  onChange={(e) => setSearchedData(e.target.value)}
                />
              </div>
            </div>
          </form>

          {studentDataOutPut.length > 0 && (
            <table className="">
              <tr>
                <th className="text-center py-3">
                  <h2 className="mb-2">Name</h2>
                </th>
                <th className="text-center py-3">
                  <h2 className="mb-2">Class</h2>
                </th>
                <th className="text-center py-3">
                  <h2 className="mb-2">Age</h2>
                </th>
              </tr>
              {studentDataOutPut.map((data, i) => {
                return (
                  <tr className=" position-relative">
                    <td
                      className="text-center py-3"
                      style={{ width: "33.333%" }}>
                      <h4 className="mb-2 text-capitalize">
                        {" "}
                        {data.newStudentName}
                      </h4>{" "}
                    </td>
                    <td
                      style={{ width: "33.3333333%" }}
                      className="justify-content-between text-center py-3">
                      <h4 className="mb-2">{data.newStudentClass}</h4>
                    </td>
                    <td
                      className="text-center py-3"
                      style={{ width: "33.33333333%" }}>
                      <h4 className="mb-2"> {data.newStudentAge}</h4>
                    </td>
                    <td className="text-center py-3 position-absolute end-0">
                      <button
                        onClick={() => HideStudentInfo(i)}
                        className=" btn btn-secondary ">
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default StudentTodo;
