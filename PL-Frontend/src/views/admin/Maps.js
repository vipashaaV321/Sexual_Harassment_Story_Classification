import React, { useState } from "react";
import "../../style.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
function App(props) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [add, setAdd] = useState(null);
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    // console.log(position.coords);

    setLat(position.coords.latitude.toFixed(5));
    setLong(position.coords.longitude.toFixed(5));
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
  // var latlon = position.coords.latitude + "," + position.coords.longitude;

  return (
    <>
 




          <button
            type="button"
            className="get-started text-white font-bold px-4 py-3 m-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            style={{ borderRadius: "30px" }}
            onClick={getLocation}
         
          >
           Submit your realtime location
          </button>
          <div id="demo" class="collapse">
            <div class="card pt-5">
              <h3 className="text-black">Latitude: {lat}</h3>
              <h3 className="text-black">Longitude: {long}</h3>
              <div class="row my-md-5 py-md-4 p-3">
                <div class="col-md-10 mx-auto">
                  <div
                    id="map-within-card"
                    class="map-container"
                    style={{ height: "200px" }}
                  >
                    {lat && long ? (
                      <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={{
                          lat: lat,
                          lng: long
                        }}
                      >
                        <Marker name={"This is test name"} />
                      </Map>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
export default GoogleApiWrapper({
  apiKey: process.env.API
})(App);