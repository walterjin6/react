import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const USA = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>USA Academic Jobs Online </title>
        <meta name="description" content="Search for academic jobs in USA colleges and apply to the top universities and institutions at USA college jobs with faculty, postdoc or staff roles and more." />
        <meta name="keywords" content="Academic Jobs Online. USA Academic Jobs Online, academic jobs in USA, USA college jobs" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl">USA Academic Jobs Online</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">On Academic Jobs Online find all University Positions in the USA. We have all academic jobs online job for researchers, scientists, university staff, lecturers, professors, and researchers.
          Find academic jobs in USA colleges and apply to the top universities and institutions with faculty, postdoc or staff roles and more.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">USA Academic Jobs Online: Academia Jobs by University </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/california/" className='text-[#f4a10c] font-bold'>California</Link></li>
            <li><Link to="/employer/stanford-university/3101/">Stanford University</Link></li>
            <li><Link to="/employer/california-institute/4133/">California Institute
              of Technology</Link></li>
            <li><Link to="/employer/university-of-california-san-francisco/3683/">University
              of California - San Francisco</Link></li>
            <li><Link to="/employer/university-of-southern-california/3672/">University
              of Southern California</Link></li>
            <li><Link to="/employer/university-of-california-berkeley/3105/">University
              of California - Berkeley</Link></li>
            <li><Link to="/employer/university-of-california-los-angeles/3136/">University
              of California - Los Angeles</Link></li>
            <li><Link to="/employer/university-of-california-san-diego/3149/">University
              of California - San Diego</Link></li>
            <li><Link to="/employer/university-of-california-davis/3498/">University
              of California - Davis</Link></li>
            <li><Link to="/employer/university-of-california-irvine/3689/">University
              of California - Irvine</Link></li>
            <li><Link to="/employer/university-of-california-santa-barbara/5407/">University
              of California - Santa Barbara</Link></li>
            <li><Link to="/employer/university-of-california-santa-cruz/3252/">University
              of California - Santa Cruz</Link></li>
            <li><Link to="/employer/university-of-california-Rrverside/3268/">University
              of California - Riverside</Link></li>
            <li><Link to="/employer/california-state-university-stanislaus/3414/">California
              State University Stanislaus</Link></li>
            <li><Link to="/employer/cal-poly-pomona/3728/">Cal Poly Pomona</Link></li>
            <li><Link to="/employer/california-state-university-monterey-bay/3313/">California
              State University, Monterey Bay</Link></li>
            <li><Link to="/employer/caltech/3128/">Caltech</Link>
            </li>
            <li><Link to="/employer/grossmont-cuyamaca-community-college-district/3858/">Grossmont–Cuyamaca
              Community College District</Link></li>
            <li><Link to="/employer/northeastern-university/3285/">Northeastern
              University</Link>
            </li>
            <li><Link to="/employer/loyola-marymount-university/3637/">Loyola
              Marymount University</Link></li>
            <li><Link to="/employer/palomar-college/3612/">Palomar College</Link></li>
            <li><Link to="/employer/san-diego-state-university/3693/">San Diego State
              University</Link></li>
            <li><Link to="/employer/saint-mary-s-college-of-california/3729/">Saint
              Mary's College of California</Link></li>
            <li><Link to="/employer/university-of-california-office-of-the-president/3731/">University
              of California Office of the President</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/massachusetts/" className='text-[#f4a10c] font-bold'>Massachusetts</Link></li>
            <li><Link to="/employer/massachusetts-institute-of-technology/3103/">Massachusetts
              Institute of Technology</Link></li>
            <li><Link to="/employer/harvard-university/3100/">Harvard University</Link>
            </li>
            <li><Link to="/employer/boston-university/3190/">Boston University</Link>
            </li>
            <li><Link to="/employer/boston-college/3604/">Boston College</Link>
            </li>
            <li><Link to="/employer/tufts-university/3460/">Tufts University</Link>
            </li>
            <li><Link to="/employer/northeastern-university/3285/">Northeastern
              University</Link>
            </li>
            <li><Link to="/employer/brandeis-university/3617/">Brandeis
              University</Link></li>
            <li><Link to="/employer/anna-jaques-hospital/3235/">Anna Jaques
              Hospital</Link></li>
            <li><Link to="/employer/dana-farber-cancer-institute/3108/">Dana-Farber
              Cancer Institute</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/georgia/" className='text-[#f4a10c] font-bold'>Georgia</Link></li>
            <li><Link to="/employer/emory-university/3372/">Emory University</Link>
            </li>
            <li><Link to="/employer/georgia-institute-of-technology/3154/">Georgia
              Institute of Technology</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/florida/" className='text-[#f4a10c] font-bold'>Florida</Link></li>
            <li><Link to="/employer/university-of-miami/5475/">University of
              Miami</Link>
            </li>
            <li><Link to="/employer/miami-university/3350/">Miami University</Link>
            </li>
            <li><Link to="/employer/university-of-florida/3394/">University of
              Florida</Link>
            </li>
            <li className='mb-1 '><Link to="/find-jobs/north-carolina/" className='text-[#f4a10c] font-bold'>North
              Carolina</Link></li>
            <li><Link to="/employer/duke-university/3139/">Duke University</Link>
            </li>
            <li><Link to="/employer/university-of-north-carolina/5503/">University of
              North Carolina</Link>
            </li>
            <li><Link to="/employer/the-university-of-north-carolina-at-chapel-hill/3679/">University
              of North Carolina at Chapel Hill</Link>
            </li>
            <li><Link to="/employer/university-of-north-carolina-wilmington/3253/">University
              of North Carolina Wilmington</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/new-york/" className='text-[#f4a10c] font-bold'>New york</Link></li>
            <li><Link to="/employer/columbia-university/3127/">Columbia University</Link></li>
            <li><Link to="/employer/new-york-university-nyu/3144/">New York
              University NYU</Link></li>
            <li><Link to="/employer/Cornell-University/3138/">Cornell University</Link>
            </li>
            <li><Link to="/employer/Brown-University/3308/">Brown University</Link>
            </li>
            <li><Link to="/employer/University-of-Rochester/5527/
                                                            ">University of Rochester</Link></li>
            <li><Link to="/employer/fordham-university/3685/">Fordham University</Link>
            </li>
            <li><Link to="/employer/hofstra-university/3545/">Hofstra University</Link>
            </li>
            <li><Link to="/employer/princeton-university/3104/">Princeton
              University</Link>
            </li>
            <li><Link to="/employer/rutgers-the-state-university-of-new-jersey/3255/">Rutgers,
              The State University of New Jersey</Link>
            </li>
            <li><Link to="/employer/st-john-s-university/3375/">St. John's
              University</Link>
            </li>
            <li><Link to="/employer/stony-brook-university/3456/">Stony Brook
              University</Link>
            </li>
            <li><Link to="/employer/university-at-buffalo/3609/
                                        "> University at Buffalo</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/pennsylvania/" className='text-[#f4a10c] font-bold'>Pennsylvania</Link></li>
            <li><Link to="/employer/university-of-pennsylvania/3131/
                                                            ">University of Pennsylvania</Link>
            </li>
            <li><Link to="/employer/carnegie-mellon-university/3146/
                                                            ">Carnegie Mellon University</Link>
            </li>
            <li><Link to="/employer/bucknell-university/3309/
                                            ">Bucknell University</Link>
            </li>
            <li><Link to="/employer/duquesne-university/3330/
                            ">Duquesne University</Link>
            </li>
            <li className='mb-1 '><Link to="/find-jobs/illinois/" className='text-[#f4a10c] font-bold'>Illinois</Link></li>
            <li><Link to="/employer/University-of-Chicago/3126/
                                                            ">University of Chicago</Link></li>
            <li><Link to="/employer/Northwestern-University/3143/
                                                            ">Northwestern University</Link></li>
            <li><Link to="/employer/northern-illinois-university/3415/
                                                                ">Northern Illinois University</Link></li>
            <li><Link to="/employer/university-of-illinois-at-urbana-champaign/3164/
                                                                ">University of Illinois at Urbana-Champaign</Link></li>
            <li className='mb-1 '><Link to="/find-jobs/michigan/" className='text-[#f4a10c] font-bold'>Michigan</Link></li>
            <li><Link to="/employer/university-of-michigan/3142/
                                                                    ">University of Michigan</Link></li>
            <li><Link to="/employer/michigan-state-university/3654/
                                                                        ">Michigan State University</Link></li>
            <li><Link to="/employer/wayne-state-university/3499/
                                                                            "> Wayne State University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/usa/" className='text-[#f4a10c] font-bold'>All States</Link></li>
            <li><Link to="/employer/yale-university/3125/">Yale University</Link>
            </li>
            <li><Link to="/employer/university-of-washington/3145/
                                            ">University of Washington</Link></li>
            <li><Link to="/employer/johns-hopkins-university/3130/
                                                            ">Johns Hopkins University</Link></li>
            <li><Link to="/employer/dartmouth-college/3327/">Dartmouth College</Link>
            </li>
            <li><Link to="/employer/rice-university/5067/">Rice University</Link>
            </li>
            <li><Link to="/employer/vanderbilt-university/5603/
                                                            ">Vanderbilt University</Link></li>
            <li><Link to="/employer/washington-university-in-st-louis/3655/
                                                            ">Washington University in St. Louis</Link></li>
            <li><Link to="/employer/university-of-notre-dame/3879/
                                                            ">University of Notre Dame</Link></li>
            <li><Link to="/employer/university-of-virginia/3484/
                                                            ">University of Virginia</Link></li>
            <li><Link to="/employer/georgetown-University/3522/
                                                            ">Georgetown University</Link></li>
            <li><Link to="/employer/university-of-texas-at-austin/3166/
                                                            ">University of Texas at Austin</Link></li>
            <li><Link to="/employer/university-of-wisconsin-madison/3404/
                                                            ">University of Wisconsin - Madison</Link></li>
            <li><Link to="/employer/university-of-mississippi-medical-center/3109/
                                                            ">University of Mississippi Medical Center</Link></li>
            <li><Link to="/employer/university-of-minnesota-twin-cities/3684/
                                                                ">University of Minnesota Twin Cities</Link></li>
            <li><Link to="/employer/the-ohio-state-university/3669/
                                                                    "> The Ohio State University</Link></li>
            <li><Link to="/employer/university-of-cincinnati/3393/
                                                                        "> University of Cincinnati</Link></li>
            <li><Link to="/employer/university-of-tennessee-knoxville/3401/
                                                                        "> University of Tennessee, Knoxville</Link></li>
            <li><Link to="/employer/university-of-alabama-at-birmingham/3387/
                                                                                "> University of Alabama at
              Birmingham</Link></li>
            <li><Link to="/employer/indiana-university-purdue-university-indianapolis/3658/
                                                                                            "> Indiana University
              Purdue University Indianapolis</Link></li>
            <li><Link to="/employer/the-university-of-iowa/3483/
                                                                                                "> The University of
              Iowa</Link></li>
            <li><Link to="/employer/university-of-kentucky/3510/
                                                                                                    "> University of
              Kentucky</Link></li>
            <li><Link to="/employer/oregon-state-university/3813/
                                                                                                        "> Oregon State
              University</Link>
            </li>
            <li><Link to="/employer/university-of-nebraska-medical-center/3712/
                                                                                                            ">
              University of Nebraska Medical Center</Link></li>
            <li><Link to="/employer/washington-state-university/3722/
                                                                                                                ">
              Washington State University</Link></li>
            <li><Link to="/employer/university-of-maryland-baltimore-county/3775/
                                                                                                                    ">
              University of Maryland, Baltimore County</Link></li>
          </ul>
        </div>
      </div>
     
  )
}
export default USA