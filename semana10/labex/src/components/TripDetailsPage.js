import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectPage";
// import { useRequestData } from "../hooks/useRequestData";
// import { useHistory } from 'react-router-dom';

function TripDetailsPage() {

  const [trip, setTrip] = useState({});
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  // const getTripDetail = useRequestData(
  // `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips/${trip.id}`, {
  //             headers: {
  //               auth: localStorage.getItem("token")
  //             }
  //           }
  //         , {}
    
  // );

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trip/23NWMUmXuggc19S86QbB`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
        console.log( res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Trip Detail</p>
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
    </div>
  );
}


export default TripDetailsPage;
