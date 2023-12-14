import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";

const App = () => {
  return (
    <div className="w-screen h-auto bg-[#35155D]">

      const [courses, setCourses] = useState([]);

      useEffect(() => {

      const fetchCourses = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCourses();
  }, []);



      <Navbar/>

      <Filter filterData={filterData} />

      <Cards/>

    </div>
  );
};

export default App;
