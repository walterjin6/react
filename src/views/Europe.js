import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Europe = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Europe</title>
        <meta name="description" content="Find your ideal academic job in Europe and join the vibrant academic community at Europe university jobs such teaching, research or innovative opportunities." />
        <meta name="keywords" content="Academic Jobs Europe. academic jobs in Europe, Europe University Jobs" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl">Academic Jobs Europe</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">Academic Jobs board is a platform that connects academic universities, institutions and organizations with qualified candidates across Europe. You can browse through hundreds of University Jobs in various disciplines. Whether you are looking for a permanent or a temporary position, a full-time or a part-time role, our academic job board can help you find your dream job in Europe.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">AcademicJobs Europe: All Academic Positions by university  </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/france/" className='text-[#f4a10c] font-bold'>France</Link></li>
            <li><Link to="/employer/paris-sciences-et-lettres/3163/">Paris

              Sciences et Lettres</Link></li>
            <li><Link to="/employer/ecole-polytechnique/3158/">Ecole Polytechnique</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/sweden/" className='text-[#f4a10c] font-bold'>Sweden</Link></li>
            <li><Link to="/employer/karolinska-institute/3165/">Karolinska Institute</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/germany/" className='text-[#f4a10c] font-bold'>Germany</Link></li>
            <li><Link to="/employer/heidelberg-university/3160/">Heidelberg
              University</Link></li>
            <li><Link to="/employer/lmu-munich-ludwig-maximilians-universitat/3150/">LMU
              Munich (Ludwig Maximilians Universität München)</Link></li>
            <li><Link to="/employer/technische-uiniversitat-munchen/10702/">Technische Universität München</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/denmark/" className='text-[#f4a10c] font-bold'>Denmark</Link></li>
            <li><Link to="/employer/the-university-of-copenhagen/3156/">University of
              Copenhagen</Link>
            </li>
            <li className='mb-1 '><Link to="/find-jobs/switzerland/" className='text-[#f4a10c] font-bold'>Switzerland</Link></li>
            <li><Link to="/employer/eth-zurich/3132/">ETH
              Zurich</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/belgium/" className='text-[#f4a10c] font-bold'>Belgium</Link></li>
            <li><Link to="/employer/ku-leuven/3159/">KU Leuven</Link></li>
          </ul>


          <ul>
            <li className='mb-1 '><Link to="/find-jobs/netherlands/" className='text-[#f4a10c] font-bold'>Netherlands</Link></li>
            <li><Link to="/employer/delft-university-of-technology/3847/">Delft University of Technology</Link>
            </li>
            <li className='mb-1 '><Link to="/find-jobs/italy/" className='text-[#f4a10c] font-bold'>Italy</Link></li>
            <li><Link to="/employer/University-of-Bologna/12015/">University of Bologna</Link></li>

            <li className='mb-1 '><Link to="/find-jobs/spain/" className='text-[#f4a10c] font-bold'>Spain</Link></li>
            <li><Link to="/employer/universitat-de-barcelona/12195/">Universitat de Barcelona</Link></li>

          </ul>

        </div>
      </div>
    </div>
      </div>
    </div>
  )
}
export default Europe