import React from "react";
import CustomSlect from "./CustomSlect";

const PropsData = () => {
  const dataprov1 = ["red", "blue", "pink", "khaki"];
  const dataprov2 = ["14px", "16px", "18px", "20px"];
  // const dataprov3 = ["1px", "2px", "3px", "4px"];
  // const dataprov4 = ["white", "black", "red", "blue"];
  // const dataprov5 = ["option17", "option18", "option19", "option20"];
  return (
    <div>
      <CustomSlect dataN="Color" colorDrop={dataprov1} sizsDrope={dataprov2} />
      {/* <CustomSlect dataN="font size" dataprov1={dataprov2} />
      <CustomSlect dataN="border size" dataprov1={dataprov3} />
      <CustomSlect dataN="data4" dataprov1={dataprov4} />
      <CustomSlect dataN="data5" dataprov1={dataprov5} /> */}
    </div>
  );
};

export default PropsData;
