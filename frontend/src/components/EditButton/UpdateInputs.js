import {Input, Select } from "antd";
import './style.css';

const UpdateInputs = ({vehicleData, driver, driverList, inputHandler}) => {

    const { Option } = Select;


    return  (
        <>
         <div className="input-container">
                <label className="input-width label-color">Plate</label>
                <Input className="input-width" value={vehicleData.plate} onChange={(e)=> inputHandler('plate', e.target.value )} />
                <label className="input-width label-color">Driver</label>
                <Select
                  defaultValue={driver}
                  className="input-width"
                  onChange={(e)=> inputHandler('driver', e )}
                >
                  {driverList.map((driver)=>(
                    <Option key={driver.id} value={driver.id} >{driver.first_name} {driver.last_name}</Option>
                  ))}
                  </Select>
                <label className="input-width label-color">Model</label>
                <Input className="input-width" value={vehicleData.model} onChange={(e)=> inputHandler('model', e.target.value )} />
                <label className="input-width label-color">Type</label>
                <Input className="input-width" value={vehicleData.type} onChange={(e)=> inputHandler('type', e.target.value )} />
                <label className="input-width label-color">Capacity</label>
                <Input className="input-width" value={vehicleData.capacity} onChange={(e)=> inputHandler('capacity', e.target.value )} />
              </div>
        </>
      );
}



export default UpdateInputs;
