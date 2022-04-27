import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import "./style.css";

const DeleteButton = ({ id }) => {
  const confirm = () => {
    console.log(id);
  };

  return (
    <>
      <Popconfirm
        title="Are you sure to delete this vehicle?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined className="delete_button" />
      </Popconfirm>
    </>
  );
};

export default DeleteButton;
