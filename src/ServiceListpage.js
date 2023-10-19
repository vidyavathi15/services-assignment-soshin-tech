
import React, { useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


const ServiceListpage = () => {
    const [serviceDetailsList, setServiceDetailsList] =  useState([])
    console.log("lll", serviceDetailsList)

   let navigation = useNavigate()


   const getServiceDetails = async () => {
    try {
      const response = await axios.get("http://localhost:6000/api/services");
      
      if (response.status !== 200) {
        throw new Error(`Failed to fetch services List. Status: ${response.status}`);
      }
      
      console.log("resul++++", response.data);
      setServiceDetailsList(response.data);
    } catch (error) {
      console.error("Error fetching service List:", error);
    }
  };
    

    useEffect(() => {
        getServiceDetails()
     
    }, [])

    const navigateToDetailsPage= () =>{

        navigation.push("/ServiceDetailsPage")

    }
    
  return (
    <div>
        
        
        <h1>ServiceListpage</h1>

        {serviceDetailsList.map((each, index) => (
            <div key={index} onClick={() =>navigateToDetailsPage(each.id)}>
                <h1>{each.id} :{each.name}</h1>
                </div>
        ))}
        
        </div>
  )
}

export default ServiceListpage