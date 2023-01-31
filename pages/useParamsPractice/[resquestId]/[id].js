import { useRouter } from "next/router";
import React from "react";

const UsrCall = () => {
  const router = useRouter();
  console.log("router", router.pathname);
  const { id, resquestId } = router.query;
  return (
    <div>
      id:{id}
      <br />
      resId:[{resquestId}]
    </div>
  );
};

export default UsrCall;
