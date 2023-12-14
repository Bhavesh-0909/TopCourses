import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');

  const fetchCourses = async () => {

    try {
      setLoading(true);
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      setLoading(false);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="w-screen h-auto min-h-screen bg-[#35155D] overflow-x-hidden">
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      {
        loading ? (<Spinner/>) : (<Cards 
        courses={courses} 
        category={category}
        setCategory={setCategory}

        />)
      }
    </div>
  );
};

export default App;
