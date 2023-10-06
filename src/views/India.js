import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const India = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs India</title>
        <meta name="description" content="Discover academic jobs in India and apply to the top universities and institutions at India university jobs. like lecturer, researcher or a administrator role." />
        <meta name="keywords" content="Academic Jobs India. India university jobs, academic jobs in India, " />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl">Academic Jobs India</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">As an academic job seeker in India, you can explore various fields of study, such as engineering, technology, mathematics, statistics, economics, business, arts, humanities, social sciences, life sciences, health sciences, and more. You can also choose from different types of academic positions, such as assistant professor, associate professor, professor, lecturer, researcher, postdoctoral fellow, and more. On Academic Jobs India you can also apply for jobs in different types of institutions, such as public universities, private universities, deemed universities, institutes of national importance, central universities, state universities, and more.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">AcademicJobs India: University Jobs by State  </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/mumbai/" className='text-[#f4a10c] font-bold'>Mumbai</Link></li>
            <li><Link to="/employer/indian-institute-of-technology-bombay/3844/">Indian
              Institute of Technology Bombay</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/chennai/" className='text-[#f4a10c] font-bold'>Chennai</Link></li>
            <li><Link to="/employer/indian-institute-of-technology-madras/3845/">Indian
              Institute of Technology Madras</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/vellore/" className='text-[#f4a10c] font-bold'>Vellore</Link></li>
            <li><Link to="/employer/vellore-institute-of-technology/3846/">Vellore
              Institute of Technology</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/bangalore/" className='text-[#f4a10c] font-bold'>Bangalore</Link></li>
            <li><Link to="/employer/indian-institute-of-science/7818/">Indian
              Institute of Science (IISc)</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/delhi/" className='text-[#f4a10c] font-bold'>Delhi</Link></li>
            <li><Link to="/employer/indian-institute-of-technology-delhi/7822/">Indian
              Institute of Technology Delhi</Link></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default India