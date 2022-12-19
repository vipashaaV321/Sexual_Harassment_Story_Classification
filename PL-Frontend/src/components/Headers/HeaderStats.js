import React,{useState,useEffect} from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [add, setAdd] = useState(null);
  
  useEffect(() => {  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [])

  function showPosition(position) {
    console.log(position.coords);

    setLat(position.coords.latitude.toFixed(5));
    setLong(position.coords.longitude.toFixed(5));
    
    localStorage.setItem("Lat",position.coords.latitude.toFixed(5));
    localStorage.setItem("Long",position.coords.longitude.toFixed(5))
  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  // function userAdd() {
  //   fetch;
  // }
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-32 pb-32 pt-12" style={{backgroundColor:"#2E8B57"}}>
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Latitude"
                  statTitle={lat}
   
                  statIconName="fa fa-map-marker"

                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Longitude"
                  statTitle={long}
            
                  statIconName="fa fa-map-marker"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="FARM AREA"
                  statTitle="924 Ac"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
