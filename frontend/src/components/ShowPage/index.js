import { useState, useEffect } from 'react'
import SpinLoading from '../Spinner'
import './index.css'

function ShowPage() {

  const [ vehicleList, setVehicleList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false);


  const getListVehiclesData = async (visitorId) => {
    setIsLoading(true)
    try{
      let listOfVehicles = await fetch("http://localhost:3001/api/");
      console.log(listOfVehicles)
      listOfVehicles = await listOfVehicles.json()
      setVehicleList(listOfVehicles.results)
      setIsLoading(false)
      
    }catch(err){
      setIsLoading(false)
      console.log(err)
    }
  };

  useEffect(() => {
    getListVehiclesData()
  }, [])



  return (
    <>
    {isLoading && <SpinLoading size="large" /> }
    {!isLoading && vehicleList.length &&  <div className="container">Hello </div>}
    </>
  );
}

export default ShowPage;
