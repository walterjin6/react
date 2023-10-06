import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Asia = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Asia</title>
        <meta name="description" content="Looking for academic jobs in Asia? Browse our listings of Asia university jobs and find your next career opportunity in this diverse and dynamic region." />
        <meta name="keywords" content="Academic Jobs Asia. Asia university jobs, academic jobs in Asia, AcademicJobs" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl">Academic Jobs Asia</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">Academic Jobs Asia has jobs from the best universities, colleges, research institutes, and organizations in Asia. You can browse through hundreds of listings from different countries and regions, such as China, Japan, Korea, India, Singapore, Malaysia, Thailand, Vietnam, Indonesia, and more. You can also filter your search by discipline, level, type, and duration of the position.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">University Jobs For All Asian Countries</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/singapore/" className='text-[#f4a10c] font-bold'>Singapore</Link></li>
            <li><Link to="/employer/nanyang-technological-university-singapore/3152/">Nanyang
              Technological University</Link></li>
            <li><Link to="/employer/national-university-of-singapore/3137/">National University of Singapore</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/malaysia/" className='text-[#f4a10c] font-bold'>Malaysia</Link></li>
            <li><Link to="/employer/universiti-ualaya/12499/">Universiti Malaya (UM)</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/china/" className='text-[#f4a10c] font-bold'>China</Link></li>
            <li><Link to="/employer/peking-university/3133/">Peking
              University</Link></li>
            <li><Link to="/employer/tsinghua-university/3840/">Tsinghua University</Link></li>
            <li><Link to="/employer/fudan-university/7289/">Fudan University</Link></li>
            <li><Link to="/employer/shanghai-jiao-tong-university/6876/">Shanghai Jiao Tong University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/japan/" className='text-[#f4a10c] font-bold'>Japan</Link></li>
            <li><Link to="/employer/university-of-tokyo/3155/">University of Tokyo</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/indonesia/" className='text-[#f4a10c] font-bold'>Indonesia</Link></li>
            <li><Link to="/employer/the-university-of-indonesia/12068/">The University of Indonesia</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/thailand/" className='text-[#f4a10c] font-bold'>Thailand</Link></li>
            <li><Link to="/employer/chulalongkorn-university/6615/">Chulalongkorn University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/hong-kong/" className='text-[#f4a10c] font-bold'>Hong Kong</Link></li>
            <li><Link to="/employer/university-of-hong-kong/3148/">University of Hong Kong</Link>
            </li>
            <li><Link to="/employer/chinese-university-of-hong-kong/3161/">Chinese University of
              Hong Kong</Link></li>
            <li><Link to="/employer/the-hong-kong-university-of-science-and-technology/3843/">The Hong Kong University of Science and Technology</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/south-korea/" className='text-[#f4a10c] font-bold'>South Korea</Link></li>
            <li><Link to="/employer/seoul-national-university/10119/">Seoul National University</Link></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Asia