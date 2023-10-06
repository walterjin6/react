import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const SouthAmerica = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs South America</title>
        <meta name="description" content="Find your dream academic job in South America and join the leading universities at South America university jobs with professor, researcher or manager roles." />
        <meta name="keywords" content="Academic Jobs South America. academic job in  South America ,  South America  university jobs" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl">Academic Jobs South America</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">If you are interested in finding your dream job in South America, you can browse through our listings of teaching and education jobs1, science jobs, and university and academic jobs. You can also filter by location, discipline, and salary to narrow down your search. Don’t miss this chance to explore the academic opportunities in South America!</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">AcademicJobs South America: All University Jobs by Country </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/brazil/" className='text-[#f4a10c] font-bold'>Brazil</Link></li>
            <li><Link to="/employer/university-of-sao-paulo/11463/">University of São Paulo</Link>
            </li>
            <li><Link to="/employer/university-of-campinas/11490/">University of Campinas</Link>
            </li>

            <li><Link to="/employer/universidade-federal-do-rio-grande-do-sul/11544/">Universidade Federal do Rio Grande do Sul</Link>
            </li>

            <li><Link to="/employer/universidade-federal-de-são-paulo/11526/">Universidade Federal de São Paulo (UNIFESP)</Link>
            </li>



          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/argentina/" className='text-[#f4a10c] font-bold'>Argentina</Link></li>
            <li><Link to="/employer/universidad-de-buenos-aires/11196/">Universidad de Buenos
              Aires</Link>
            </li>

            <li className='mb-1 '><Link to="/find-jobs/colombia/" className='text-[#f4a10c] font-bold'>Colombia</Link></li>
            <li><Link to="/employer/universidad-de-los-andes/11308/">Universidad de los
              Andes</Link></li>

            <li><Link to="/employer/icesi-university/11648/">Icesi University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/chile/" className='text-[#f4a10c] font-bold'>Chile</Link></li>
            <li><Link to="/employer/pontificia-universidad-catolica-de-chile/9739/">Pontificia Universidad
              Catolica de Chile</Link></li>
            <li><Link to="/employer/universidad-alberto-hurtado/11012/">Universidad Alberto
              Hurtado</Link>
            </li>
            <li><Link to="/employer/universidad-de-santiago-de-chile/11384/">Universidad de
              Santiago de Chile</Link></li>
            <li><Link to="/employer/university-of-antofagasta/11189/">University of Antofagasta</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/peru/" className='text-[#f4a10c] font-bold'>Peru</Link></li>
            <li><Link to="/employer/universidad-alas-peruanas/11010/">Universidad Alas
              Peruanas</Link>
            </li>
            <li><Link to="/employer/universidad-peruana-cayetano-heredia/11856/">Universidad Peruana Cayetano Heredia</Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
export default SouthAmerica