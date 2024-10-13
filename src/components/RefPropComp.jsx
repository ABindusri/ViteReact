import React from "react";
import Photo from "../assets/photo.jpg"; //going out of components folder - ..
import RefChildComp from "./RefChildComp";
const RefPropComp = ({Bindu}) => {
     //recieved prop from parent
     const handleSentData=(data)=>{ //to get data from the child to the handleSentData function
        console.log(data);
     }
  return (
    <div className="flex ">
      <div className="flex flex-col ml-4 mt-5 border-solid border-2 bg-blue-200 p-5 w-30 h-70 shadow-md  rounded ">
        <img
          src={Photo}
          className=" border-red-400 rounded-md shadow-2xl border h-50 w-40"
          alt="bindu image"
        ></img>
        <h4 className="pt-2">{Bindu.Name}</h4> {/* Receiving prop */}
        <h6>{Bindu.Work}</h6>
        <p>₹ {Bindu.Salary}</p>
        <p>{Bindu.Age}</p>
        <RefChildComp Bindu={Bindu} sendToParent={handleSentData}/> {/* passing call back reference to the child to get data */}
      </div>
    </div>
  );
};

export default RefPropComp;
