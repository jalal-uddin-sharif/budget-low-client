import React, { useState } from "react";
import Nav from "../component/Nav";

const Home = () => {
    const [price, setPrice] = useState(0)
    const handlePrice = (e) =>{
        setPrice(e.target.value)
    }
  return (
    <div className="container mx-auto">
      {/* search box */}
      <div className="flex gap-4 justify-center mt-16">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-secondary">Search</button>
      </div>

      {/* filter box */}
      <div className="flex items-center gap-6 mt-10">
        <div className="w-full flex">
   <div className="w-full">
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              What is the best TV show?
            </option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>

        <div className="w-full">
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              What is the best TV show?
            </option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
        </div>
     
        <div className="w-full">
            <h1>Price: {price} </h1>
            <input onChange={(e)=>setPrice(e.target.value)}  type="range" min={0} max="100" value={price} className="range range-error" />
        </div>

      </div>
        <div className="w-full flex justify-center mt-8 ">
            <button className="btn btn-accent btn-wide">Filter</button>
        </div>
    </div>
  );
};

export default Home;
