import { useState } from 'react'
import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import SpinLoading from "../Spinner";

import "./style.css";

const DeleteButton = ({ id, reRender }) => {
  const [ isDeleting, setIsDeleting ] = useState(false)

  const confirm = async () => {
    try{
      setIsDeleting(true)
      await fetch(`http://localhost:3008/api/delete_vehicle/${id}`, {
          method: "delete"
      });
      message.success("Vehicle deleted successfully!")
      reRender()
      setIsDeleting(false)
      
    }catch(err){
      message.error("Error deleting vehicle, try again!")

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
