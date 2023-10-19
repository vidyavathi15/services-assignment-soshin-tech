import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {
    const [signleService,  setSignleService] = useState({})
    console.log("signle", signleService)
    const { id } = useParams()
    let navigation = useNavigate()

    const getServiceDetails= async () =>{
      try{
        const serviceRes= await fetch(`http://localhost:6000/api/services/${id}`);

        if ( !serviceRes.ok){
          throw new Error(`Failed to fetch service details. Status: ${serviceRes.status}`)

        }
        const resJson = await serviceRes.json();
        setSignleService(resJson);

      }
      catch(err){
        console.error("Error fetching service details:", err)

      }
        
    }


useEffect(() => {
 getServiceDetails()
})

const navigateToBookingPage= () =>{
  navigation.push("/BookingsPage")
}

    return (
      <div>
        <h1>Service Details Page for Service ID: {id}</h1>
        <p>{signleService.id}: {signleService.bookName}</p>
        <button type="text" onClick={navigateToBookingPage}>Book A Service</button>
        
        {/* Fetch and display details of the service with this ID */}
      </div>
    );
}

export default ServiceDetailsPage