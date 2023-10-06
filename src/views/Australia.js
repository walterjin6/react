import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Australia = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Australia</title>
        <meta name="description" content="Discover all universities at Academic Jobs Australia today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily." />
        <meta name="keywords" content="Academic Jobs Australia. university jobs Australia, Uni jobs Australia" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl">Academic Jobs Australia </h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">Find the best Academic Jobs Australia has to offer. Whether you are a researcher, lecturer, professor, or administrator, you can find the latest opportunities in the Australian higher education sector on this page. Australian universities offer a range of disciplines and research areas, from arts and humanities to science and technology. Explore opportunities across all university jobs</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">Academic Jobs Australia: All University Jobs</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className='mb-1 '><Link to="/find-jobs/act/" className='text-[#f4a10c] font-bold'>ACT</Link></li>
              <li><Link to="/employer/australian-national-university/3739/">Australian National
                University</Link></li>
              <li><Link to="/employer/university-of-canberra/3821/">University of Canberra</Link>
              </li>
              <li className='mb-1 '><Link to="/find-jobs/new-south-wales/" className='text-[#f4a10c] font-bold'>New South Wales</Link></li>
              <li><Link class="footer-nav__link" href="/employer/the-university-of-sydney/3171/">The
                University of Sydney</Link></li>
              <li><Link to="/employer/university-of-new-south-wales/3738/">University of New
                South Wales</Link></li>
              <li><Link to="/employer/charles-sturt-university/3855/">Charles Sturt University</Link>
              </li>
              <li><Link to="/employer/australian-catholic-university/3853/" >Australian Catholic
                University</Link></li>
              <li><Link to="/employer/southern-cross-university/3862/">Southern Cross
                University</Link></li>
              <li><Link to="/employer/university-of-technology-sydney/3864/">University of
                Technology, Sydney</Link></li>
              <li><Link to="/employer/macquarie-university/3881/">Macquarie
                University</Link>
              </li>
              <li><Link to="/employer/university-of-new-england/3209/">University of New England
                England</Link></li>
              <li><Link to="/employer/university-of-newcastle/3863/">University of Newcastle</Link>
              </li>
              <li><Link to="/employer/university-of-western-sydney/3865/">University of Western
                Sydney</Link></li>
              <li><Link to="/employer/university-of-wollongong/3866/">University of Wollongong</Link>
              </li>
            </ul>
            <ul>
              <li className='mb-1 '><Link to="/find-jobs/victoria/" className='text-[#f4a10c] font-bold'>Victoria</Link></li>
              <li><Link to="/employer/university-of-melbourne/3170/
                                        ">The University of Melbourne</Link>
              </li>
              <li><Link to="/employer/monash-university/3182/
                                        ">Monash University</Link>
              </li>
              <li><Link to="/employer/victoria-university/3871/
                                    ">Victoria University</Link>
              </li>
              <li><Link to="/employer/university-of-divinity/3872/
                                    ">University of Divinity</Link>
              </li>
              <li><Link to="/employer/swimburne-university-of-technology/3870/
                                    ">Swimburne University of Technology</Link>
              </li>
              <li><Link to="/employer/rmit-university/3869/
                                    ">RMIT University</Link>
              </li>
              <li><Link to="/employer/la-trobe-university/3868/
                                    ">La Trobe University</Link>
              </li>
              <li><Link to="/employer/company/deakin-university/3856/
                                    ">Deakin University</Link>
              </li>
              <li><Link to="/employer/federation-university/3787/
                                    ">Federation University Australia</Link></li>
              <li className='mb-1 '><Link to="/find-jobs/tasmania/" className='text-[#f4a10c] font-bold'>Tasmania</Link></li>
              <li><Link to="h/employer/university-of-tasmania/3867/
                                    ">The University of Tasmania</Link>
              </li>
            </ul>
            <ul>
              <li className='mb-1 '><Link to="/find-jobs/queensland/" className='text-[#f4a10c] font-bold'>Queensland</Link></li>
              <li><Link to="/employer/bond-university/3785/
                                    ">Bond University</Link></li>
              <li><Link to="/employer/university-of-queensland/3172/">The
                University of Queensland</Link></li>
              <li><Link to="/employer/cquniversity/3854/">CQUniversity</Link>
              </li>

              <li><Link to="/employer/griffith-university/3860/">Griffith
                University</Link>
              </li>
              <li><Link to="/employer/james-cook-university/3857/">James
                Cook University</Link>
              </li>
              <li><Link to="/employer/university-of-southern-queensland/3861/">University of
                Southern Queensland</Link>
              </li>
              <li><Link to="/employer/queensland-university-of-technology/3786/">Queensland
                University of Technology</Link>
              </li>
              <li><Link to="/employer/university-of-sunshine-coast/3859/">University of Sunshine
                Coast</Link></li>
              <li className='mb-1 '><Link to="/find-jobs/northern-territory/" className='text-[#f4a10c] font-bold'>Northern
                Territory</Link></li>
              <li><Link to="/employer/charles-darwin-university/3880/">Charles Darwin
                University</Link>
              </li>
            </ul>
            <ul>
              <li className='mb-1 '><Link to="/find-jobs/south-australia/" className='text-[#f4a10c] font-bold'>South
                Australia</Link></li>
              <li><Link to="/employer/the-university-of-adelaide/3737/">The
                University of Adelaide</Link>
              </li>
              <li><Link to="/employer/carnegie-mellon-university/3146/">Carnegie Mellon
                University</Link> </li>
              <li><Link to="/employer/torrens-university-australia/3875/">Torrens University
                Australia</Link></li>
              <li><Link to="/employer/university-of-south-australia/3874/">University of South
                Australia</Link></li>
              <li><Link to="/employer/flinders-university/3873/">Flinders
                University</Link>
              </li>
              <li className='mb-1 '><Link to="/find-jobs/western-australia/" className='text-[#f4a10c] font-bold'>Western
                Australia</Link></li>
              <li><Link to="/employer/university-of-western-australia/3173/">The University of
                Western Australia</Link></li>
              <li><Link to="/employer/university-of-notre-dame/3879/">University of Notre Dame</Link>
              </li>
              <li><Link to="/employer/murdoch-university/3878/">Murdoch
                University</Link>
              </li>
              <li><Link to="/employer/edith-cowan-university/3877/">Edith
                Cowan University</Link>
              </li>
              <li><Link to="/employer/curtin-university/3876/">Curtin
                University</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Australia