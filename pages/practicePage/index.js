import React from "react";
import Link from "next/link";
import { Popover, Button, Tooltip, Breadcrumb, Menu } from "antd";
const practicePage = () => {
  const content = (
    <div>
      <p>Content11</p>
      <p>Content22</p>
    </div>
  );

  const menu = (
    <div>hello</div>
    // <Menu
    //   items={[
    //     {
    //       label: (
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="http://www.alipay.com/"
    //         >
    //           home
    //         </a>
    //       ),
    //     },
    //     {
    //       label: (
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="https://www.w3schools.com/"
    //         >
    //           Layout
    //         </a>
    //       ),
    //     },
    //     {
    //       label: (
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="http://www.tmall.com/"
    //         >
    //           Navigation
    //         </a>
    //       ),
    //     },
    //   ]}
    // />
  );
  return (
    <div>
      <div>
        <Link href="/">go to home</Link>
      </div>
      <br />
      <div>
        <Popover content={content}>
          <Button type="primary">Hover me</Button>
        </Popover>
      </div>
      <br />
      <div>
        <Tooltip placement="topLeft" title="submit">
          <Button>submit</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="cancel" arrowPointAtCenter>
          <Button>cancel</Button>
        </Tooltip>
      </div>
      <br />
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="https://www.w3schools.com/">Component</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>
            <a href="">General</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default practicePage;
