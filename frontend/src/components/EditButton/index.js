import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { message, Modal } from "antd";
import SpinLoading from "../Spinner";
import UpdateInputs from "./UpdateInputs";

import "./style.css";

const EditButton = ({ vehicleId, reRender, driverList, driver }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [vehicleData, setvehicleData] = useState({
    driverId: null,
    plate: null,
    model: null,
    type: null,
    capacity: null,
  });

  const openModalVehicleInfo = async () => {
    try {
      setIsLoading(true);
      setIsOpenModal(true);
      let getVehicleInfo = await fetch(
        `http://localhost:3008/api/get_vehicle/${vehicleId}`
      );
      getVehicleInfo = await getVehicleInfo.json();

      console.log(getVehicleInfo.results);

      const { driver_id, plate, model, type, capacity } =
        getVehicleInfo.results[0];

      setvehicleData({
        driverId: driver_id,
        plate: plate,
        model: model,
        type: type,
        capacity: capacity,
      });

      setIsLoading(false);
    } catch (err) {
      message.error("Error deleting vehicle, try again!");
    }
  };

  const handleOk = () => {
    setIsOpenModal(false);
    console.log(vehicleData);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  const inputHandler = (type, value) => {
    // const inputValue = value.target.value
    console.log(type, value)
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

  return (
    <>
      <EditOutlined className="edit_button" onClick={openModalVehicleInfo} />
      <Modal
        title={`Editing Vehicle #${vehicleId}`}
        visible={isOpenModal}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        {isLoading ? (
          <SpinLoading size="large" />
        ) : (
          <UpdateInputs
            vehicleData={vehicleData}
            driver={driver}
            driverList={driverList}
            inputHandler={inputHandler}
          />
        )}
      </Modal>
    </>
  );
};

export default EditButton;
