import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Emailjs = () => {
  emailjs.init("OigmccDLEnesfI1B9");
  const setVelueProvider = {
    userName: "",
    userContact: "",
    userEmail: "",
    usermsg: "",
  };
  const rejexEmail = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const PHONE_REGEX =
    /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const [inputValue, setinputValue] = useState(setVelueProvider);
  const inputArr = [
    {
      inputName: "Name",
      inputId: "userName",
      inputType: "text",
      inputChangedType: "text",
      inputValueTo: inputValue.userName,
    },
    {
      inputName: "Email",
      inputId: "userEmail",
      inputType: "email",
      inputChangedType: "text",
      inputValueTo: inputValue.userEmail,
    },
    {
      inputName: "Contact Number",
      inputId: "userContact",
      inputType: "number",
      inputChangedType: "text",
      inputValueTo: inputValue.userContact,
    },
    {
      textAriyaName: "Write Note",
      textAriyaId: "usermsg",
      textAriyaValueTo: inputValue.usermsg,
      hideinput: "d-none",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputValue((e) => ({
      ...e,
      [name]: value,
    }));
  };

  const Submitdata = (e) => {
    const userNameerr = document.getElementById(`${inputArr[0].inputId}`);
    const userEmailerr = document.getElementById(`${inputArr[1].inputId}`);
    const userContacterr = document.getElementById(`${inputArr[2].inputId}`);
    const usermsgerr = document.getElementById(`${inputArr[3].textAriyaId}`);

    e.preventDefault();
    if (
      inputValue.userName.trim() !== "" &&
      rejexEmail.test(inputValue.userEmail) &&
      PHONE_REGEX.test(inputValue.userContact) &&
      inputValue.usermsg.trim() !== ""
    ) {
      setinputValue(setVelueProvider);
      emailjs.send("service_n17rrhy", "template_hvzy3ws", {
        senderName: inputValue.userName,
        sandermsg: inputValue.usermsg,
        sanderContect: inputValue.userContact,
        sanderEmail: inputValue.userEmail,
      });
    } else if (inputValue.userName === "") {
      userNameerr.classList.add("errVibe");
      setTimeout(() => {
        userNameerr.classList.remove("errVibe");
      }, 1000);
    } else if (!rejexEmail.test(inputValue.userEmail)) {
      userEmailerr.classList.add("errVibe");
      setTimeout(() => {
        userEmailerr.classList.remove("errVibe");
      }, 1000);
    } else if (!PHONE_REGEX.test(inputValue.userContact)) {
      userContacterr.classList.add("errVibe");
      setTimeout(() => {
        userContacterr.classList.remove("errVibe");
      }, 1000);
    } else if (inputValue.usermsg === "") {
      usermsgerr.classList.add("errVibe");
      setTimeout(() => {
        usermsgerr.classList.remove("errVibe");
      }, 1000);
    }
  };

  return (
    <>
      <section className="min-vh-100 bg-info-subtle">
        <div className=" container">
          <form onSubmit={Submitdata} action="">
            {inputArr.map((data, i) => (
              <>
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  key={i}>
                  <div className="w-100">
                    <div className="d-flex flex-column align-items-center mt-3">
                      {data.inputId !== "usermsg" && (
                        <>
                          <label
                            className={`text-start d-block w-50 mb-2 text-black fs-5 $`}
                            for={data.inputId}>
                            {data.inputName}
                          </label>
                          <input
                            className={`Input_common p-2 rounded-3 ${data.hideinput}`}
                            type={data.inputType}
                            id={data.inputId}
                            name={data.inputId}
                            onChange={handleChange}
                            value={data.inputValueTo}
                          />
                        </>
                      )}

                      {data.textAriyaId === "usermsg" && (
                        <>
                          {" "}
                          <label
                            className=" text-start d-block w-50 mb-2 text-black fs-5"
                            for={data.textAriyaId}>
                            {data.textAriyaName}
                          </label>
                          <textarea
                            className="Input_common p-2 rounded-3"
                            rows="1"
                            id={data.textAriyaId}
                            name={data.textAriyaId}
                            onChange={handleChange}
                            value={data.textAriyaValueTo}></textarea>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="text-center mt-4">
              {" "}
              <button className=" btn btn-secondary" for="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Emailjs;
