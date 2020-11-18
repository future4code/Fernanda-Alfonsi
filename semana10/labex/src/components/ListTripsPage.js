import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { useRequestData } from "../hooks/useRequestData";




const ContainerList= styled.div`
  display:flex;
  justify-content:space-around;
  bottom: 0;
  width:100vw;
  height:100vh;
 
`


const Card = styled.div`
  
 width:200px;
 margin:1em;
 border:solid 2px;
 padding:1em;
 background-color: black;
 p,h4{
   color:white;
 }
 
`

function ListTripsPage() {
  
  const getSpaceTrip=useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips", undefined
    
  );
  console.log(getSpaceTrip)
  const history=useHistory()

  // useEffect(()=>{
  //   getSpaceTrip
  // },[])

  // const goToLogin=()=>{
  //   history.push('/login')
  // } 

  
  
    const list= getSpaceTrip && getSpaceTrip.trips.map((trip,i) =>{
      return (< Card>
         <img src={`https://picsum.photos/200/200?a=${i}]`}/>
          {/* <p>{trip.id}</p> */}
          <h4>{ trip.name}</h4>
          <p>{ trip.description}</p>
          <p>planeta: {trip.planet}</p>
          <p>duração: {trip.durationInDays}</p>
          <p>Data: {trip.date}</p>
        
      </ Card>
      );

    })

    return(<ContainerList>
      {list}
    </ContainerList>

    );
  
}

export default ListTripsPage;
