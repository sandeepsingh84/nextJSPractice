import React, { useState } from "react";
import { Segmented } from "antd";

const SegmenPractice = () => {
  // const [value, setValue] = useState("Map");
  return (
    <>
      <Segmented
        options={["Map", "Transit", "Satellite"]}
        // value={value}
        // onChange={setValue}
      />
    </>
  );
};

export default SegmenPractice;
