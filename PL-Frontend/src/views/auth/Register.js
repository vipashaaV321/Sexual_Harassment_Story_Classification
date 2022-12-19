import React, { useState } from "react";
import axios from "axios";
import img from "../../assets/help.png"
import Maps from "views/admin/Maps";
export default function Register() {

  const [story, setStory] = useState('');
  const [data, setData] = useState(null);
  const [response,setResponse]=useState('');

  const handleSubmit = () => {

    const data1 = {
      story: story,
    }
    axios.post('http://localhost:5000/text-prediction', data1).then(res => {

      setResponse(res.data.data);
      console.log(res)

    }).catch(err => {
      console.log("ERROR OCCURED",err)
    });
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

              <div className="flex-auto px-4 lg:px-10 py-10 p-3">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  Tell your harassment story
                </div>
                
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Story
                    </label>
                    <input
                      type="text"
                      className="border-0 px-10 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={story}
                      onChange={e => setStory(e.target.value)}
                    />
                  </div>
                  

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit Your Stories
                    </button>

                  </div>
                  {response!==""?<>
                     <div className="text-center mt-6 border-1 p-3  bg-grey rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" style={{color:'red',border:"1px solid red"}}>
                    <h1 className="text-center m-1">Case : {response}</h1>
                    <h2 className="text-center m-1">In any kind of trouble you can call on any helpline number</h2>
                    <img src={img}  />
                    <Maps />
                  </div>
                    </>:<></>
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
