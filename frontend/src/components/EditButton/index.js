import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { message, Modal, Select, Input } from "antd";
import SpinLoading from "../Spinner";

import "./style.css";

const EditButton = ({ vehicleId, reRender, driverList, driver }) => {
  const { Option } = Select;

  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [vehicleData, setvehicleData] = useState({ driverId: null, plate: null, model: null, type: null, capacity: null });

  const editVehicle = async () => {
    try {
      setIsLoading(true);
      setIsOpenModal(true);
      let getVehicleInfo = await fetch(
        `http://localhost:3008/api/get_vehicle/${vehicleId}`
      );
      getVehicleInfo = await getVehicleInfo.json();

      console.log(getVehicleInfo.results);
      
      const { driver_id, plate, model, type, capacity } = getVehicleInfo.results[0]

      setvehicleData({ driverId: driver_id, plate: plate, model: model, type: type, capacity: capacity })

      setIsLoading(false);
    } catch (err) {
      message.error("Error deleting vehicle, try again!");
    }
  };

  const handleOk = () => {
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <EditOutlined className="edit_button" onClick={editVehicle} />
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
          <div className="input-container">
            <label className="input-width label-color">Plate</label>
            <Input className="input-width" value={vehicleData.plate} />
            <label className="input-width label-color">Driver</label>
            <Select
              defaultValue={driver}
              className="input-width"
            >
              {driverList.map((driver)=>(
                <Option value={driver.id}>{driver.first_name} {driver.last_name}</Option>
              ))}
              </Select>
            <label className="input-width label-color">Model</label>
            <Input className="input-width" value={vehicleData.model} />
            <label className="input-width label-color">Type</label>
            <Input className="input-width" value={vehicleData.type} />
            <label className="input-width label-color">Capacity</label>
            <Input className="input-width" value={vehicleData.capacity} />
          </div>
        )}
      </Modal>
    </>
  );
};

export default EditButton;
