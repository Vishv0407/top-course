import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      setCourses(responseData.data);

    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="container">
      <div className="aa">
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} ></Filter>
      </div>
      <div className="main-data">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} ></Cards>)
        }

      </div>
    </div>
  )
};

export default App;
