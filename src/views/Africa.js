import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Africa = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Africa</title>
        <meta name="description" content="Find your dream academic job in Africa and join the leading universities at Africa university jobs with professor, researcher or manager roles." />
        <meta name="keywords" content="Academic Jobs Africa, academic jobs in Africa, Africa university jobs" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-left py-8 ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl">Academic Jobs Africa: The Best Uni Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7">Academic Jobs Africa is a platform that connects you with the best academic employers and candidates. You can browse through hundreds of job listings in various disciplines and fields, such as engineering, health sciences, humanities, social sciences, education, and more. You can also filter your search by country, region, institution type, salary range, and contract duration.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
          <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">Academic Jobs Africa University List</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/egypt/" className='text-[#f4a10c] font-bold'>Egypt</Link></li>
            <li><Link to="/employer/cairo-university/6226/">Cairo
              University</Link>
            </li>
            <li><Link to="/employer/american-university-in-cairo/5798/">American
              University in Cairo</Link>
            </li>
            <li><Link to="/employer/alexandria-university/5713/">Alexandria
              University</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/south-africa/" className='text-[#f4a10c] font-bold'>South Africa</Link></li>
            <li><Link to="/employer/university-of-cape-town/12637/">University of
              Cape Town</Link></li>
            <li><Link to="/employer/university-of-the-witwatersrand/13133/">University of
              the Witwatersrand</Link></li>
            <li><Link to="/employer/stellenbosch-university/13008/">Stellenbosch
              University</Link></li>
            <li><Link to="/employer/university-of-pretoria/12935/">University of
              Pretoria</Link></li>
            <li><Link to="/employer/12787/university-of-kwazulu-natal/">University of
              KwaZulu-Natal</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/nigeria/" className='text-[#f4a10c] font-bold'>Nigeria</Link></li>
            <li><Link to="/employer/university-of-ibadan/12743/">University of
              Ibadan</Link>
            </li>
            <li><Link to="/employer/ahmadu-bello-university/6388/">Ahmadu Bello
              University</Link></li>
            <li><Link to="/employer/university-of-lagos/12789/">University of
              Lagos</Link>
            </li>
            <li><Link to="/employer/obafemi-awolowo-university/9482/">Obafemi
              Awolowo University</Link>
            </li>
            <li><Link to="/employer/university-of-nigeria-nsukka/12881/">University of
              Nigeria, Nsukka</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/kenya/" className='text-[#f4a10c] font-bold'>Kenya</Link></li>
            <li><Link to="/employer/university-of-nairobi/12866/">University of
              Nairobi</Link>
            </li>
            <li><Link to="/employer/kenyatta-university/8470/">Kenyatta
              University</Link>
            </li>
            <li><Link to="/employer/strathmore-university/10485/">Strathmore
              University</Link>
            </li>
            <li><Link to="/employer/moi-university/9051/">Moi
              University</Link>
            </li>
            <li><Link to="/employer/egerton-university/7048/">Egerton
              University</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/morocco/" className='text-[#f4a10c] font-bold'>Morocco</Link></li>
            <li><Link to="/employer/university-mohammed-v-of-rabat/12453/">University
              Mohammed V of Rabat</Link></li>
            <li><Link to="/employer/cadi-ayyad-university/12262/">Cadi Ayyad
              University</Link>
            </li>
            <li><Link to="/employer/hassan-ii-university-of-casablanca/12426/">Hassan II
              University of Casablanca</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/ghana/" className='text-[#f4a10c] font-bold'>Ghana</Link></li>
            <li><Link to="/employer/university-of-ghana/12711/">University of
              Ghana</Link>
            </li>
            <li><Link to="/employer/kwame-nkrumah-university-of-science-and-technology/8649/">Kwame Nkrumah
              University of Science and Technology</Link>
            </li>
            <li><Link to="/employer/university-of-cape-coast/12636/">University of
              Cape Coast</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/senegal/" className='text-[#f4a10c] font-bold'>Senegal</Link></li>
            <li><Link to="/employer/cheikh-anta-diop-university/12272/">Cheikh Anta
              Diop University</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/tunisia/" className='text-[#f4a10c] font-bold'>Tunisia</Link></li>
            <li><Link to="/employer/university-of-tunis-el-manar/12393/">University of
              Tunis El Manar</Link>
            </li>
            <li><Link to="/employer/university-of-sfax/12370/">University of
              Sfax</Link>
            </li>
            <li><Link to="/employer/university-of-carthage/12303/">University of
              Carthage</Link></li>
          </ul>
          <ul>
            <li className='mb-1 '><Link to="/find-jobs/uganda/" className='text-[#f4a10c] font-bold'>Uganda</Link></li>
            <li><Link to="/employer/makerere-university/8875/">Makerere
              University</Link>
            </li>
            <li><Link to="/employer/uganda-martyrs-university/10962/">Uganda
              Martyrs University</Link>
            </li>
            <li><Link to="/employer/kyambogo-university/8660/">Kyambogo
              University</Link>
            </li>
          </ul>
        </div>
      </div>
     
      </div>
    </div>
  )
}
export default Africa