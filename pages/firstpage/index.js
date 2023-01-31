import React from "react";
import Link from "next/link";
// import { Segmented } from "antd";
const index = () => {
  return (
    <div>
      welcome in home page
      <br />
      <Link href="/">home</Link>
      {/* <div>
        <Segmented
          options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
        />
      </div> */}
    </div>
  );
};

export default index;
