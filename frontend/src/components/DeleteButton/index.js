import { useState } from 'react'
import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import SpinLoading from "../Spinner";

import "./style.css";

const DeleteButton = ({ id, reRender }) => {
  const [ isDeleting, isSetDeleting ] = useState(false)

  const confirm = async () => {
    try{
      isSetDeleting(true)
      await fetch(`http://localhost:3006/api/delete_vehicle/${id}`, {
          method: "delete"
      });
      message.success("Vehicle deleted successfully!")
      reRender()
      isSetDeleting(false)

    }catch(err){

    }
  };

  return (
    <>
      {isDeleting ? <SpinLoading size="small" />  : <Popconfirm
        title="Are you sure to delete this vehicle?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined className="delete_button" />
      </Popconfirm>}
    </>
  );
};

export default DeleteButton;
