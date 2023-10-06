import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";


const SearchBox = () => {
  const region = useSelector((state) => state.posts.region)
  //alert(region)
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()

    if (region) {
      a.l = countryMappings1[region].searchLocation
      console.log(a)
      //dispatch(setSearchJobCriteria(a))
      //navigate(`/find-jobs`)
      //alert(region)
      navigate("/find-jobs", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[region].searchLocation } });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66");
          const result = await response.json();
          return result.country.name
        } catch (error) {
          return ""
        }
      }
      fetchLocation1()
        .then(country => {
          sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]))
          a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          console.log(a)
          //dispatch(setSearchJobCriteria(a)) 
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate("/find-jobs", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[sessionStorage.getItem("location")].searchLocation } });
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  };
  return (
    <div>
      <div className="bg-white min-h-screen flex flex-col items-center  justify-center ">
        <div className='h-[40vh] flex flex-col items-end justify-end'>
          <img
            src="https://academicjobs.s3.amazonaws.com/img/_misc/ScienceJobsLogo.png"
            alt="Google Logo"
            className="w-[20rem] mb-[1rem] "
          />
        </div>
        <div className='w-3/5 h-[60vh] flex flex-col items-top '>
          <form className=' flex flex-col  items-end w-full' onSubmit={handleFormSubmit}>
            <div className="w-full flex mt-5 border rounded-lg p-2 shadow-md mr-12 md:mr-0">
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none"
                placeholder="Jobs Search"
                ref={keyWordRef}
              />
              <button className="px-4 py-2 bg-[#f4a10c] text-white rounded-md hover:bg-orange-600"
                type="submit"
              >
                Search
              </button>
            </div>
          </form >
        </div>
      </div>
    </div>
  )
}
export default SearchBox