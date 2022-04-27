import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { message, Modal, Button } from "antd";
import SpinLoading from "../Spinner";
import AddInputs from "./AddInputs";

import "./style.css";

const AddButton = ({ driverData, reRender }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [vehicleData, setvehicleData] = useState({
    plate: "",
    model: "",
    type: "",
    capacity: "",
  });

  const handleCancel = () => {
    setIsOpenModal(false);
  };
  
  const openModal = () => {
    setIsOpenModal(true);
  };

  const inputHandler = (type, value) => {
    switch (type) {
      case "driver":
        setvehicleData({...vehicleData, driverId: value })
        break;
      case "plate":
        setvehicleData({...vehicleData, plate: value })
        break;
      case "model":
        setvehicleData({...vehicleData, model: value })
        break;
      case "type":
        setvehicleData({...vehicleData, type: value })
        break;
      case "capacity":
        setvehicleData({...vehicleData, capacity: value })
        break;

      default:
        break;
    }
  };

  const createVehicle = async () => {
    console.log(vehicleData)
    try {
      setIsLoading(true);
      await fetch(`http://localhost:3008/api/create_vehicle/${driverData.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicleData,
        }),

    });


     
      setIsLoading(false);
      message.success("Vehicle created successfully!");
      setIsOpenModal(false);
      reRender()
    } catch (err) {
      message.error("Error updating vehicle, try again!");
      setIsLoading(false);
    }
  };



  return (
    <>
      <Button onClick={openModal}>New Vehicle</Button>
      <Modal
        title={`New Vehicle for ${driverData.first_name} ${driverData.last_name} `}
        visible={isOpenModal}
        onOk={createVehicle}
        onCancel={handleCancel}
        destroyOnClose
      >
        {isLoading ? (
          <div className="center-update-spinner">
          <SpinLoading size="large" />
          </div>
        ) : (
          <AddInputs
            vehicleData={vehicleData}
            driver={driverData}
            inputHandler={inputHandler}
          />
        )}
      </Modal>
    </>
  );
};

export default AddButton;
