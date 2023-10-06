import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const NewZealand = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs New Zealand</title>
        <meta name="description" content="Find your dream academic job in New Zealand and join the leading universities at New Zealand university jobs with professor, researcher or manager roles." />
        <meta name="keywords" content="Academic Jobs New Zealand. academic job in New Zealand, New Zealand university jobs" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl ">Academic Jobs New Zealand</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">New Zealand is a beautiful and diverse country that offers a high quality of life and a supportive academic environment. Whether you are looking for teaching, research, or leadership positions, you can find a range of academic jobs in New Zealand that match your skills and interests. You can browse through hundreds of academic jobs in New Zealand on this page, covering various fields and disciplines such as education, science, arts, business, and more.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">AcademicJobs New Zealand: All University Jobs by Region</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>North Island</Link></li>
            <li><Link to="/employer/the-university-of-auckland/3809/">The
              University of Auckland</Link></li>
            <li><Link to="/employer/victoria-university-of-wellington/3807/">Victoria
              University of Wellington</Link></li>
            <li><Link to="/employer/waikato-university/3806/">Waikato
              University</Link>
            </li>
            <li><Link to="/employer/auckland-university-of-technology/3804/">Auckland
              University of Technology (AUT)</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>South Island</Link></li>
            <li><Link to="/employer/university-of-otago/3805/">University of
              Otago</Link>
            </li>
            <li><Link to="/employer/lincoln-university/3808/">Lincoln
              University</Link>
            </li>
            <li><Link to="/employer/massey-university/3810/">Massey University</Link>
            </li>
            <li><Link to="/employer/university-of-canterbury/3811/">University of
              Canterbury</Link></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default NewZealand