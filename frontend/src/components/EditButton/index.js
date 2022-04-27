import { useState } from 'react'
import { EditOutlined } from "@ant-design/icons";
import { message, Modal } from "antd";
import SpinLoading from "../Spinner";

import "./style.css";

const EditButton = ({ id, reRender }) => {
  
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isOpenModal, setIsOpenModal ] = useState(false)


  const editVehicle = async () => {
    try{
      setIsLoading(true)
      setIsOpenModal(true)
      let getVehicleInfo = await fetch(`http://localhost:3007/api/get_vehicle/${id}`);
      getVehicleInfo = await getVehicleInfo.json();
      console.log(getVehicleInfo.results);

      //API ENDPOINT WORK 



      setIsLoading(false)

      // await fetch(`http://localhost:3007/api/delete_vehicle/${id}`, {
      //     method: "delete"
      // });

      // message.success("Vehicle deleted successfully!")
      // reRender()
      // setIsUpdating(false)
      
    }catch(err){
      
      message.error("Error deleting vehicle, try again!")

    }
  };

  const handleOk = () => {
    setIsOpenModal(false)

  }
  
  const handleCancel = () => {
    setIsOpenModal(false)

  }

  return (
    <>
      <EditOutlined className="edit_button" onClick={editVehicle} />
      <Modal title="Basic Modal" visible={isOpenModal} onOk={handleOk} onCancel={handleCancel}>
        {isLoading ? <SpinLoading size="large"/> : "ok"}
      </Modal>
    </>
  );
};

export default EditButton;
