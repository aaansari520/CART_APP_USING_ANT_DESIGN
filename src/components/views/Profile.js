import { Table } from "antd";
import React from "react";
import { connect } from "react-redux";

const Profile = ({ data }) => {
  const column = [
    { title: "Name", dataIndex: "fullName", key: "fullName" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <div>
      <Table dataSource={data} columns={column}></Table>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    data: store.profile,
  };
};

export default connect(mapStateToProps)(Profile);
