import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Form, Input, message, Modal, Row, Table, Tag } from "antd";

const TableData = () => {
  const [form] = Form.useForm();
  const [currentData, setCurrentData] = useState([]);
  const [singlePersonData, setSinglePersonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isvisible, setIsvisible] = useState(false);
  console.log("singlePersonData", singlePersonData);
  console.log("currentData", currentData);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setCurrentData(res?.data);
        setLoading(false);
      })
      .catch((err) => console.log("err", err));
  };

  const getSingleData = (id) => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log("res", res?.data);
        setIsvisible(true);
        const userData = { ...res?.data };
        form.setFieldsValue({
          name: userData?.name,
          userName: userData?.username,
          email: userData?.email,
          phone: userData?.phone,
          company: userData?.company?.name,
          website: userData?.website,
        });
        setLoading(false);
      });
  };
  const updateUser = (data) => {
    axios.put("https://reqres.in/api/users", data).then((response) => {
      if (response.status === 200) {
        message.success("user updated successfully");
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone no.",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Website",
      key: "website",
      dataIndex: "website",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <a
          onClick={() => {
            console.log("record", record);
            getSingleData(record?.id);
          }}
        >
          Edit
        </a>
      ),
    },
  ];
  return (
    <div className="m-20 text-red-600 ">
      hello this is example
      <Table
        // style={{ width: "80%" }}
        columns={columns}
        loading={loading}
        dataSource={currentData}
      />
      {/* hihi */}
      <Modal
        title="Edit User"
        visible={isvisible}
        centered
        okText="Update"
        onOk={() => form.submit()}
        onCancel={() => setIsvisible(false)}
      >
        <Form form={form} onFinish={(values) => updateUser(values)}>
          <Row gutter={[24, 12]}>
            <Col xl={12} lg={12} md={12} sm={24}>
              <p className="m-0 capitalize font-medium">name</p>
              <Form.Item name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24}>
              <p className="m-0 capitalize font-medium">userName</p>
              <Form.Item name="userName">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24}>
              <p className="m-0 capitalize font-medium">email</p>
              <Form.Item name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24}>
              <p className="m-0 capitalize font-medium">phone</p>
              <Form.Item name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24}>
              <p className="m-0 capitalize font-medium">company</p>
              <Form.Item name="company">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24}>
              <p className="m-0 capitalize font-medium">website</p>
              <Form.Item name="website">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default TableData;
