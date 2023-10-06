import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { Helmet } from "react-helmet";
const SiteMap = () => {
  const navigate = useNavigate()
  return (



    <div className='w-full h-full'>

      <Helmet>
        <title>AcademicJobs Sitemap</title>
        <meta name="description" content="Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision." />
        <meta name="keywords" content="Find Universities. Find Employers, Find institutions" />
      </Helmet>


      <div className="blurb text-left py-8 px-7">
        <h1 className="text-[#f4a10c] font-bold text-lg md:text-2xl">AcademicJobs Sitemap</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="">
The sitemap of Academic Job provides an overview of the pages and links on the website. Whether you are a job seeker or an employer, you can find everything.</p>
          <p className=""></p>
        </div>
      </div>

      <div className="bg-white flex flex-col  ">
      <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">University Articles</h2>
        <div className=" text-left  grid grid-cols-1 md:grid-cols-4  py-2 px-7 ">
          <Link to="/company/3604/boston-college/" className=''>Boston College</Link>
          <Link to="/company/3285/northeastern-university/" className=''>Northeastern University</Link>
          <Link to="/company/3396/university-of-massachusetts-amherst/" className=''>University of Massachusetts Amherst</Link>
          <Link to="/company/3460/tufts-university/" className=''> Tufts University</Link>
          <Link to="/company/3190/boston-university/" className=''>Boston University</Link>
          
        </div>
      </div>

      <div className="bg-white flex flex-col  ">
      <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Find Academic Positions / Roles</h2>
        <div className=" text-left  grid grid-cols-1 md:grid-cols-4  py-2 px-7 ">
          <Link to="/find-jobs/Lecturer/" className=''>Lecturer</Link>
          <Link to="/find-jobs/Professor/" className=''>Professor</Link>
          <Link to="/find-jobs/Researcher/" className=''>Researcher</Link>
          <Link to="/find-jobs/Lab-Technician/" className=''>Lab Technician</Link>
          <Link to="/find-jobs/Assistant-Professor/" className=''>Assistant Professor</Link>
          <Link to="/find-jobs/Associate-Professor/" className=''>Associate Professor</Link>
          <Link to="/find-jobs/Postdoctoral-Researcher/" className=''>Postdoctoral Researcher</Link>
          <Link to="/find-jobs/Postdoctoral-Fellow/" className=''>Postdoctoral Fellow</Link>
          <Link to="/find-jobs/Visiting-Global-Academic/" className=''>Visiting Global Academic</Link>
          <Link to="/find-jobs/Visiting-Scholar-Fellow/" className=''>Visiting Scholar or Fellow</Link>
          <Link to="/find-jobs/Tutor/" className=''>Tutor</Link>
          <Link to="/find-jobs/Other/" className=''>Other</Link>
        </div>
      </div>
      <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Job Specialties</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/administration-support/" className='text-[#f4a10c] font-bold'>Administration & Support Jobs</Link></li>
                <ul className="innerUL">
                 
                  <li><Link to="/find-jobs/administration-support/" >Admin & Support</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Agriculture </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/agricultural-economics-agribusiness/" className=''>Agricultural Economics and Agribusiness</Link></li>
                  <li><Link to="/find-jobs/agriculture-extension/" className=''>Agricultural Extension </Link></li>
                  <li><Link to="/find-jobs/animal-science/" className=''>Animal Science</Link></li>
                  <li><Link to="/find-jobs/entomology/" className=''>Entomology </Link></li>
                  <li><Link to="/find-jobs/environmental-science-ecology-forestry/" className=''>Environmental Science, Ecology, and Forestry </Link></li>
                  <li><Link to="/find-jobs/agriculture-food-science/" className=''>Food Science </Link></li>
                  <li><Link to="/find-jobs/horticulture-landscape-architecture/" className=''>Horticulture and Landscape Architecture </Link></li>
                  <li><Link to="/find-jobs/agriculture-plant-soil-science/" className=''>Plant and Soil Science </Link></li>
                  <li><Link to="/find-jobs/veterinary-science/" className=''>Veterinary Medicine </Link></li>
                  <li><Link to="/find-jobs/" className=''>Other Agriculture Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/business/" className='text-[#f4a10c] font-bold'>Business </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/accounting/" className=''>Business Accounting </Link></li>
                  <li><Link to="/find-jobs/administration/" className=''>Business Administration </Link></li>
                  <li><Link to="/find-jobs/law/" className=''>Business Law </Link></li>
                  <li><Link to="/find-jobs/entrepreneurship/" className=''>Entrepreneurship </Link></li>
                  <li><Link to="/find-jobs/finance/" className=''>Finance </Link></li>
                  <li><Link to="/find-jobs/hotel-restaurant-management/" className=''>Hotel and Restaurant Management </Link></li>
                  <li><Link to="/find-jobs/human-resources/" className=''>Business Human Resources </Link></li>
                  <li><Link to="/find-jobs/information-systems-technology/" className=''>Information Systems and Technology </Link></li>
                  <li><Link to="/find-jobs/international-business/" className=''>International Business </Link></li>
                  <li><Link to="/find-jobs/business-management/" className=''>Business Management </Link></li>
                  <li><Link to="/find-jobs/marketing-sales/" className=''>Marketing and Sales </Link></li>
                  <li><Link to="/find-jobs/business-other-specialty/" className=''>Other Business Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/fine-applied-arts/" className='text-[#f4a10c] font-bold'>Fine and Applied Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/architecture/" className=''>Architecture </Link></li>
                  <li><Link to="/find-jobs/art/" className=''>Art </Link></li>
                  <li><Link to="/find-jobs/art-history/" className=''>Art History </Link></li>
                  <li><Link to="/find-jobs/dance/" className=''>Dance </Link></li>
                  <li><Link to="/find-jobs/digital-arts/" className=''>Digital Arts </Link></li>
                  <li><Link to="/find-jobs/fashion-textile-design/" className=''>Fashion and Textile Design </Link></li>
                  <li><Link to="/find-jobs/graphic-design/" className=''>Graphic Design </Link></li>
                  <li><Link to="/find-jobs/industrial-design/" className=''>Industrial Design </Link></li>
                  <li><Link to="/find-jobs/interior-design/" className=''>Interior Design </Link></li>
                  <li><Link to="/find-jobs/music/" className=''>Music </Link></li>
                  <li><Link to="/find-jobs/photography/" className=''>Photography </Link></li>
                  <li><Link to="/find-jobs/theatre/" className=''>Theatre </Link></li>
                  <li><Link to="/find-jobs/fine-applied-arts-other-specialities/" className=''>Other Fine and Applied Arts Specialities </Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/human-resources/" className='text-[#f4a10c] font-bold'>
                  Human Resources Jobs </Link></li>
                <ul className="innerUL">
                <li><Link to="/find-jobs/human-resources/" >HR Jobs</Link></li>
                  
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Communications </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/broadcast-journalism/" className=''>Broadcast Journalism </Link></li>
                  <li><Link to="/find-jobs/journalism/" className=''>Journalism </Link></li>
                  <li><Link to="/find-jobs/media-communication-studies/" className=''>Media and Communication Studies </Link></li>
                  <li><Link to="/find-jobs/public-relations-advertising/" className=''>Public Relations and Advertising </Link></li>
                  <li><Link to="/find-jobs/faculty-communications-radio-tv-film/" className=''>Radio, Television, and Film </Link></li>
                  <li><Link to="/find-jobs/speech-public-speaking/" className=''>Speech and Public Speaking </Link></li>
                  <li><Link to="/find-jobs/communications-other-specialty/" className=''>Other Communications Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Engineering </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/aerospace/" className=''>Aerospace Engineering </Link></li>
                  <li><Link to="/find-jobs/engineering-agricultural/" className=''>Agricultural Engineering </Link></li>
                  <li><Link to="/find-jobs/biological-engineering/" className=''>Biological Engineering </Link></li>
                  <li><Link to="/find-jobs/chemical-engineering/" className=''>Chemical Engineering </Link></li>
                  <li><Link to="/find-jobs/civil-environmental-engineering/" className=''>Civil and Environmental Engineering </Link></li>
                  <li><Link to="/find-jobs/computer-engineering/" className=''>Computer Engineering </Link></li>
                  <li><Link to="/find-jobs/electrical-engineering/" className=''>Electrical Engineering </Link></li>
                  <li><Link to="/find-jobs/industrial-manufacturing-engineering/" className=''>Industrial and Manufacturing Engineering </Link></li>
                  <li><Link to="/find-jobs/mechanical-engineering/" className=''>Mechanical Engineering </Link></li>
                  <li><Link to="/find-jobs/engineering-other-specialty/" className=''>Other Engineering Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/education" className='text-[#f4a10c] font-bold'>Education </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/adult-distance-education/" className=''>Adult and Distance Education </Link></li>
                  <li><Link to="/find-jobs/counselor-education/" className=''>Counselor Education </Link></li>
                  <li><Link to="/find-jobs/curriculum-instruction/" className=''>Curriculum and Instruction </Link></li>
                  <li><Link to="/find-jobs/admin-leadership-education/" className=''>Educational Administration and Leadership </Link></li>
                  <li><Link to="/find-jobs/educational-psychology/" className=''>Educational Psychology </Link></li>
                  <li><Link to="/find-jobs/higher-education/" className=''>Higher Education </Link></li>
                  <li><Link to="/find-jobs/education-instructional-technology-design/" className=''>Instructional Technology and Design </Link></li>
                  <li><Link to="/find-jobs/reading-literacy/" className=''>Reading and Literacy </Link></li>
                  <li><Link to="/find-jobs/school-psychology/" className=''>School Psychology </Link></li>
                  <li><Link to="/find-jobs/special-education/" className=''>Special Education </Link></li>
                  <li><Link to="/find-jobs/teacher-education/" className=''>Teacher Education </Link></li>
                  <li><Link to="/find-jobs/teacher-education-early-childhood/" className=''>Teacher Education - Early Childhood </Link></li>
                  <li><Link to="/find-jobs/teacher-education-elementary/" className=''>Teacher Education - Elementary </Link></li>
                  <li><Link to="/find-jobs/teacher-education-middle/" className=''>Teacher Education - Middle School </Link></li>
                  <li><Link to="/find-jobs/teacher-education-secondary/" className=''>Teacher Education - Secondary Education </Link></li>
                  <li><Link to="/find-jobs/education-other-specialty/" className=''>Other Education Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/faculty-executive/" className='text-[#f4a10c] font-bold'>
                  Executive Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/executive-president-chancellor/" className=''>President & Chancellor </Link></li>
                  <li><Link to="/find-jobs/faculty-executive/" className=''>Executive In Faculty</Link></li>
                </ul>
              </ul>
       
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/health-sciences/" className='text-[#f4a10c] font-bold'>Health Sciences </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/athletic-training/" className=''>Athletic Training </Link></li>
                  <li><Link to="/find-jobs/communication-sciences-disorders/" className=''>Communication Sciences and Disorders </Link></li>
                  <li><Link to="/find-jobs/health-education-promotion/" className=''>Health Education and Promotion </Link></li>
                  <li><Link to="/find-jobs/health-information-technology/" className=''>Health Information Technology </Link></li>
                  <li><Link to="/find-jobs/healthcare-administration/" className=''>Healthcare Administration </Link></li>
                  <li><Link to="/find-jobs/kinesiology-exercise-science-phys-ed/" className=''>Kinesiology, Exercise Science, and Phys Ed </Link></li>
                  <li><Link to="/find-jobs/nursing/" className=''>Nursing </Link></li>
                  <li><Link to="/find-jobs/nutrition-dietetics/" className=''>Nutrition and Dietetics </Link></li>
                  <li><Link to="/find-jobs/occupational-therapy/" className=''>Occupational Therapy </Link></li>
                  <li><Link to="/find-jobs/physical-therapy/" className=''>Physical Therapy </Link></li>
                  <li><Link to="/find-jobs/public-environmental-health/" className=''>Public and Environmental Health </Link></li>
                  <li><Link to="/find-jobs/recreation-leisure-studies/" className=''>Recreation and Leisure Studies </Link></li>
                  <li><Link to="/find-jobs/sport-management/" className=''>Sport Management </Link></li>
                  <li><Link to="/find-jobs/health-sciences-other-specialities/" className=''>Other Health Sciences Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Law and Legal Studies </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/law-legal-studies/" className=''>Law and Legal Studies </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/liberal-arts/" className='text-[#f4a10c] font-bold'>Liberal Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/american-studies/" className=''>American Studies </Link></li>
                  <li><Link to="/find-jobs/anthropology/" className=''>Anthropology </Link></li>
                  <li><Link to="/find-jobs/criminal-justice/" className=''>Criminal Justice </Link></li>
                  <li><Link to="/find-jobs/economics" className=''>Economics </Link></li>
                  <li><Link to="/find-jobs/english-literature/" className=''>English and Literature </Link></li>
                  <li><Link to="/find-jobs/english-as-second-language/" className=''>English as a Second Language </Link></li>
                  <li><Link to="/find-jobs/ethnic-multicultural-studies/" className=''>Ethnic and Multicultural Studies </Link></li>
                  <li><Link to="/find-jobs/foreign-languages-literatures/" className=''>Foreign Languages and Literatures </Link></li>
                  <li><Link to="/find-jobs/history/" className=''>History </Link></li>
                  <li><Link to="/find-jobs/human-development-family-studies/" className=''>Human Development and Family Studies </Link></li>
                  <li><Link to="/find-jobs/humanities/" className=''>Humanities </Link></li>
                  <li><Link to="/find-jobs/linguistics/" className=''>Linguistics </Link></li>
                  <li><Link to="/find-jobs/philosophy/" className=''>Philosophy </Link></li>
                  <li><Link to="/find-jobs/political-science/" className=''>Political Science </Link></li>
                  <li><Link to="/find-jobs/psychology/" className=''>Psychology </Link></li>
                  <li><Link to="/find-jobs/public-administration-policy/" className=''>Public Administration and Policy </Link></li>
                  <li><Link to="/find-jobs/religious-studies-theology/" className=''>Religious Studies and Theology </Link></li>
                  <li><Link to="/find-jobs/security-studies/" className=''>Security Studies </Link></li>
                  <li><Link to="/find-jobs/sign-language/" className=''>Sign Language </Link></li>
                  <li><Link to="/find-jobs/social-work/" className=''>Social Work </Link></li>
                  <li><Link to="/find-jobs/sociology/" className=''>Sociology </Link></li>
                  <li><Link to="/find-jobs/urban-studies-planning/" className=''>Urban Studies and Planning </Link></li>
                  <li><Link to="/find-jobs/women-s-gender-studies/" className=''>Women's and Gender Studies </Link></li>
                  <li><Link to="/find-jobs/liberal-arts-other-specialities/" className=''>Other Liberal Arts Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/industry/" className='text-[#f4a10c] font-bold'>Industry Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/industry/" className=''>Industry</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/medicine/" className='text-[#f4a10c] font-bold'>Medicine </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/chiropractic/" className=''>Chiropractic </Link></li>
                  <li><Link to="/find-jobs/dentistry/" className=''>Dentistry </Link></li>
                  <li><Link to="/find-jobs/medical-research/" className=''>Medical Research </Link></li>
                  <li><Link to="/find-jobs/pharmacy-pharmacology/" className=''>Pharmacy and Pharmacology </Link></li>
                  <li><Link to="/find-jobs/physician-assistant/" className=''>Physician Assistants </Link></li>
                  <li><Link to="/find-jobs/physicians/" className=''>Physicians </Link></li>
                  <li><Link to="/find-jobs/medicine-other-specialities/" className=''>Other Medicine Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/science/" className='text-[#f4a10c] font-bold'>Science </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/astronomy-astrophysics/" className=''>Astronomy and Astrophysics </Link></li>
                  <li><Link to="/find-jobs/biochemistry-molecular-biology/" className=''>Biochemistry and Molecular Biology </Link></li>
                  <li><Link to="/find-jobs/biology/" className=''>Biology </Link></li>
                  <li><Link to="/find-jobs/chemistry/" className=''>Chemistry </Link></li>
                  <li><Link to="/find-jobs/computer-science/" className=''>Computer Science </Link></li>
                  <li><Link to="/find-jobs/geography/" className=''>Geography </Link></li>
                  <li><Link to="/find-jobs/geology-earth-sciences-oceanography/" className=''>Geology, Earth Sciences, and Oceanography </Link></li>
                  <li><Link to="/find-jobs/library-information-science/" className=''>Library and Information Science </Link></li>
                  <li><Link to="/find-jobs/mathematics/" className=''>Mathematics </Link></li>
                  <li><Link to="/find-jobs/physics/" className=''>Physics </Link></li>
                  <li><Link to="/find-jobs/statistics/" className=''>Statistics </Link></li>
                  <li><Link to="/find-jobs/science-other-speciality/" className=''>Other Science Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Technical and Career </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/automotive-technology/" className=''>Automotive Technology </Link></li>
                  <li><Link to="/find-jobs/aviation/" className=''>Aviation </Link></li>
                  <li><Link to="/find-jobs/construction-building-trades/" className=''>Construction and Building Trades </Link></li>
                  <li><Link to="/find-jobs/cosmetology/" className=''>Cosmetology </Link></li>
                  <li><Link to="/find-jobs/culinary-arts/" className=''>Culinary Arts </Link></li>
                  <li><Link to="/find-jobs/dental-hygienists-assistants/" className=''>Dental Hygienists and Assistants </Link></li>
                  <li><Link to="/find-jobs/diagnostic-imaging-radiography/" className=''>Diagnostic Imaging and Radiography </Link></li>
                  <li><Link to="/find-jobs/electronics/" className=''>Electronics </Link></li>
                  <li><Link to="/find-jobs/fire-science/" className=''>Fire Science </Link></li>
                  <li><Link to="/find-jobs/massage-therapy/" className=''>Massage Therapy </Link></li>
                  <li><Link to="/find-jobs/medical-assistants/" className=''>Medical Assistants </Link></li>
                  <li><Link to="/find-jobs/medical-billing-coding/" className=''>Medical Billing and Coding </Link></li>
                  <li><Link to="/find-jobs/paramedics-emts/" className=''>Paramedics and EMTs </Link></li>
                  <li><Link to="/find-jobs/respiratory-care/" className=''>Respiratory Care </Link></li>
                  <li><Link to="/find-jobs/surgical-technology/" className=''>Surgical Technology </Link></li>
                  <li><Link to="/find-jobs/telecommunications/" className=''>Telecommunications </Link></li>
                  <li><Link to="/find-jobs/tourism/" className=''>Tourism </Link></li>
                  <li><Link to="/find-jobs/" className=''>Other Technical and Career Faculty </Link></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
   



      <div className="region-container bg-white">
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">UNITED STATES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>California</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Massachusetts</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Georgia</li>
            <li><Link to="/employer/emory-university/3372/">Emory University</Link>
            </li>
            <li><Link to="/employer/georgia-institute-of-technology/3154/">Georgia
              Institute of Technology</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Florida</li>
            <li><Link to="/employer/university-of-miami/5475/">University of
              Miami</Link>
            </li>
            <li><Link to="/employer/miami-university/3350/">Miami University</Link>
            </li>
            <li><Link to="/employer/university-of-florida/3394/">University of
              Florida</Link>
            </li>
            <li className='mb-1 text-[#f4a10c] font-bold'>North
              Carolina</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>New york</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Pennsylvania</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Illinois</li>
            <li><Link to="/employer/University-of-Chicago/3126/
                                                            ">University of Chicago</Link></li>
            <li><Link to="/employer/Northwestern-University/3143/
                                                            ">Northwestern University</Link></li>
            <li><Link to="/employer/northern-illinois-university/3415/
                                                                ">Northern Illinois University</Link></li>
            <li><Link to="/employer/university-of-illinois-at-urbana-champaign/3164/
                                                                ">University of Illinois at Urbana-Champaign</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Michigan</li>
            <li><Link to="/employer/university-of-michigan/3142/
                                                                    ">University of Michigan</Link></li>
            <li><Link to="/employer/michigan-state-university/3654/
                                                                        ">Michigan State University</Link></li>
            <li><Link to="/employer/wayne-state-university/3499/
                                                                            "> Wayne State University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'> All States</li>
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
      <div class="region-container">
        <div>
          <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">AUSTRALIA</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className='mb-1 text-[#f4a10c] font-bold'>ACT</li>
              <li><Link to="/employer/australian-national-university/3739/">Australian National
                University</Link></li>
              <li><Link to="/employer/university-of-canberra/3821/">University of Canberra</Link>
              </li>
              <li className='mb-1 text-[#f4a10c] font-bold'>New South Wales</li>
              <li className='mb-1 text-[#f4a10c] font-bold'>New South Wales</li>
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
              <li className='mb-1 text-[#f4a10c] font-bold'>Victoria</li>
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
              <li className='mb-1 text-[#f4a10c] font-bold'>Tasmania</li>
              <li><Link to="h/employer/university-of-tasmania/3867/
                                    ">The University of Tasmania</Link>
              </li>
            </ul>
            <ul>
              <li className='mb-1 text-[#f4a10c] font-bold'>Queensland</li>
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
              <li className='mb-1 text-[#f4a10c] font-bold'>South
                Australia</li>
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
              <li className='mb-1 text-[#f4a10c] font-bold'>Western
                Australia</li>
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
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">AFRICA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Egypt</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>South Africa</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Nigeria</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Kenya</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Morocco</li>
            <li><Link to="/employer/university-mohammed-v-of-rabat/12453/">University
              Mohammed V of Rabat</Link></li>
            <li><Link to="/employer/cadi-ayyad-university/12262/">Cadi Ayyad
              University</Link>
            </li>
            <li><Link to="/employer/hassan-ii-university-of-casablanca/12426/">Hassan II
              University of Casablanca</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Ghana</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Senegal</li>
            <li><Link to="/employer/cheikh-anta-diop-university/12272/">Cheikh Anta
              Diop University</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Tunisia</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Uganda</li>
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
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">ASIA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Singapore</li>
            <li><Link to="/employer/nanyang-technological-university-singapore/3152/">Nanyang
              Technological University</Link></li>
            <li><Link to="/employer/national-university-of-singapore/3137/">National University of Singapore</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Malaysia</li>
            <li><Link to="/employer/universiti-ualaya/12499/">Universiti Malaya (UM)</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>China</li>
            <li><Link to="/employer/peking-university/3133/">Peking
              University</Link></li>
            <li><Link to="/employer/tsinghua-university/3840/">Tsinghua University</Link></li>
            <li><Link to="/employer/fudan-university/7289/">Fudan University</Link></li>
            <li><Link to="/employer/shanghai-jiao-tong-university/6876/">Shanghai Jiao Tong University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Japan</li>
            <li><Link to="/employer/university-of-tokyo/3155/">University of Tokyo</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Indonesia</li>
            <li><Link to="/employer/the-university-of-indonesia/12068/">The University of Indonesia</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Thailand</li>
            <li><Link to="/employer/chulalongkorn-university/6615/">Chulalongkorn University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Hong Kong</li>
            <li><Link to="/employer/university-of-hong-kong/3148/">University of Hong Kong</Link>
            </li>
            <li><Link to="/employer/chinese-university-of-hong-kong/3161/">Chinese University of
              Hong Kong</Link></li>
            <li><Link to="/employer/the-hong-kong-university-of-science-and-technology/3843/">The Hong Kong University of Science and Technology</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>South Korea</li>
            <li><Link to="/employer/seoul-national-university/10119/">Seoul National University</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">CANADA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Alberta</li>
            <li><Link to="/employer/university-of-alberta/3837/">University of Alberta</Link></li>
            <li><Link to="/employer/university-of-calgary/12631/">University of Calgary</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Quebec</li>
            <li><Link to="/employer/mcgill-university/3162/">McGill University</Link></li>
            <li><Link to="/employer/universite-de-montreal/3836/">Universite De
              Montreal</Link></li>
            <li><Link to="/employer/university-of-waterloo/3838/">University of
              Waterloo</Link></li>
            <li><Link to="/employer/laval-university/12443">Laval University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Ontario</li>
            <li><Link to="/employer/university-of-toronto//3134/">University of
              Toronto</Link></li>
            <li><Link to="/employer/university-of-british-columbia/3157/">University of
              British Columbia</Link></li>
            <li><Link to="/employer/simon-fraser-university/10280/">Simon Fraser University</Link></li>
            <li><Link to="/employer/mcmaster-university/3835/">McMaster University</Link></li>
          </ul>
          <ul>
           
            <li><Link to="/employer/university-of-ottawa/12910/">University of Ottawa</Link></li>
            <li><Link to="/employer/york-university/13421/">York University</Link></li>
            <li><Link to="/employer/queens-university/9836/">Queen's University</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">UNITED KINGDOM</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>England</li>
            <li><Link to="/employer/university-of-cambridge/12635/">University of
              Cambridge</Link></li>
            <li><Link to="/employer/university-of-oxford/3099/">University of
              Oxford</Link>
            </li>
            <li><Link to="/employer/university-college-london/12527/">University
              College London</Link>
            </li>
            <li><Link to="/employer/imperial-college-london/3129/">Imperial
              College London</Link></li>
            <li><Link to="/employer/london-school-of-economics-and-political-science/3153/">London School
              of Economics and Political Science</Link>
            </li>
            <li><Link to="/employer/university-of-manchester/3833/">University of
              Manchester</Link></li>
            <li><Link to="/employer/university-of-birmingham/12614/">University of
              Birmingham</Link></li>
            <li><Link to="/employer/university-of-leeds/12797/">University of
              Leeds</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Scotland</li>
            <li><Link to="/employer/university-of-edinburgh/12681/">University of
              Edinburgh</Link></li>
            <li><Link to="/employer/university-of-glasgow/12713/">University of
              Glasgow</Link>
            </li>
            <li><Link to="/employer/university-of-aberdeen/12555/">University of
              Aberdeen</Link></li>
            <li><Link to="/employer/university-of-st-andrews/13005/">University of
              St Andrews</Link></li>
            <li><Link to="/employer/university-of-dundee/12669/">University of
              Dundee</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Wales</li>
            <li><Link to="/employer/cardiff-university/6252/">Cardiff
              University</Link>
            </li>
            <li><Link to="/employer/swansea-university/10538/">Swansea
              University</Link>
            </li>
            <li><Link to="/employer/aberystwyth-university/13115/">Aberystwyth
              University</Link></li>
            <li><Link to="/employer/bangor-university/13116/">Bangor
              University</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Northern Ireland</li>
            <li><Link to="/employer/queens-university-belfast/10799/">Queen's
              University Belfast</Link>
            </li>
            <li><Link to="/employer/ulster-university/13098/">Ulster
              University</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">SOUTH AMERICA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Brazil</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Argentina</li>
            <li><Link to="/employer/universidad-de-buenos-aires/11196/">Universidad de Buenos
              Aires</Link>
            </li>

            <li className='mb-1 text-[#f4a10c] font-bold'>Colombia</li>
            <li><Link to="/employer/universidad-de-los-andes/11308/">Universidad de los
              Andes</Link></li>

            <li><Link to="/employer/icesi-university/11648/">Icesi University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Chile</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>Peru</li>
            <li><Link to="/employer/universidad-alas-peruanas/11010/">Universidad Alas
              Peruanas</Link>
            </li>
            <li><Link to="/employer/universidad-peruana-cayetano-heredia/11856/">Universidad Peruana Cayetano Heredia</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">NEW ZEALAND</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>North Island</li>
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
            <li className='mb-1 text-[#f4a10c] font-bold'>South Island</li>
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
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">MIDDLE EAST</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Saudi Arabia</li>
            <li><Link to="/employer/king-saud-university-saudi-arabia/8522/">King
              Saud University</Link>
            </li>
            <li><Link to="/employer/king-abdullah-university-of-science-and-technology-saudi-arabia/8513/">King
              Abdullah University of Science and Technology</Link></li>
            <li><Link to="/employer/king-abdul-aziz-university-saudi-arabia/8512/">King
              Abdul Aziz University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>UAE</li>
            <li><Link to="/employer/khalifa-university-uae/8481/">Khalifa
              University</Link>
            </li>
            <li><Link to="/employer/united-arab-emirates-university-uae/10985/">United
              Arab Emirates University</Link></li>
            <li><Link to="/employer/american-university-in-dubai-uae/5799/">American
              University in Dubai</Link></li>
            <li><Link to="/employer/american-university-of-sharjah-uae/5815/">American
              University of Sharjah</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Lebanon</li>
            <li><Link to="/employer/american-university-of-beirut-lebanon/5804/">American
              University of Beirut</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Jordan</li>
            <li><Link to="/employer/university-of-jordan-jordan/12763/">University
              of Jordan</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Qatar</li>
            <li><Link to="/employer/qatar-university-qatar/12944/">Qatar
              University</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">INDIA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Mumbai</li>
            <li><Link to="/employer/indian-institute-of-technology-bombay/3844/">Indian
              Institute of Technology Bombay</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Chennai</li>
            <li><Link to="/employer/indian-institute-of-technology-madras/3845/">Indian
              Institute of Technology Madras</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Vellore</li>
            <li><Link to="/employer/vellore-institute-of-technology/3846/">Vellore
              Institute of Technology</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Bangalore</li>
            <li><Link to="/employer/indian-institute-of-science/7818/">Indian
              Institute of Science (IISc)</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Delhi</li>
            <li><Link to="/employer/indian-institute-of-technology-delhi/7822/">Indian
              Institute of Technology Delhi</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-1xl font-bold py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">EUROPE</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>France</li>
            <li><Link to="/employer/paris-sciences-et-lettres/3163/">Paris

              Sciences et Lettres</Link></li>
            <li><Link to="/employer/ecole-polytechnique/3158/">Ecole Polytechnique</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Sweden</li>
            <li><Link to="/employer/karolinska-institute/3165/">Karolinska Institute</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Germany</li>
            <li><Link to="/employer/heidelberg-university/3160/">Heidelberg
              University</Link></li>
            <li><Link to="/employer/lmu-munich-ludwig-maximilians-universitat/3150/">LMU
              Munich (Ludwig Maximilians Universität München)</Link></li>
            <li><Link to="/employer/technische-uiniversitat-munchen/10702/">Technische Universität München</Link></li>
          </ul>
          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Denmark</li>
            <li><Link to="/employer/the-university-of-copenhagen/3156/">University of
              Copenhagen</Link>
            </li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Switzerland</li>
            <li><Link to="/employer/eth-zurich/3132/">ETH
              Zurich</Link></li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Belgium</li>
            <li><Link to="/employer/ku-leuven/3159/">KU Leuven</Link></li>
          </ul>


          <ul>
            <li className='mb-1 text-[#f4a10c] font-bold'>Netherlands</li>
            <li><Link to="/employer/delft-university-of-technology/3847/">Delft University of Technology</Link>
            </li>
            <li className='mb-1 text-[#f4a10c] font-bold'>Italy</li>
            <li><Link to="/employer/University-of-Bologna/12015/">University of Bologna</Link></li>

            <li className='mb-1 text-[#f4a10c] font-bold'>Spain</li>
            <li><Link to="/employer/universitat-de-barcelona/12195/">Universitat de Barcelona</Link></li>

          </ul>

        </div>
      </div>
    </div>
  )
}
export default SiteMap