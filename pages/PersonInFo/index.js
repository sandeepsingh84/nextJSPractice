import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {} from "antd";
const PersonInFo = () => {
  const [current, setCurrent] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  // console.log("singleUser", singleUser);
  console.log("current", current);
  const getData = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setCurrent(response?.data))
      .catch((error) => console.log("error", error));
  };

  const getSingleUser = (id) => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then(
        (res) => console.log("res", res)
        //  setSingleUser(res?.data)
      )
      .catch((err) => console.log("err", err));
  };
  useEffect(() => {
    getData();
    getSingleUser();
  }, []);

  return <div>PersonInFo</div>;
};

export default PersonInFo;
