import { useState, useEffect } from "react";
import SpinLoading from "../Spinner";
import ResultMessage from "../Result";
import DeleteButton from '../DeleteButton'
import { Collapse, Button, List } from "antd";
import "./index.css";
import { CarOutlined } from "@ant-design/icons";

function ShowPage() {
  const [driverList, setDriverList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedItems, setLoadedItems] = useState(15);

  const { Panel } = Collapse;

  const getListVehiclesData = async (visitorId) => {
    setIsLoading(true);
    try {
      let listOfVehicles = await fetch("http://localhost:3006/api/");
      listOfVehicles = await listOfVehicles.json();

      console.log(listOfVehicles.results);
      setDriverList(listOfVehicles.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setDriverList("error");
    }
  };

  useEffect(() => {
    getListVehiclesData();
  }, []);

  const moreItems = () => {
    setLoadedItems(loadedItems + 15);
  };
  

  return (
    <>
      {isLoading && <div className="center-container"><SpinLoading size="large" /></div>}
      {!isLoading && driverList === "error" && <ResultMessage type="error" />}
      {!isLoading && driverList.length && (
        <div className="container">
          {driverList.map((driver, idx) => {
            let vehicles = JSON.parse(driver.vehicles);
            if (idx <= loadedItems) {
              return (
                <Collapse className="collapse_container">
                  <Panel
                    header={
                      <p className="header_panel">
                        {driver.first_name} {driver.last_name} {"   "}{" "}
                        <CarOutlined /> {"   "} Vehicles: {vehicles.length}
                      </p>
                    }
                    key="1"
                  >
                    {vehicles && vehicles.length ? <>
                      <List
                      className="demo-loadmore-list"
                      itemLayout="horizontal"
                      dataSource={vehicles}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <DeleteButton id={item.vehicle_id} reRender={getListVehiclesData} />,
                            <a key="list-loadmore-more">more</a>,
                          ]}
                        >
                          <p><strong>ID: </strong>{item.vehicle_id}{"  "} <strong>Plate: </strong>{item.plate}</p>
                        </List.Item>
                      )}
                    />
                    </> : <ResultMessage type="warning" />}

                    <Button>New Vehicle</Button>
                  </Panel>
                </Collapse>
              );
            }
          })}
          <div className="button_container">
            <Button onClick={moreItems}> More Drivers </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowPage;
